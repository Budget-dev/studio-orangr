"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Anchor, 
  Ship, 
  Package, 
  ClipboardCheck, 
  Globe, 
  Briefcase, 
  Handshake, 
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
  Warehouse,
  CheckCircle2,
  FileSpreadsheet,
  Network,
  Truck,
  Building2,
  Award
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
  { label: "Clients Served", value: 250, suffix: "+" },
  { label: "Product Categories", value: 50, suffix: "+" },
  { label: "Countries Reached", value: 35, suffix: "+" },
];

const SERVICES = [
  { icon: Ship, title: "Export Management", desc: "End-to-end export documentation and logistics management." },
  { icon: Package, title: "Import Solutions", desc: "Seamless import coordination and specialized customs clearance." },
  { icon: ClipboardCheck, title: "Trade Compliance", desc: "DGFT, IEC, and regulatory compliance support for all trades." },
  { icon: Network, title: "Global Sourcing", desc: "Connecting you with verified global suppliers and distributors." },
  { icon: Briefcase, title: "B2B Trade Facilitation", desc: "Business-to-business deal structuring and expert negotiation." },
  { icon: Handshake, title: "Buyer-Seller Connect", desc: "Matchmaking between top exporters and international buyers." },
  { icon: BarChart3, title: "Market Intelligence", desc: "Trade data, deep market research, and competitor analysis." },
  { icon: Plus, title: "All Services →", desc: "View our complete range of specialized trade services.", isCTA: true },
];

const CLIENT_LOGOS_R1 = ["IndiaMART", "Alibaba", "Zydus", "Amity University", "National Tenders", "SIG", "FMCG Corp", "Shemaroo"];
const CLIENT_LOGOS_R2 = ["TradeIndia", "Interakt", "Univo", "Livyor", "Zion Salons", "DA-IICT", "ExportHub", "Rangou"];

const PLATFORMS = [
  { name: "IndiaMART", logo: "IndiaMART" },
  { name: "Alibaba", logo: "Alibaba" },
  { name: "TradeIndia", logo: "TradeIndia" },
  { name: "Amazon Global Selling", logo: "Amazon Global" },
  { name: "ExportHub", logo: "ExportHub" },
];

const BLOGS = [
  { 
    title: "How to Start Exporting from India: A Step-by-Step Guide", 
    tag: "Export Guide", 
    image: "https://images.unsplash.com/photo-1521791136064-7986c2923216",
    excerpt: "Everything you need to know about starting your international trade journey."
  },
  { 
    title: "Top 10 Products India Exports to the Middle East in 2025", 
    tag: "Market Trends", 
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    excerpt: "Emerging opportunities in one of India's fastest growing trade corridors."
  },
  { 
    title: "How to Select the Right International Freight Forwarder", 
    tag: "Logistics", 
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
    excerpt: "Key criteria for choosing a partner that aligns with your business goals."
  },
];

