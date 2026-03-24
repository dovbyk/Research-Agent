import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Brain,
  Cpu,
  Network,
  Zap,
  CircuitBoard,
  Binary,
  Bot,
  Layers,
  GitBranch,
  ArrowRight,
  Search,
  Lightbulb,
  Shield,
  Clock,
  MessageSquare,
  BookOpen,
  Code,
  Globe,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowDown,
  Quote,
  Workflow,
  Play,
  Star,
  Fingerprint,
  Lock,
  Eye,
  Wand2,
  Mic,
  FileText,
  PenTool,
  BarChart3,
  Compass,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { DragonWingsWatermark } from "@/components/landing/DragonWingsWatermark";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-background overflow-hidden">
      <DragonWingsWatermark />


      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-background/60 border-b border-border/30">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between px-8 md:px-16 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5">
              <Sparkles className="h-5 w-5 text-foreground" />
            </div>
            <span className="cursive-heading text-2xl text-foreground tracking-wide">Noir AI</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {["About", "Features", "Research"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/chat")} className="font-body text-sm text-muted-foreground hover:text-foreground">
              Log In
            </Button>
            <Button onClick={() => navigate("/chat")} className="font-body text-sm bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 h-11">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative z-10 min-h-screen flex items-center pt-32 pb-20 px-8 md:px-16">
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-foreground/10 bg-foreground/5 mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Now in Public Beta</span>
              </div>

              <h1 className="text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] font-cursive italic text-foreground mb-8">
                Think<br />
                <span className="text-muted-foreground">Deeper.</span>
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-xl mb-12">
                Noir AI is a research-first AI assistant that reasons through complex problems, 
                searches live sources, and delivers insights with unprecedented depth.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-16">
                <Button onClick={() => navigate("/chat")} size="lg" className="font-body text-base bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 h-14 gap-3 group">
                  Start for Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="font-body text-base border-foreground/20 hover:bg-foreground/5 rounded-full px-10 h-14 gap-3">
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center">
                      <span className="font-cursive text-sm italic text-foreground/60">{String.fromCharCode(64 + i)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <p className="font-body text-xs text-muted-foreground">Loved by 50,000+ users</p>
                </div>
              </div>
            </div>

            {/* Right - Visual: Research Graph Logo */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square max-w-[600px] mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 blur-[120px] bg-gradient-to-br from-foreground/25 via-transparent to-foreground/15 rounded-full"></div>
                
                {/* Main Research Graph Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Connection lines */}
                    <line x1="200" y1="80" x2="100" y2="180" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="200" y1="80" x2="300" y2="180" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="100" y1="180" x2="140" y2="300" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="100" y1="180" x2="200" y2="200" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="300" y1="180" x2="260" y2="300" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="300" y1="180" x2="200" y2="200" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="200" y1="200" x2="140" y2="300" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="200" y1="200" x2="260" y2="300" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="140" y1="300" x2="200" y2="350" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    <line x1="260" y1="300" x2="200" y2="350" stroke="currentColor" strokeWidth="1.5" className="text-foreground/20" />
                    
                    {/* Animated pulse lines */}
                    <line x1="200" y1="80" x2="100" y2="180" stroke="currentColor" strokeWidth="2" className="text-foreground/40 animate-pulse" strokeDasharray="8 8" />
                    <line x1="200" y1="80" x2="300" y2="180" stroke="currentColor" strokeWidth="2" className="text-foreground/40 animate-pulse" strokeDasharray="8 8" />
                    
                    {/* Main center node - larger, glowing */}
                    <circle cx="200" cy="200" r="28" className="fill-foreground/10 stroke-foreground/60" strokeWidth="2" />
                    <circle cx="200" cy="200" r="18" className="fill-foreground/20" />
                    <circle cx="200" cy="200" r="8" className="fill-foreground/80" />
                    
                    {/* Top node - Root/Query */}
                    <circle cx="200" cy="80" r="22" className="fill-foreground/10 stroke-foreground/50" strokeWidth="1.5" />
                    <circle cx="200" cy="80" r="12" className="fill-foreground/30" />
                    <circle cx="200" cy="80" r="5" className="fill-foreground/70" />
                    
                    {/* Left branch node */}
                    <circle cx="100" cy="180" r="18" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1.5" />
                    <circle cx="100" cy="180" r="10" className="fill-foreground/20" />
                    <circle cx="100" cy="180" r="4" className="fill-foreground/60" />
                    
                    {/* Right branch node */}
                    <circle cx="300" cy="180" r="18" className="fill-foreground/10 stroke-foreground/40" strokeWidth="1.5" />
                    <circle cx="300" cy="180" r="10" className="fill-foreground/20" />
                    <circle cx="300" cy="180" r="4" className="fill-foreground/60" />
                    
                    {/* Bottom left node */}
                    <circle cx="140" cy="300" r="16" className="fill-foreground/10 stroke-foreground/30" strokeWidth="1.5" />
                    <circle cx="140" cy="300" r="8" className="fill-foreground/20" />
                    <circle cx="140" cy="300" r="3" className="fill-foreground/50" />
                    
                    {/* Bottom right node */}
                    <circle cx="260" cy="300" r="16" className="fill-foreground/10 stroke-foreground/30" strokeWidth="1.5" />
                    <circle cx="260" cy="300" r="8" className="fill-foreground/20" />
                    <circle cx="260" cy="300" r="3" className="fill-foreground/50" />
                    
                    {/* Bottom center node - Result */}
                    <circle cx="200" cy="350" r="20" className="fill-foreground/10 stroke-foreground/50" strokeWidth="1.5" />
                    <circle cx="200" cy="350" r="12" className="fill-foreground/25" />
                    <circle cx="200" cy="350" r="5" className="fill-foreground/70" />
                    
                    {/* Small decorative nodes */}
                    <circle cx="60" cy="130" r="6" className="fill-foreground/10 stroke-foreground/20" strokeWidth="1" />
                    <circle cx="340" cy="130" r="6" className="fill-foreground/10 stroke-foreground/20" strokeWidth="1" />
                    <circle cx="70" cy="260" r="5" className="fill-foreground/10 stroke-foreground/15" strokeWidth="1" />
                    <circle cx="330" cy="260" r="5" className="fill-foreground/10 stroke-foreground/15" strokeWidth="1" />
                    <circle cx="200" cy="130" r="4" className="fill-foreground/15" />
                    <circle cx="150" cy="240" r="4" className="fill-foreground/10" />
                    <circle cx="250" cy="240" r="4" className="fill-foreground/10" />
                    
                    {/* Extra connection hints */}
                    <line x1="60" y1="130" x2="100" y2="180" stroke="currentColor" strokeWidth="1" className="text-foreground/10" strokeDasharray="4 4" />
                    <line x1="340" y1="130" x2="300" y2="180" stroke="currentColor" strokeWidth="1" className="text-foreground/10" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Floating labels */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-xl border border-foreground/20 shadow-lg">
                  <span className="font-body text-xs tracking-wider uppercase text-foreground/70">Query</span>
                </div>
                <div className="absolute top-[42%] left-[12%] px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-xl border border-foreground/15">
                  <span className="font-body text-[10px] tracking-wider uppercase text-foreground/50">Research</span>
                </div>
                <div className="absolute top-[42%] right-[12%] px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-xl border border-foreground/15">
                  <span className="font-body text-[10px] tracking-wider uppercase text-foreground/50">Analyze</span>
                </div>
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-xl border border-foreground/25 shadow-lg">
                  <span className="font-body text-xs tracking-wider uppercase text-foreground/80">Reasoning</span>
                </div>
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-xl border border-foreground/20 shadow-lg">
                  <span className="font-body text-xs tracking-wider uppercase text-foreground/70">Insight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <section className="relative z-10 py-8 border-y border-foreground/5 bg-foreground/[0.02] overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-16 px-8">
              {["Deep Research", "•", "Live Search", "•", "Multi-Step Reasoning", "•", "Citation Tracking", "•", "Context Memory", "•", "Powered by LangGraph", "•"].map((item, i) => (
                <span key={i} className={cn(
                  "shrink-0",
                  item === "•" ? "text-foreground/20 text-2xl" : "font-cursive text-2xl italic text-foreground/40"
                )}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== MANIFESTO ==================== */}
      <section id="about" className="relative z-10 py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground/60 mb-6 block">Our Philosophy</span>
              <h2 className="font-cursive text-5xl md:text-6xl italic text-foreground leading-tight">
                AI should amplify human thought, not replace it.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-20">
              <p className="font-body text-xl md:text-2xl text-muted-foreground/70 leading-relaxed mb-8">
                We built Noir AI because we were tired of shallow, surface-level AI responses. 
                We wanted an assistant that could truly <span className="text-foreground">think alongside us</span>—breaking 
                down complex problems, researching from live sources, and presenting insights 
                with the nuance they deserve.
              </p>
              <p className="font-body text-xl md:text-2xl text-muted-foreground/70 leading-relaxed">
                The result is an AI that doesn't just answer questions. It <span className="text-foreground">investigates</span>. 
                It <span className="text-foreground">reasons</span>. It shows its work. And it does it all with an elegance 
                that makes complex thinking feel effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BENTO GRID FEATURES ==================== */}
      <section id="features" className="relative z-10 py-24 md:py-40 px-8 md:px-16">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-20">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground/60 mb-6 block">Capabilities</span>
            <h2 className="font-cursive text-5xl md:text-7xl italic text-foreground mb-6">What Sets Us Apart</h2>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 p-10 md:p-14 rounded-[2rem] border border-foreground/10 bg-gradient-to-br from-foreground/[0.03] to-transparent group hover:border-foreground/20 transition-all duration-500">
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/10">
                    <Brain className="h-10 w-10 text-foreground/80" strokeWidth={1} />
                  </div>
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Core Technology</span>
                </div>
                <h3 className="font-cursive text-4xl md:text-5xl italic text-foreground mb-6">Multi-Step Reasoning Engine</h3>
                <p className="font-body text-lg text-muted-foreground/70 leading-relaxed mb-8 flex-grow">
                  Watch as Noir AI breaks down your query into logical steps, researches each component 
                  from live sources, and synthesizes everything into a comprehensive response. Every step 
                  is visible, every source is cited, every conclusion is traceable.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Chain-of-Thought", "Source Attribution", "Reasoning Transparency", "Live Research"].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full text-sm font-body bg-foreground/5 text-muted-foreground border border-foreground/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Cards */}
            {[
              { icon: Zap, title: "Instant Streaming", desc: "Responses flow word-by-word in real-time. No waiting, just watching your answer materialize." },
              { icon: Search, title: "Live Web Search", desc: "Access current information from across the web, not just training data from years ago." },
              { icon: Shield, title: "Private by Design", desc: "Your data never trains our models. Delete anytime. Enterprise-grade encryption always." },
              { icon: Globe, title: "50+ Languages", desc: "Communicate naturally in your language with the same level of sophistication." },
            ].map((feature, index) => (
              <div key={feature.title} className="p-8 md:p-10 rounded-[2rem] border border-foreground/10 bg-foreground/[0.02] group hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-500">
                <feature.icon className="h-10 w-10 text-foreground/60 mb-6 group-hover:text-foreground transition-colors" strokeWidth={1} />
                <h3 className="font-cursive text-2xl italic text-foreground mb-3">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS - HORIZONTAL SCROLL ==================== */}
      <section className="relative z-10 py-24 md:py-40 border-y border-foreground/5 bg-foreground/[0.01]">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground/60 mb-6 block">The Process</span>
            <h2 className="font-cursive text-5xl md:text-7xl italic text-foreground">How Noir AI Thinks</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {[
              { step: "01", title: "You Ask", desc: "Type naturally. No prompts to engineer, no syntax to learn. Just ask like you're talking to a brilliant colleague.", icon: MessageSquare },
              { step: "02", title: "We Analyze", desc: "Your query is parsed into sub-questions. We identify what needs research, what needs reasoning, what needs synthesis.", icon: Compass },
              { step: "03", title: "We Research", desc: "Each sub-question triggers targeted searches. Watch in real-time as we pull information from trusted sources.", icon: Search },
              { step: "04", title: "You Receive", desc: "A thoughtful, cited response that shows its reasoning. Dig deeper, follow up, or explore new directions.", icon: Lightbulb },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-foreground/20 to-transparent"></div>
                )}
                <div className="p-8 rounded-3xl border border-foreground/10 bg-background relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-cursive text-6xl italic text-foreground/10">{item.step}</span>
                    <item.icon className="h-8 w-8 text-foreground/40" strokeWidth={1} />
                  </div>
                  <h3 className="font-cursive text-2xl italic text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== USE CASES - ALTERNATING LAYOUT ==================== */}
      <section id="research" className="relative z-10 py-24 md:py-40 px-8 md:px-16">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-24">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground/60 mb-6 block">Use Cases</span>
            <h2 className="font-cursive text-5xl md:text-7xl italic text-foreground mb-6">Built for Real Work</h2>
            <p className="font-body text-xl text-muted-foreground/60 max-w-2xl mx-auto">
              From academic research to creative projects, see how professionals use Noir AI.
            </p>
          </div>

          {/* Use Case 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
                <BookOpen className="h-4 w-4 text-foreground/60" />
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Research</span>
              </div>
              <h3 className="font-cursive text-4xl md:text-5xl italic text-foreground mb-6">Deep Academic Research</h3>
              <p className="font-body text-lg text-muted-foreground/70 leading-relaxed mb-8">
                Conduct comprehensive literature reviews in minutes instead of hours. Noir AI searches 
                across academic databases, synthesizes findings, identifies gaps in research, and 
                presents everything with proper citations you can verify.
              </p>
              <ul className="space-y-4">
                {["Multi-source literature synthesis", "Automatic citation formatting", "Research gap identification", "Methodology comparisons"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/40 shrink-0" />
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent p-8 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-20 w-20 text-foreground/50 mx-auto mb-6" strokeWidth={1} />
                  <p className="font-cursive text-2xl italic text-foreground/60">Research Interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent p-8 flex items-center justify-center">
                <div className="text-center">
                  <Code className="h-20 w-20 text-foreground/50 mx-auto mb-6" strokeWidth={1} />
                  <p className="font-cursive text-2xl italic text-foreground/60">Code Assistant</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
                <Code className="h-4 w-4 text-foreground/60" />
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Development</span>
              </div>
              <h3 className="font-cursive text-4xl md:text-5xl italic text-foreground mb-6">Technical Problem Solving</h3>
              <p className="font-body text-lg text-muted-foreground/70 leading-relaxed mb-8">
                Debug complex issues, architect systems, and write production-ready code. Noir AI 
                understands context, follows best practices, and explains its reasoning so you 
                actually learn in the process.
              </p>
              <ul className="space-y-4">
                {["Contextual debugging", "Architecture recommendations", "Code review insights", "Documentation generation"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/40 shrink-0" />
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8">
                <PenTool className="h-4 w-4 text-foreground/60" />
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Creative</span>
              </div>
              <h3 className="font-cursive text-4xl md:text-5xl italic text-foreground mb-6">Content & Strategy</h3>
              <p className="font-body text-lg text-muted-foreground/70 leading-relaxed mb-8">
                From brainstorming campaigns to drafting content, Noir AI adapts to your creative 
                process. It understands tone, audience, and context—helping you communicate with 
                impact while maintaining your authentic voice.
              </p>
              <ul className="space-y-4">
                {["Brand-aware writing", "Strategic planning", "Competitor analysis", "Content optimization"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/40 shrink-0" />
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent p-8 flex items-center justify-center">
                <div className="text-center">
                  <PenTool className="h-20 w-20 text-foreground/50 mx-auto mb-6" strokeWidth={1} />
                  <p className="font-cursive text-2xl italic text-foreground/60">Creative Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS - MASONRY ==================== */}
      <section className="relative z-10 py-24 md:py-40 px-8 md:px-16 bg-foreground/[0.01] border-y border-foreground/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-20">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground/60 mb-6 block">Testimonials</span>
            <h2 className="font-cursive text-5xl md:text-7xl italic text-foreground">Words From Users</h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { quote: "Noir AI fundamentally changed how I approach research. The depth of analysis is unlike anything I've experienced. It doesn't just find information—it understands it.", author: "Dr. Sarah Chen", role: "Research Director, Stanford AI Lab", featured: true },
              { quote: "The transparency in reasoning is what sold me. I can see exactly how it arrived at its conclusions.", author: "Marcus Webb", role: "Creative Director", featured: false },
              { quote: "We've integrated Noir AI into our entire product development workflow. It's become indispensable for technical documentation and code review.", author: "Elena Rodriguez", role: "CTO, Velocity Ventures", featured: true },
              { quote: "Finally, an AI that respects the complexity of language and nuance.", author: "James Morrison", role: "Author & Journalist", featured: false },
              { quote: "The multi-step research is incredible. I asked about a niche topic and watched it systematically explore multiple angles before synthesizing everything into a coherent answer.", author: "Dr. Aisha Patel", role: "Professor of Economics", featured: true },
              { quote: "Clean, elegant, and genuinely intelligent. Noir AI is what AI assistants should be.", author: "Tom Nakamura", role: "Product Designer, Linear", featured: false },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "break-inside-avoid p-8 rounded-3xl border border-foreground/10 bg-background",
                  testimonial.featured && "p-10"
                )}
              >
                <Quote className="h-8 w-8 text-foreground/10 mb-6" strokeWidth={1} />
                <p className={cn(
                  "font-body text-foreground/70 leading-relaxed mb-8",
                  testimonial.featured ? "text-lg" : "text-base"
                )}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                    <span className="font-cursive text-lg italic text-foreground/60">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-cursive text-lg italic text-foreground">{testimonial.author}</p>
                    <p className="font-body text-xs text-muted-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="relative z-10 py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {[
              { value: "10M+", label: "Queries processed", sub: "and counting" },
              { value: "50K+", label: "Active users", sub: "across 150 countries" },
              { value: "99.9%", label: "Uptime", sub: "enterprise reliability" },
              { value: "<400ms", label: "Avg response", sub: "time to first token" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-cursive text-5xl md:text-6xl lg:text-7xl italic text-foreground mb-2">{stat.value}</div>
                <div className="font-body text-sm text-foreground/80 mb-1">{stat.label}</div>
                <div className="font-body text-xs text-muted-foreground/50">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECURITY ==================== */}
      <section className="relative z-10 py-24 md:py-40 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground/60 mb-6 block">Security</span>
              <h2 className="font-cursive text-5xl md:text-6xl italic text-foreground mb-8">Your Data, Your Control</h2>
              <p className="font-body text-xl text-muted-foreground/70 leading-relaxed mb-10">
                We built Noir AI with privacy as a foundation, not an afterthought. Your conversations 
                are encrypted, never used for training, and can be deleted at any time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Lock, label: "End-to-end encryption" },
                  { icon: Eye, label: "No data training" },
                  { icon: Fingerprint, label: "SOC 2 Type II" },
                  { icon: Shield, label: "GDPR compliant" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-foreground/40" strokeWidth={1.5} />
                    <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent flex items-center justify-center">
                <Shield className="h-32 w-32 text-foreground/40" strokeWidth={0.8} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== FAQ ==================== */}
      <section className="relative z-10 py-24 md:py-40 px-8 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-20">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground/60 mb-6 block">FAQ</span>
            <h2 className="font-cursive text-5xl md:text-6xl italic text-foreground">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How is Noir AI different from ChatGPT or Claude?", a: "Noir AI is built specifically for deep research and transparent reasoning. Our multi-step process shows exactly how we arrive at answers, with live web search and proper citations. We focus on quality over speed, depth over breadth." },
              { q: "Is my data used to train your models?", a: "Never. Your conversations are encrypted end-to-end and never used for model training. You can export or delete your data at any time. We're SOC 2 Type II certified and GDPR compliant." },
              { q: "What is LangGraph and why does it matter?", a: "LangGraph is the underlying agent framework that powers Noir AI's reasoning capabilities. It allows for complex, multi-step workflows that break down problems systematically—something traditional LLM architectures can't do." },
              { q: "Can I use Noir AI for commercial work?", a: "Absolutely. Our Pro and Enterprise plans are designed for professional and commercial use, with features like priority support, API access, and custom integrations." },
              { q: "What languages are supported?", a: "Noir AI understands and responds fluently in 50+ languages. The interface is available in English, with more language options coming soon." },
            ].map((faq, index) => (
              <div key={index} className="p-6 md:p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <h3 className="font-cursive text-xl italic text-foreground mb-3">{faq.q}</h3>
                <p className="font-body text-sm text-muted-foreground/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative z-10 py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 blur-[80px] bg-foreground/10 rounded-full scale-150"></div>
            <Sparkles className="relative h-20 w-20 text-foreground/80" strokeWidth={0.8} />
          </div>
          <h2 className="font-cursive text-6xl md:text-8xl italic text-foreground mb-8 leading-tight">
            Ready to think<br />differently?
          </h2>
          <p className="font-body text-xl text-muted-foreground/60 mb-12 max-w-xl mx-auto">
            Join 50,000+ researchers, developers, and creatives who've discovered a more elegant way to work with AI.
          </p>
          <Button onClick={() => navigate("/chat")} size="lg" className="font-body text-lg bg-foreground text-background hover:bg-foreground/90 rounded-full px-14 h-16">
            Start for Free
          </Button>
          <p className="font-body text-sm text-muted-foreground/40 mt-6">No credit card required</p>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative z-10 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-foreground/60" />
                <span className="font-cursive text-2xl italic text-foreground/80">Noir AI</span>
              </div>
              <p className="font-body text-sm text-muted-foreground/50 mb-6 max-w-xs">
                Elegant intelligence for the modern mind. Deep research, transparent reasoning, beautiful design.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground/40">
                <span className="text-xs tracking-widest uppercase">Powered by</span>
                <span className="font-cursive text-base italic">LangGraph</span>
              </div>
            </div>
            {[
              { title: "Product", links: ["Features", "API", "Changelog", "Roadmap"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Press Kit"] },
              { title: "Resources", links: ["Documentation", "Guides", "Community", "Status"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-cursive text-base italic text-foreground mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <button className="font-body text-sm text-muted-foreground/50 hover:text-foreground transition-colors">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-body text-sm text-muted-foreground/40">© 2026 Noir AI. All rights reserved.</p>
            <div className="flex items-center gap-8">
              {["Twitter", "GitHub", "Discord", "LinkedIn"].map((social) => (
                <button key={social} className="font-body text-sm text-muted-foreground/40 hover:text-foreground transition-colors">
                  {social}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Marquee Animation Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Landing;
