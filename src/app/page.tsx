"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Megaphone, 
  Search, 
  Smartphone, 
  Layers, 
  BarChart3, 
  Plus,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  MonitorSmartphone,
  CheckCircle2,
  Lightbulb,
  Globe,
  Cpu,
  Trophy,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── DATA ── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/portfolio" },
  { label: "Sectors", href: "/sectors" },
  { label: "Blogs", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const STATS = [
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Creative Brains", value: 50, suffix: "+" },
  { label: "Global Clients", value: 200, suffix: "+" },
];

const SERVICES = [
  { icon: MonitorSmartphone, title: "Web Design & Dev", desc: "Crafting high-performance websites that convert visitors into customers." },
  { icon: Smartphone, title: "Mobile App Dev", desc: "Building intuitive iOS and Android applications for the modern user." },
  { icon: Palette, title: "UI/UX Design", desc: "Human-centric design that balances aesthetics with functional excellence." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven strategies to amplify your brand's reach and ROI." },
  { icon: Search, title: "SEO Optimization", desc: "Dominating search results with technical precision and content mastery." },
  { icon: Layers, title: "Branding & Identity", desc: "Defining your unique voice in a crowded digital marketplace." },
  { icon: BarChart3, title: "Performance Marketing", desc: "ROI-focused campaigns across Meta, Google, and LinkedIn." },
  { icon: Plus, title: "All Services →", desc: "Explore our full suite of digital transformation tools.", isCTA: true },
];

const CLIENT_LOGOS_R1 = ["TechCorp", "Innovate", "GlobalSoft", "Amity Online", "Nexus", "Sigma", "FMCG Lab", "MediaFlow"];
const CLIENT_LOGOS_R2 = ["CloudNine", "Interakt", "Univo", "Livyor", "Zion Digital", "DA-IICT", "CreativeHub", "Rangou"];

const PLATFORMS = [
  { name: "Google Ads", logo: "Google Ads" },
  { name: "Meta Business", logo: "Meta Business" },
  { name: "Shopify", logo: "Shopify" },
  { name: "AWS", logo: "AWS Cloud" },
  { name: "HubSpot", logo: "HubSpot" },
];

const BLOGS = [
  { 
    title: "The Future of Web Design: Trends to Watch in 2025", 
    tag: "Design Insights", 
    image: "https://images.unsplash.com/photo-1581291518062-c9a79414b681",
    excerpt: "Exploring the intersection of AI and minimalist aesthetics."
  },
  { 
    title: "How to Scale Your E-commerce Brand via Performance Marketing", 
    tag: "Growth Strategy", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    excerpt: "A data-driven guide to maximizing your return on ad spend."
  },
  { 
    title: "Why Custom Software is Better Than Off-the-Shelf Solutions", 
    tag: "Tech Talk", 
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    excerpt: "Unlock true business agility with tailored technological infrastructure."
  },
];

const PORTFOLIO_IMAGES = [
  { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", caption: "Fintech Dashboard" },
  { url: "https://images.unsplash.com/photo-1522542550221-31fd19255a7a", caption: "Corporate Rebrand" },
  { url: "https://images.unsplash.com/photo-1551288049-bbbda536339a", caption: "E-commerce App" },
  { url: "https://images.unsplash.com/photo-1558655146-d09347e92766", caption: "SaaS Platform" },
  { url: "https://images.unsplash.com/photo-1542744094-24638eff58bb", caption: "EdTech Interface" },
  { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", caption: "Product Strategy" },
  { url: "https://images.unsplash.com/photo-1551434678-e076c223a692", caption: "Agile Development" },
  { url: "https://images.unsplash.com/photo-1552664730-d307ca884978", caption: "Client Workshop" },
];

const SECTOR_TAGS = [
  "E-commerce & Retail", "Fintech & Banking", "Healthcare Digital", 
  "EdTech Platforms", "Real Estate Tech", "SaaS & Cloud", 
  "Logistics Software", "Gaming & Entertainment", "Enterprise AI"
];

/* ── COMPONENTS ── */

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(ease * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 text-center relative group">
      <div className="text-5xl font-sora font-bold text-[#f89b34] mb-3 group-hover:scale-110 transition-transform">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm font-semibold uppercase tracking-wider font-sora">
        {label}
      </div>
    </div>
  );
}

function LogoMarquee({ direction = "left", logos }: { direction?: "left" | "right", logos: string[] }) {
  const items = [...logos, ...logos, ...logos, ...logos];
  return (
    <div className="overflow-hidden py-4 w-full">
      <div className={cn(
        "flex gap-6 w-max",
        direction === "left" ? "animate-marquee-ltr" : "animate-marquee-rtl"
      )}>
        {items.map((logo, i) => (
          <div key={i} className="flex-shrink-0 bg-white border border-border rounded-xl px-10 py-6 min-w-[180px] h-[100px] flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:border-[#f89b34] hover:shadow-lg">
            <span className="text-[#0a0a0a] font-bold text-lg font-sora">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── MAIN PAGE ── */

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[#f89b34] selection:text-white">
      
      {/* NAVBAR */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 px-6 lg:px-12 flex items-center justify-between h-[85px]",
        isScrolled ? "bg-[#0a0a0a] shadow-xl h-16 translate-y-0" : "bg-transparent translate-y-0"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#f89b34] rounded-lg flex items-center justify-center font-black text-xl text-[#0a0a0a] group-hover:rotate-12 transition-transform">S</div>
          <div className="flex flex-col">
            <span className="text-white font-sora font-bold leading-tight">Shyama Overseas</span>
            <span className="text-[10px] text-[#f89b34] font-semibold uppercase tracking-widest">Your Global Digital Partner</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <Link href={link.href} className="text-white/90 hover:text-[#f89b34] font-semibold text-[13px] transition-colors uppercase tracking-wider">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden lg:block bg-[#f89b34] hover:bg-[#f89b34]/90 text-[#0a0a0a] px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-[#f89b34]/30">
          Our Profile
        </Link>

        <button className="lg:hidden text-white" onClick={() => setIsMobMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[1001] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-[#0a0a0a] z-[1002] p-10 shadow-2xl flex flex-col"
            >
              <button onClick={() => setIsMobMenuOpen(false)} className="self-end text-white mb-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-8 h-8" />
              </button>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map(link => (
                  <Link key={link.label} href={link.href} className="text-white text-2xl font-sora font-medium hover:text-[#f89b34] transition-colors" onClick={() => setIsMobMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" className="mt-6 bg-[#f89b34] text-[#0a0a0a] text-center py-4 rounded-full font-bold text-lg" onClick={() => setIsMobMenuOpen(false)}>
                  Our Profile
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
            alt="Cinematic Agency Office" 
            fill 
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="text-white font-medium uppercase tracking-[6px] text-sm mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#f89b34]" />
                We are your
              </div>
              
              <div className="relative inline-block mb-10">
                <div className="bg-[#f89b34] px-8 py-6 absolute inset-0 -skew-x-6 z-[-1] shadow-2xl" />
                <h1 className="text-6xl md:text-[100px] font-black text-[#0a0a0a] leading-[0.9] uppercase font-sora -skew-x-6">
                  DIGITAL GROWTH<br />MAESTROS
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-white/90 font-light italic leading-relaxed mb-12 max-w-2xl font-inter">
                Crafting Your Digital Legacy with Precision Design, Cutting-edge Tech, and Unmatched ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/services" className="bg-[#f89b34] text-[#0a0a0a] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform text-center shadow-2xl shadow-[#f89b34]/20">
                  Explore Services
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#0a0a0a] transition-all text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-10 z-20 flex flex-col items-center gap-4"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[4px] [writing-mode:vertical-lr] mb-12">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </section>

        {/* STATS BAR */}
        <section className="bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 py-16 relative z-10">
            {STATS.map((stat, idx) => (
              <div key={stat.label} className="relative">
                <StatCounter {...stat} />
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-12 bg-[#f89b34]/30" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-sora font-light text-[#0a0a0a] mb-4">
                  Our Digital & <span className="text-[#f89b34] italic font-bold">Creative Services</span>
                </h2>
                <p className="text-[#f89b34] font-medium uppercase tracking-[4px] text-xs">Your Instruments</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20 border border-border/20 overflow-hidden rounded-2xl shadow-sm">
              {SERVICES.map((svc, i) => (
                <motion.div 
                  key={svc.title}
                  whileHover={{ y: -5 }}
                  className={cn(
                    "p-10 transition-all duration-500 group bg-white hover:z-10",
                    svc.isCTA ? "bg-muted/30" : ""
                  )}
                >
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-[#f89b34] transition-colors duration-500">
                    <svc.icon className="w-7 h-7 text-[#f89b34] group-hover:text-[#0a0a0a] transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-sora font-bold mb-4 text-[#0a0a0a] group-hover:text-[#f89b34] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-2">
                    {svc.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#f89b34] font-bold text-xs uppercase tracking-widest transform transition-transform group-hover:translate-x-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WORLD MAP SECTION */}
        <section className="bg-[#060F1E] py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center mb-20">
                <div className="text-[#f89b34] font-bold uppercase tracking-[4px] text-xs mb-4">Global Reach & Insights</div>
                <h2 className="text-4xl md:text-5xl font-sora font-light text-white leading-tight">
                  Driving Results for <span className="font-bold">200+ Brands</span> <span className="text-[#f89b34]">Across The Globe</span>
                </h2>
              </div>
            </FadeIn>
            
            <div className="relative aspect-[16/7] max-w-5xl mx-auto">
              <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#f89b34_1px,transparent_1px)] [background-size:24px_24px]" />
              
              {/* Pin visualization */}
              {[
                { name: "USA", t: "20%", l: "15%" },
                { name: "Europe", t: "25%", l: "45%" },
                { name: "UAE", t: "45%", l: "55%" },
                { name: "India", t: "50%", l: "68%" },
                { name: "Australia", t: "75%", l: "85%" },
              ].map((loc) => (
                <motion.div 
                  key={loc.name} 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute z-20 group"
                  style={{ top: loc.t, left: loc.l }}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-[#f89b34]/20 rounded-full animate-ping" />
                    <div className="w-2.5 h-2.5 bg-[#f89b34] rounded-full shadow-[0_0_10px_#f89b34]" />
                    <div className="absolute top-full mt-3 bg-[#f89b34] text-[#0a0a0a] font-sora font-bold text-[10px] px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      {loc.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PORTFOLIO_IMAGES.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  className="relative group aspect-square overflow-hidden rounded-xl bg-muted shadow-sm"
                >
                  <Image 
                    src={item.url} 
                    alt={item.caption} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-white font-sora font-bold text-sm tracking-widest uppercase">
                      {item.caption}
                    </span>
                    <div className="w-8 h-[2px] bg-[#f89b34] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <section className="py-20 bg-muted/20 border-y border-border/10">
          <div className="max-w-7xl mx-auto space-y-8">
            <LogoMarquee direction="left" logos={CLIENT_LOGOS_R1} />
            <LogoMarquee direction="right" logos={CLIENT_LOGOS_R2} />
            <div className="text-center pt-8">
              <Link href="/portfolio" className="bg-[#f89b34] hover:bg-[#f89b34]/90 text-[#0a0a0a] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-[#f89b34]/30">
                Our Client Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* OPERATIONS / STUDIO */}
        <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
            <div className="studio-text relative">
              <div className="inline-flex items-center gap-3 text-[#f89b34] font-bold uppercase tracking-[4px] text-xs mb-6 border-l-4 border-[#f89b34] pl-4">
                Operations
              </div>
              <h2 className="text-4xl md:text-5xl font-sora font-light text-[#0a0a0a] mb-8 leading-tight">
                A company with an<br />
                <span className="text-[#f89b34] font-bold">In-house Creative Studio</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-inter italic border-l-2 border-border pl-8">
                As a full-service digital house, we manage design, development, content production, and ad-tech implementation entirely in-house — giving you a single point of accountability.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
                "https://images.unsplash.com/photo-1552664730-d307ca884978",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              ].map((img, i) => (
                <motion.div 
                  key={i} 
                  initial={{ y: i * 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="aspect-[2/3] relative rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image src={img} alt="Agency Operations" fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-32 text-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-sora font-light text-[#0a0a0a]">
                Strategic <span className="font-bold">Platforms</span>, Measurable Results
              </h2>
              <p className="text-[#f89b34] font-bold uppercase tracking-widest text-[10px] mt-2">Our Tech Arsenal</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              {PLATFORMS.map(p => (
                <div key={p.name} className="text-2xl font-black text-[#0a0a0a] font-sora hover:scale-110 transition-transform cursor-pointer">
                  {p.logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[600px]">
              <motion.div 
                whileHover={{ outline: "2px solid #f89b34" }}
                className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Large" fill className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ outline: "2px solid #f89b34" }}
                className="md:row-span-2 relative rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692" alt="Tall" fill className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ outline: "2px solid #f89b34" }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Med" fill className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ outline: "2px solid #f89b34" }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Med" fill className="object-cover" />
              </motion.div>
            </div>
            <div className="text-center mt-12">
              <Link href="/portfolio" className="bg-[#f89b34] text-[#0a0a0a] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-[#f89b34]/30">
                View Project Showcase
              </Link>
            </div>
          </div>
        </section>

        {/* BLOG CARDS */}
        <section className="py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-sora font-light text-[#0a0a0a]">
                  Latest from <span className="text-[#f89b34] font-bold">Insights</span>
                </h2>
              </div>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
              {BLOGS.map((blog, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-700 hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-[#f89b34] text-[#0a0a0a] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {blog.tag}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-sora font-bold text-[#0a0a0a] mb-4 leading-snug h-14 overflow-hidden">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8 line-clamp-1 font-inter">
                      {blog.excerpt}
                    </p>
                    <Link href="/blog" className="text-[#f89b34] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/blog" className="border-2 border-[#f89b34] text-[#f89b34] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#f89b34] hover:text-[#0a0a0a] transition-all">
                See all Insights →
              </Link>
            </div>
          </div>
        </section>

        {/* BRAND BANNER */}
        <section className="py-24 bg-[#0D1B2A] relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(#f89b34_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white font-sora mb-4 tracking-tighter">
                Shyama Overseas
              </h2>
              <p className="text-[#f89b34] text-xl italic font-light mb-16 font-inter">
                Your Global Digital Partner
              </p>
            </motion.div>

            <div className="relative h-40">
              {[
                { text: "Digital solutions that drive results →", top: "0%", left: "10%" },
                { text: "Focus on human-centric design →", top: "20%", left: "60%" },
                { text: "ROI-oriented engineering →", top: "60%", left: "20%" },
                { text: "A team of seasoned creative techies →", top: "80%", left: "55%" },
                { text: "End-to-end digital transformation →", top: "40%", left: "40%" },
              ].map((tag, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute text-white/40 text-xs font-medium tracking-wider whitespace-nowrap hidden md:block"
                  style={{ top: tag.top, left: tag.left }}
                >
                  {tag.text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-sora font-light text-[#0a0a0a]">
                <span className="text-[#f89b34] font-bold">Get in touch</span> with us for
              </h2>
              <p className="text-2xl text-[#0a0a0a] font-inter font-light mt-2">
                our Digital & Creative Services
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-[#f89b34] transition-colors text-[#0a0a0a] font-medium" placeholder="Name" />
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-[#f89b34] transition-colors text-[#0a0a0a] font-medium" placeholder="Email ID" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-[#f89b34] transition-colors text-[#0a0a0a] font-medium" placeholder="Contact Number" />
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-[#f89b34] transition-colors text-[#0a0a0a] font-medium" placeholder="Website / LinkedIn" />
                </div>
                <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-[#f89b34] transition-colors text-[#0a0a0a] font-medium" placeholder="Company Name" />
                <textarea className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-[#f89b34] transition-colors text-[#0a0a0a] font-medium resize-none" rows={4} placeholder="Please share your digital requirement in detail..." />
                <button className="bg-[#f89b34] hover:bg-[#f89b34]/90 text-[#0a0a0a] w-full py-5 rounded-full font-bold uppercase tracking-[4px] text-sm transition-all shadow-xl shadow-[#f89b34]/20">
                  SEND MESSAGE
                </button>
              </form>

              <div className="bg-[#0a0a0a] p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f89b34]/10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10 space-y-10">
                  <div>
                    <div className="text-[#f89b34] text-4xl font-sora font-bold mb-2">+91 9033131093</div>
                    <p className="text-white/50 text-sm tracking-wider uppercase font-medium">available from 10:00 – 18:00</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[#f89b34] font-bold uppercase tracking-[3px] text-[10px] mb-2">Locations</h4>
                      <p className="text-lg font-sora font-semibold">Ahmedabad | Surat | Vadodara</p>
                    </div>
                    <div>
                      <h4 className="text-[#f89b34] font-bold uppercase tracking-[3px] text-[10px] mb-2">Email Us</h4>
                      <Link href="mailto:info@shyamoverseas.com" className="text-lg font-sora font-semibold hover:text-[#f89b34] transition-colors">
                        info@shyamoverseas.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTOR TAGS STRIP */}
        <section className="bg-[#0a0a0a] py-8 overflow-hidden border-y border-white/5">
          <div className="flex gap-12 w-max animate-marquee-slow px-6">
            {[...SECTOR_TAGS, ...SECTOR_TAGS].map((s, i) => (
              <span key={i} className="text-white/30 text-xs font-bold uppercase tracking-[4px] whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#060F1E] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f89b34] rounded flex items-center justify-center font-black text-xl text-[#0a0a0a]">S</div>
              <span className="text-2xl font-sora font-bold">Shyama Overseas</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-inter">
              We are one of India's Leading Digital & Creative Agencies, committed to building reliable bridges between your vision and global digital excellence.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook, Twitter, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#f89b34] hover:border-[#f89b34] transition-all cursor-pointer group">
                  <Icon className="w-4 h-4 group-hover:text-[#0a0a0a]" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-[#f89b34] font-bold uppercase tracking-[3px] text-xs mb-8">Important Links</h6>
            <ul className="space-y-4">
              {["Our Story", "Services", "Our Portfolio", "Creative Campaigns", "Case Study", "Career"].map(l => (
                <li key={l}><Link href="#" className="text-white/50 hover:text-[#f89b34] transition-colors text-sm font-medium">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-[#f89b34] font-bold uppercase tracking-[3px] text-xs mb-8">Our Ventures</h6>
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-white font-bold mb-2 text-sm font-sora">Official Partners</div>
                <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest font-bold">Google & Meta Business Partner Agency.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-[#f89b34]/20 flex items-center justify-center text-[10px] font-bold text-[#f89b34] text-center font-sora">
                  ISO<br />9001<br />2015
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Certified<br/>Creative<br/>Agency</div>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-[#f89b34] font-bold uppercase tracking-[3px] text-xs mb-8">Get In Touch</h6>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-[#f89b34] mt-1"><Globe className="w-4 h-4" /></span>
                <p className="text-white/50 text-sm font-medium">Ahmedabad | Surat | Vadodara</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#f89b34]"><Phone className="w-4 h-4" /></span>
                <p className="text-white/50 text-sm font-medium">+91-90331 31093</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#f89b34]"><Mail className="w-4 h-4" /></span>
                <p className="text-white/50 text-sm font-medium">info@shyamoverseas.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-white/30 uppercase tracking-[3px] font-bold">
            © 2014–2026 | All Rights Reserved by Shyama Overseas
          </p>
          <p className="text-[11px] text-white/30 uppercase tracking-[3px] font-bold">
            Expanding Horizons, Building Bridges.
          </p>
        </div>
      </footer>

    </div>
  );
}