const PORTFOLIO_IMAGES = [
  { url: "https://images.unsplash.com/photo-1553413077-190dd305871c", caption: "Smart Warehousing" },
  { url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187", caption: "Premium Trade Goods" },
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd", caption: "Industrial Reach" },
  { url: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2", caption: "Express Logistics" },
  { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", caption: "Container Management" },
  { url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088", caption: "Air Freight Loading" },
  { url: "https://images.unsplash.com/photo-1560472355-536de3962603", caption: "Client Consultation" },
  { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", caption: "Global Trade Deals" },
];

const SECTOR_TAGS = [
  "Agriculture & Food Products", "Textiles & Apparel", "Chemicals & Petrochemicals", 
  "Pharmaceuticals", "FMCG & Consumer Goods", "Handicrafts & Home Décor", 
  "Engineering Goods", "Gems & Jewellery", "IT & Software Services"
];

const LOCATIONS = [
  { name: "CANADA", top: "25%", left: "15%" },
  { name: "EUROPE", top: "20%", left: "45%" },
  { name: "UAE", top: "40%", left: "55%" },
  { name: "INDIA", top: "45%", left: "65%" },
  { name: "SOUTH AMERICA", top: "70%", left: "25%" },
  { name: "SOUTH AFRICA", top: "75%", left: "50%" },
  { name: "AUSTRALIA", top: "75%", left: "85%" },
  { name: "NEW ZEALAND", top: "85%", left: "90%" },
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
      <div className="text-5xl font-sora font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
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
          <div key={i} className="flex-shrink-0 bg-white border border-border rounded-xl px-10 py-6 min-w-[180px] h-[100px] flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:border-accent hover:shadow-lg">
            <span className="text-primary font-bold text-lg font-sora">{logo}</span>
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
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      
      {/* CHANGE 2 — NAVBAR */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 px-6 lg:px-12 flex items-center justify-between h-[85px]",
        isScrolled ? "bg-primary shadow-xl h-16 translate-y-0" : "bg-transparent translate-y-0"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-black text-xl text-white group-hover:rotate-12 transition-transform">S</div>
          <div className="flex flex-col">
            <span className="text-white font-sora font-bold leading-tight">Shyam Overseas</span>
            <span className="text-[10px] text-accent font-semibold uppercase tracking-widest">Your Global Trade Partner</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <Link href={link.href} className="text-white/90 hover:text-accent font-semibold text-[13px] transition-colors uppercase tracking-wider">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden lg:block bg-accent hover:bg-accent/90 text-white px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-accent/30">
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
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-primary z-[1002] p-10 shadow-2xl flex flex-col"
            >
              <button onClick={() => setIsMobMenuOpen(false)} className="self-end text-white mb-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-8 h-8" />
              </button>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map(link => (
                  <Link key={link.label} href={link.href} className="text-white text-2xl font-sora font-medium hover:text-accent transition-colors" onClick={() => setIsMobMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" className="mt-6 bg-accent text-white text-center py-4 rounded-full font-bold text-lg" onClick={() => setIsMobMenuOpen(false)}>
                  Our Profile
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        
        {/* CHANGE 1 — HERO SECTION */}
        <section className="relative h-screen flex items-center overflow-hidden bg-primary">
          <Image 
            src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2" 
            alt="Cinematic Trade" 
            fill 
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 hero-gradient z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="text-white font-medium uppercase tracking-[6px] text-sm mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-accent" />
                We are your
              </div>
              
              <div className="relative inline-block mb-10">
                <div className="bg-accent px-8 py-6 absolute inset-0 -skew-x-6 z-[-1] shadow-2xl" />
                <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.9] uppercase font-sora -skew-x-6">
                  GLOBAL TRADE<br />MAESTROS
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-white/90 font-light italic leading-relaxed mb-12 max-w-2xl font-inter">
                Crafting Your Legacy of International Commerce with Precision, Compliance, and Unmatched Efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/services" className="bg-accent text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform text-center shadow-2xl shadow-accent/20">
                  Explore Services
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all text-center">
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
            <span className="text-white/40 text-[10px] uppercase tracking-[4px] vertical-text transform -rotate-90 origin-left mb-12">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </section>

        {/* CHANGE 3 — STATS BAR */}
        <section className="bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 py-16 relative z-10">
            {STATS.map((stat, idx) => (
              <div key={stat.label} className="relative">
                <StatCounter {...stat} />
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-12 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CHANGE 4 — SERVICES GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-sora font-light text-primary mb-4">
                  Our Trade & <span className="text-accent italic font-bold">Export Services</span>
                </h2>
                <p className="text-accent font-medium uppercase tracking-[4px] text-xs">Your Instruments</p>
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
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                    <svc.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-sora font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-2">
                    {svc.desc}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest transform transition-transform group-hover:translate-x-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHANGE 5 — WORLD MAP SECTION */}
        <section className="bg-[#060F1E] py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center mb-20">
                <div className="text-accent font-bold uppercase tracking-[4px] text-xs mb-4">Our Reach & Clients</div>
                <h2 className="text-4xl md:text-5xl font-sora font-light text-white leading-tight">
                  Worked with <span className="font-bold">250+ Clients</span> <span className="text-accent">Across The Globe</span>
                </h2>
              </div>
            </FadeIn>
            
            <div className="relative aspect-[16/7] max-w-5xl mx-auto">
              {/* Simplified Dotted World Map Replicated */}
              <div className="absolute inset-0 opacity-20 world-map-dots" />
              
              {/* Pins visualization */}
              {LOCATIONS.map((loc) => (
                <motion.div 
                  key={loc.name} 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute z-20 group"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-12 h-12 bg-accent/20 rounded-full animate-ping" />
                    <div className="w-3 h-3 bg-accent rounded-full gold-glow" />
                    <div className="absolute top-full mt-3 bg-accent text-white font-sora font-bold text-[10px] px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      {loc.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHANGE 6 — CLIENT PORTFOLIO GRID */}
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
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-white font-sora font-bold text-sm tracking-widest uppercase">
                      {item.caption}
                    </span>
                    <div className="w-8 h-[2px] bg-accent mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHANGE 7 — LOGO MARQUEE */}
        <section className="py-20 bg-muted/20 border-y border-border/10">
          <div className="max-w-7xl mx-auto space-y-8">
            <LogoMarquee direction="left" logos={CLIENT_LOGOS_R1} />
            <LogoMarquee direction="right" logos={CLIENT_LOGOS_R2} />
            <div className="text-center pt-8">
              <Link href="/portfolio" className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-accent/30">
                Our Clienteles
              </Link>
            </div>
          </div>
        </section>

        {/* CHANGE 8 & 10 — PLATFORMS & OPERATIONS */}
        <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
            <div className="studio-text relative">
              <div className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-[4px] text-xs mb-6 border-l-4 border-accent pl-4">
                Operations
              </div>
              <h2 className="text-4xl md:text-5xl font-sora font-light text-primary mb-8 leading-tight">
                A company with an<br />
                <span className="text-accent font-bold">In-house Trade Operations Team</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-inter italic border-l-2 border-border pl-8">
                As a full-service import-export house, we manage sourcing, documentation, compliance, logistics, and buyer communication entirely in-house — giving you a single point of accountability.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1553413077-190dd305871c",
                "https://images.unsplash.com/photo-1560472355-536de3962603",
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187"
              ].map((img, i) => (
                <motion.div 
                  key={i} 
                  initial={{ y: i * 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="aspect-[2/3] relative rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image src={img} alt="Operations" fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-32 text-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-sora font-light text-primary">
                Strategic <span className="font-bold">Platforms</span>, Measurable Results
              </h2>
              <p className="text-accent font-bold uppercase tracking-widest text-[10px] mt-2">Our Trade Arsenal</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              {PLATFORMS.map(p => (
                <div key={p.name} className="text-2xl font-black text-primary font-sora hover:scale-110 hover:shadow-2xl transition-transform cursor-pointer">
                  {p.logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHANGE 9 — BENTO GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[600px]">
              <motion.div 
                whileHover={{ outline: "2px solid #C9A84C" }}
                className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" alt="Large" fill className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ outline: "2px solid #C9A84C" }}
                className="md:row-span-2 relative rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2" alt="Tall" fill className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ outline: "2px solid #C9A84C" }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088" alt="Med" fill className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ outline: "2px solid #C9A84C" }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" alt="Med" fill className="object-cover" />
              </motion.div>
            </div>
            <div className="text-center mt-12">
              <Link href="/portfolio" className="bg-accent text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-accent/30">
                View Our Trade Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* CHANGE 11 — BLOG CARDS */}
        <section className="py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-sora font-light text-primary">
                  Latest from <span className="text-accent font-bold">Insights</span>
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
                    <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {blog.tag}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-sora font-bold text-primary mb-4 leading-snug h-14 overflow-hidden">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8 line-clamp-1 font-inter">
                      {blog.excerpt}
                    </p>
                    <Link href="/blog" className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/blog" className="border-2 border-accent text-accent px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all">
                See all Insights →
              </Link>
            </div>
          </div>
        </section>

        {/* CHANGE 12 — BRAND BANNER */}
        <section className="py-24 bg-[#0D1B2A] relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-5 pointer-events-none world-map-dots" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white font-sora mb-4 tracking-tighter">
                Shyam Overseas
              </h2>
              <p className="text-accent text-xl italic font-light mb-16 font-inter">
                Your Global Trade Partner
              </p>
            </motion.div>

            <div className="relative h-40">
              {[
                { text: "Trade solutions that drive results →", top: "0%", left: "10%" },
                { text: "Focus on compliance →", top: "20%", left: "60%" },
                { text: "Result-oriented mindset →", top: "60%", left: "20%" },
                { text: "A team of seasoned trade professionals →", top: "80%", left: "55%" },
                { text: "End-to-end trade management →", top: "40%", left: "40%" },
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

        {/* CHANGE 13 — CONTACT SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-sora font-light text-primary">
                <span className="text-accent font-bold">Get in touch</span> with us for
              </h2>
              <p className="text-2xl text-primary font-inter font-light mt-2">
                our Trade & Export Services
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-accent transition-colors text-primary font-medium" placeholder="Name" />
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-accent transition-colors text-primary font-medium" placeholder="Email ID" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-accent transition-colors text-primary font-medium" placeholder="Contact Number" />
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-accent transition-colors text-primary font-medium" placeholder="Website / Company" />
                </div>
                <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-accent transition-colors text-primary font-medium" placeholder="Company Name" />
                <textarea className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-accent transition-colors text-primary font-medium resize-none" rows={4} placeholder="Please share your requirement in detail..." />
                <button className="bg-accent hover:bg-accent/90 text-white w-full py-5 rounded-full font-bold uppercase tracking-[4px] text-sm transition-all shadow-xl shadow-accent/20">
                  SEND MESSAGE
                </button>
              </form>

              <div className="bg-primary p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10 space-y-10">
                  <div>
                    <div className="text-accent text-4xl font-sora font-bold mb-2">9033131093</div>
                    <p className="text-white/50 text-sm tracking-wider uppercase font-medium">available from 10:00 – 18:00</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-accent font-bold uppercase tracking-[3px] text-[10px] mb-2">Locations</h4>
                      <p className="text-lg font-sora font-semibold">Ahmedabad | Surat | Vadodara</p>
                    </div>
                    <div>
                      <h4 className="text-accent font-bold uppercase tracking-[3px] text-[10px] mb-2">Email Us</h4>
                      <Link href="mailto:info@shyamoverseas.com" className="text-lg font-sora font-semibold hover:text-accent transition-colors">
                        info@shyamoverseas.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHANGE 16 — SECTOR TAGS STRIP */}
        <section className="bg-primary py-8 overflow-hidden border-y border-white/5">
          <div className="flex gap-12 w-max animate-marquee-slow px-6">
            {[...SECTOR_TAGS, ...SECTOR_TAGS].map((s, i) => (
              <span key={i} className="text-white/30 text-xs font-bold uppercase tracking-[4px] whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* CHANGE 14 — FOOTER */}
      <footer className="bg-[#060F1E] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-black text-xl text-white">S</div>
              <span className="text-2xl font-sora font-bold">Shyam Overseas</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-inter">
              We are one of India's Leading Import-Export Companies, committed to building reliable bridges between Indian excellence and global markets.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Building2, Facebook, Twitter, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer group">
                  <Icon className="w-4 h-4 group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-accent font-bold uppercase tracking-[3px] text-xs mb-8">Important Links</h6>
            <ul className="space-y-4">
              {["Our Story", "Services", "Our Portfolio", "Trade Campaigns", "Case Study", "Career"].map(l => (
                <li key={l}><Link href="#" className="text-white/50 hover:text-accent transition-colors text-sm font-medium">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-accent font-bold uppercase tracking-[3px] text-xs mb-8">Our Ventures</h6>
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-white font-bold mb-2 text-sm font-sora">Official Partners</div>
                <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest font-bold">Official Partner of FIEO and DGFT.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center text-[10px] font-bold text-accent text-center font-sora">
                  ISO<br />9001<br />2015
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Certified<br/>Logistics<br/>Agency</div>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-accent font-bold uppercase tracking-[3px] text-xs mb-8">Get In Touch</h6>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-accent mt-1"><Building2 className="w-4 h-4" /></span>
                <p className="text-white/50 text-sm font-medium">Nariman Point, Mumbai 400 021, India</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent"><Phone className="w-4 h-4" /></span>
                <p className="text-white/50 text-sm font-medium">+91-90331 31093</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent"><Mail className="w-4 h-4" /></span>
                <p className="text-white/50 text-sm font-medium">info@shyamoverseas.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-white/30 uppercase tracking-[3px] font-bold">
            © 2014–2026 | All Rights Reserved by Shyam Overseas
          </p>
          <p className="text-[11px] text-white/30 uppercase tracking-[3px] font-bold">
            Expanding Horizons, Building Bridges.
          </p>
        </div>
      </footer>

    </div>
  );
}