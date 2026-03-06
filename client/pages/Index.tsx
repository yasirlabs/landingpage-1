import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Check,
  Star,
  ArrowRight,
  Code,
  Zap,
  Shield,
  Layers,
  Clock,
  Users,
} from "lucide-react";

interface Testimonial {
  author: string;
  title: string;
  company: string;
  text: string;
  rating: number;
}

interface FAQ {
  q: string;
  a: string;
}

// Hook to detect when element enters viewport
function useInView(ref: React.RefObject<HTMLElement>, options = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
}

export default function Index() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  // Refs for animation triggers
  const heroRef = useRef<HTMLDivElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const audienceRef = useRef<HTMLDivElement>(null);
  const includedRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const finalCtaRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef);
  const socialProofInView = useInView(socialProofRef);
  const problemInView = useInView(problemRef);
  const solutionInView = useInView(solutionRef);
  const featuresInView = useInView(featuresRef);
  const benefitsInView = useInView(benefitsRef);
  const audienceInView = useInView(audienceRef);
  const includedInView = useInView(includedRef);
  const pricingInView = useInView(pricingRef);
  const faqInView = useInView(faqRef);
  const finalCtaInView = useInView(finalCtaRef);

  const testimonials: Testimonial[] = [
    {
      author: "Alex Chen",
      title: "Senior Product Lead",
      company: "TechVenture",
      text: "We launched our entire product ecosystem 4 weeks faster using this foundation. The code quality is exceptional - our team immediately understood the architecture. Best $16 we've ever spent.",
      rating: 5,
    },
    {
      author: "Maya Patel",
      title: "Freelance Developer",
      company: "Independent",
      text: "As a freelancer, this has been a game-changer for client projects. I can now deliver professional, production-ready apps instead of spending weeks on boilerplate. My clients love the polished results.",
      rating: 5,
    },
    {
      author: "James Wilson",
      title: "CTO",
      company: "StartupLabs",
      text: "The documentation is incredible. Even our junior developers can onboard and start contributing within days. The component library alone saves us hundreds of hours every quarter.",
      rating: 5,
    },
    {
      author: "Sofia Rodriguez",
      title: "Design Systems Lead",
      company: "Design+Dev Co",
      text: "Finally, a starter kit that takes design systems seriously. The theming system integrates beautifully with our Figma workflow. Implementation was seamless.",
      rating: 5,
    },
  ];

  const faqs: FAQ[] = [
    {
      q: "Is it really beginner-friendly?",
      a: "Absolutely. The code is structured intuitively with clear separation of concerns. Every part is documented with examples. We've had developers of all skill levels successfully use this - from bootcamp graduates to seasoned professionals.",
    },
    {
      q: "Can I customize colors, fonts, and components?",
      a: "Yes, complete customization is yours. You get the full source code with no restrictions. The theming system uses CSS variables for instant color changes, and Tailwind CSS makes styling straightforward. Modify anything without limitations.",
    },
    {
      q: "What level of support is included?",
      a: "You get comprehensive documentation, setup guides, code examples, and inline comments throughout. For technical questions, our community Slack channel has thousands of developers ready to help. Email support is also available.",
    },
    {
      q: "What's the tech stack exactly?",
      a: "React 18 with TypeScript for type safety, Vite for blazing-fast development, Tailwind CSS 3 for styling, React Router 6 for navigation, and a modern Express server. All technologies are current, well-maintained, and production-proven.",
    },
    {
      q: "How do I get started after purchasing?",
      a: "Instant download after payment. Extract the files, run `pnpm install && pnpm dev`, and you're coding in minutes. A detailed setup guide walks you through everything. No activation keys, no waiting - just start building.",
    },
    {
      q: "Do I get updates and new features?",
      a: "You own the code completely. Major updates are available to all users at no additional cost. You control your tech stack entirely and update at your own pace. Future-proof investment in your development toolkit.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center">
            <p
              className={`text-purple-400 font-semibold text-sm sm:text-base mb-4 uppercase tracking-wide transition-all duration-700 ${
                heroInView ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              The Modern Developer's Secret Weapon
            </p>
            <h1
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${
                heroInView ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              Launch Production Apps in Days, Not Weeks
            </h1>
            <p
              className={`text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
                heroInView ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              Get a battle-tested, professional codebase with everything you need. Skip the
              boilerplate. Skip the headaches. Start shipping.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-300 ${
                heroInView ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-500 hover:border-purple-400 text-white font-semibold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 hover:bg-purple-600/10 hover:shadow-lg hover:scale-105 active:scale-95">
                See How It Works
              </button>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400 mb-16 transition-all duration-700 delay-400 ${
                heroInView ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400 animate-pulse-glow" />
                <span>Used by 2,500+ developers</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400 animate-pulse-glow" />
                <span>Production-ready code</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400 animate-pulse-glow" />
                <span>Save 200+ hours</span>
              </div>
            </div>

            {/* Gradient Border Card */}
            <div
              className={`bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-xl p-6 sm:p-8 border border-purple-500/30 backdrop-blur transition-all duration-700 delay-500 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 ${
                heroInView ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-gray-200 font-medium">
                ✓ Full TypeScript Support • ✓ 50+ Components • ✓ Deployment Ready • ✓ Lifetime
                Access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section ref={socialProofRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4 transition-all duration-700 ${
              socialProofInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Trusted by Developers Worldwide
          </h2>
          <p
            className={`text-center text-gray-600 mb-12 text-sm sm:text-base transition-all duration-700 delay-100 ${
              socialProofInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Real feedback from developers who've built real products
          </p>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:border-purple-300 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  socialProofInView ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: socialProofInView ? `${(idx + 1) * 100}ms` : "0ms",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse-glow"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section ref={problemRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-12 transition-all duration-700 ${
              problemInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            You're Tired of Wasting Time
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                problem: "Reinventing the Wheel Every Project",
                description:
                  "Each new project means starting from scratch. You configure build tools, set up routing, build common components again and again. Weeks disappear before you write a single line of actual product code.",
              },
              {
                problem: "Inconsistency Across Your Codebase",
                description:
                  "Projects built at different times have different structures, patterns, and conventions. New team members struggle to understand why things are done differently everywhere. Technical debt piles up fast.",
              },
              {
                problem: "Missing Best Practices",
                description:
                  "You're not sure if your setup follows industry standards. TypeScript? Tailwind? Testing? Component libraries? You cobble together solutions, unsure if you're making the right architectural decisions.",
              },
              {
                problem: "Deployment Nightmares",
                description:
                  "Getting from localhost to production involves mysterious build scripts, mysterious environment variables, and mysterious errors. Every deployment is stressful and error-prone.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-500 hover:translate-x-2 ${
                  problemInView ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: problemInView ? `${(idx + 1) * 80}ms` : "0ms",
                }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {item.problem}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={solutionRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-12 transition-all duration-700 ${
              solutionInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            The Solution That Developers Actually Want
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {[
              {
                icon: Zap,
                title: "Instant Foundation",
                desc: "Professional, production-ready code you can start using in minutes. No more boilerplate busywork.",
              },
              {
                icon: Layers,
                title: "Perfect Architecture",
                desc: "Built on proven patterns from companies like Vercel and Stripe. Structure that scales from MVP to millions of users.",
              },
              {
                icon: Code,
                title: "Component Library",
                desc: "50+ professionally crafted components. Styled, accessible, and ready to customize. No reinventing UI elements.",
              },
              {
                icon: Shield,
                title: "Security Built In",
                desc: "TypeScript throughout, dependency auditing, secure defaults, and best practices for authentication and data handling.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-purple-400 hover:shadow-lg hover:bg-purple-50 transition-all duration-500 group cursor-pointer ${
                    solutionInView ? "animate-fade-up opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: solutionInView ? `${(idx + 1) * 80}ms` : "0ms",
                  }}
                >
                  <Icon className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-125 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div
            className={`bg-gradient-to-r from-purple-50 to-blue-50 p-8 sm:p-12 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-500 ${
              solutionInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: solutionInView ? "500ms" : "0ms",
            }}
          >
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">The bottom line:</span> You get the
              same professional foundation that companies spend $50K-$100K hiring consultants to
              build. Except it costs $16. One time. Forever.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-12 transition-all duration-700 ${
              featuresInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Everything You Need, Nothing You Don't
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Lightning Fast Setup",
                desc: "Launch your project in minutes. Copy, install dependencies, run dev server. That's it. No mysterious configuration files to debug.",
              },
              {
                title: "TypeScript Everywhere",
                desc: "Full type safety from frontend to backend. Catch bugs before users do. Better IDE autocomplete. Confidence in refactoring.",
              },
              {
                title: "Modern Styling System",
                desc: "Tailwind CSS 3 with a comprehensive theme system. Dark mode support built-in. Customize with CSS variables. Ship faster.",
              },
              {
                title: "Component Playground",
                desc: "50+ pre-built, accessible components. Buttons, forms, modals, navigation - everything production apps need. Fully customizable.",
              },
              {
                title: "Router & Navigation",
                desc: "React Router 6 configured for SPA mode. Clean routing structure. Nested routes. Code-splitting ready. No page reloads.",
              },
              {
                title: "Deploy Anywhere",
                desc: "Works with Netlify, Vercel, AWS, or any Node.js host. Environment variables configured correctly. One-click deployment.",
              },
              {
                title: "Testing Ready",
                desc: "Vitest configured and examples included. Unit tests, component tests, integration tests. No test setup required.",
              },
              {
                title: "Database Integration",
                desc: "Express backend ready to connect to PostgreSQL, MongoDB, or any database. API routes pre-configured.",
              },
              {
                title: "Documentation Included",
                desc: "Comprehensive guides covering setup, deployment, customization, and common patterns. Examples for every feature.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-purple-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer ${
                  featuresInView ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: featuresInView ? `${(idx + 1) * 50}ms` : "0ms",
                }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 transition-all duration-700 ${
              benefitsInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Why Developers Choose This
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "⚡ Save 200+ Hours Per Project",
                desc: "No more boilerplate. No more configuration. No more reinventing the wheel. Jump straight to building features that matter.",
              },
              {
                title: "🎯 Ship With Confidence",
                desc: "Production-ready code means fewer bugs, better performance, and professional results. Your code will work.",
              },
              {
                title: "📚 Learn Best Practices",
                desc: "Study how professional companies structure their code. Improve your skills while building your product.",
              },
              {
                title: "👥 Join a Growing Community",
                desc: "Thousands of developers using the same codebase. Share solutions, patterns, and tips. Never stuck.",
              },
              {
                title: "🔧 Complete Customization",
                desc: "Own the code completely. Modify anything. No vendor lock-in. Your product, your way.",
              },
              {
                title: "📈 Scale Without Rebuilding",
                desc: "Architecture built for growth. From prototype to millions of users. No rewrites needed.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className={`pb-8 border-b border-gray-200 last:border-b-0 hover:pl-4 transition-all duration-300 cursor-pointer ${
                  benefitsInView ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: benefitsInView ? `${(idx + 1) * 60}ms` : "0ms",
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section ref={audienceRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 transition-all duration-700 ${
              audienceInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Built for Your Situation
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: "Indie Developers",
                why: "Launch projects 10x faster. Compete with teams 10x your size. Maximize every development hour.",
              },
              {
                role: "Freelancers",
                why: "Deliver professional results quickly. Command higher rates. Take on more projects confidently.",
              },
              {
                role: "Startup Teams",
                why: "Move fast without sacrificing quality. Onboard new developers in days. Focus on product, not infrastructure.",
              },
              {
                role: "Agencies",
                why: "Standardize across projects. Reduce development time. Improve profitability. Consistent quality for clients.",
              },
              {
                role: "Students",
                why: "Learn professional development patterns. Build portfolio-worthy projects. Understand how real apps are structured.",
              },
              {
                role: "Enterprise Teams",
                why: "Establish architectural foundations. Reduce technical debt. Onboard teams quickly with proven patterns.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-purple-400 hover:shadow-lg hover:bg-purple-50 transition-all duration-500 group cursor-pointer ${
                  audienceInView ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: audienceInView ? `${(idx + 1) * 70}ms` : "0ms",
                }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.role}
                </h3>
                <p className="text-gray-600 text-sm">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section ref={includedRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-12 transition-all duration-700 ${
              includedInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            You Get Everything
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 bg-gradient-to-br from-purple-50 to-blue-50 p-8 sm:p-12 rounded-xl border border-purple-200 hover:border-purple-400 transition-all duration-500">
            {[
              "✓ Complete source code with MIT license",
              "✓ 50+ production-ready UI components",
              "✓ Responsive design system with Tailwind",
              "✓ Express backend with example routes",
              "✓ Database integration examples",
              "✓ Authentication patterns included",
              "✓ Type-safe API communication setup",
              "✓ Deployment guides for all major platforms",
              "✓ Comprehensive documentation",
              "✓ Video setup tutorial",
              "✓ Component customization guide",
              "✓ All future updates included",
              "✓ Community access and support",
              "✓ Email support for technical questions",
              "✓ Lifetime access - no subscriptions",
              "✓ Use commercially on unlimited projects",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 transition-all duration-500 hover:translate-x-2 ${
                  includedInView ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: includedInView ? `${(idx + 1) * 30}ms` : "0ms",
                }}
              >
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 animate-pulse-glow" />
                <span className="text-gray-900 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
              pricingInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            One-Time Investment. Lifetime Value.
          </h2>

          <div
            className={`bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-2xl p-8 sm:p-12 border border-purple-500/50 backdrop-blur hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 ${
              pricingInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: pricingInView ? "100ms" : "0ms",
            }}
          >
            <div className="text-6xl sm:text-7xl font-bold mb-4 animate-float">$16</div>
            <p className="text-xl text-gray-300 mb-8">
              One-time payment. Forever access. Unlimited projects.
            </p>

            <div className="space-y-4 mb-8 text-left">
              {[
                "Instant download after payment",
                "No subscriptions. Ever.",
                "Use commercially. No limits.",
                "30-day money-back guarantee",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 transition-all duration-500 hover:translate-x-2 ${
                    pricingInView ? "animate-fade-up opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: pricingInView ? `${(idx + 1) * 80}ms` : "0ms",
                  }}
                >
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-bold py-4 rounded-lg text-lg mb-4 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95">
              Get Instant Access Now
            </button>
            <p className="text-gray-400 text-sm">Secure payment processed instantly</p>
          </div>

          <p className="text-gray-400 mt-12">
            Worth every penny. Join thousands of developers shipping faster.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-12 transition-all duration-700 ${
              faqInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border border-gray-300 rounded-lg overflow-hidden transition-all duration-500 ${
                  faqInView ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: faqInView ? `${(idx + 1) * 60}ms` : "0ms",
                }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300 text-left group hover:border-purple-300"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                      expandedFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-gray-50 border-t border-gray-300 animate-fade-down">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        ref={finalCtaRef}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
              finalCtaInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Stop Spinning Your Wheels on Boilerplate
          </h2>
          <p
            className={`text-lg sm:text-xl text-blue-100 mb-8 transition-all duration-700 delay-100 ${
              finalCtaInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            Your next project deserves a proper foundation. Get $16 worth of value every single
            project. Ship faster. Build better. Enjoy the process.
          </p>

          <button
            className={`bg-white text-purple-600 hover:bg-gray-50 transition-all duration-300 font-bold py-4 px-10 sm:px-12 rounded-lg text-lg mb-6 inline-flex items-center gap-2 group hover:shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 ${
              finalCtaInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: finalCtaInView ? "200ms" : "0ms",
            }}
          >
            Buy Now - Instant Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p
            className={`text-blue-100 text-sm transition-all duration-700 delay-300 ${
              finalCtaInView ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            ✓ 30-day guarantee • ✓ Instant download • ✓ Lifetime use
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gray-900 text-gray-400 text-center text-sm border-t border-gray-800">
        <p>&copy; 2024 Professional Digital Product. All rights reserved.</p>
      </footer>
    </div>
  );
}
