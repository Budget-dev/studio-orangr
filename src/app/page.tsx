
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Palette, 
  Megaphone, 
  Search, 
  Smartphone, 
  Layers, 
  BarChart3, 
  Plus,
  ArrowRight,
  Menu,
  X,
  MonitorSmartphone,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WorldMap } from "@/components/WorldMap";
import { LogoCloud } from "@/components/LogoCloud";

/* ── DATA ── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Sectors", href: "/sectors" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const STATS = [
  { label: "Years of Excellence", value: 19, suffix: "+" },
  { label: "Clients Served", value: 250, suffix: "+" },
  { label: "Countries Reached", value: 40, suffix: "+" },
  { label: "Shipments Handled", value: 15, suffix: "K+" },
];

const SECTOR_TAGS = [
  "Agriculture", "Textiles", "Pharma", "Manufacturing", 
  "Chemicals", "Food & Beverages", "Gems & Jewellery", 
  "Engineering", "Logistics", "Supply Chain", "Export",
  "B2B", "FMCG", "Digital Trade"
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

const testimonials = [
  {
    text: "Shyama Overseas transformed our digital presence. Their attention to detail in UI/UX is truly unmatched. They turned our vision into a global growth reality.",
    name: "Arjun Mehta",
    role: "CEO, Innovate India",
    image: "https://picsum.photos/seed/arjun/100/100"
  },
  {
    text: "The digital trade solutions provided by Shyama helped us reach 40+ countries. Their expertise in logistics and ad-tech is phenomenal.",
    name: "Priya Sharma",
    role: "Marketing Director, Ethos Retail",
    image: "https://picsum.photos/seed/priya/100/100"
  },
  {
    text: "Reliable, creative, and fast. They are the perfect partner for scaling any business. Their in-house studio handled everything perfectly.",
    name: "Vikram Goel",
    role: "Founder, Goel Logistics",
    image: "https://picsum.photos/seed/vikram/100/100"
  },
  {
    text: "From branding to performance marketing, they handle it all with absolute professionalism and deep insight into the Indian export market.",
    name: "Sanjay Gupta",
    role: "Head of Digital, Bharat Tech",
    image: "https://picsum.photos/seed/sanjay/100/100"
  },
  {
    text: "Their team brought our vision to life. The new digital portal has significantly improved our conversion rates and trade flow.",
    name: "Neha Kapoor",
    role: "Product Manager, Style Quotient",
    image: "https://picsum.photos/seed/neha/100/100"
  },
  {
    text: "Partnering with Shyama Overseas was the best decision for our digital transformation. They are truly maestros of global growth.",
    name: "Rohan Varma",
    role: "CTO, NextGen FinCorp",
    image: "https://picsum.photos/seed/rohan/100/100"
  }
];

/* ── COMPONENTS ── */

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-white" key={i}>
                  <div className="text-sm text-secondary font-medium italic mb-6">"{text}"</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-secondary text-sm tracking-tight leading-5">{name}</div>
                      <div className="leading-5 text-primary font-bold text-[10px] uppercase tracking-wider">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
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
      <div className="text-5xl font-sora font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm font-semibold uppercase tracking-wider font-sora">
        {label}
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      
      {/* NAVBAR */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-6 lg:px-12 flex items-center justify-between h-[85px]",
        isScrolled ? "bg-secondary shadow-xl h-16 translate-y-0" : "bg-transparent translate-y-0"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xl text-secondary group-hover:rotate-12 transition-transform">S</div>
          <div className="flex flex-col">
            <span className="text-white font-sora font-bold leading-tight">Shyama Overseas</span>
            <span className="text-[10px] text-primary font-semibold uppercase tracking-widest">Global Trade Solutions</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <Link href={link.href} className="text-white/90 hover:text-primary font-semibold text-[13px] transition-colors uppercase tracking-wider">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden lg:block bg-primary hover:bg-primary/90 text-secondary px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-primary/30">
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
              className="fixed right-0 top-0 bottom-0 w-[80%] max-sm max-w-sm bg-secondary z-[1002] p-10 shadow-2xl flex flex-col"
            >
              <button onClick={() => setIsMobMenuOpen(false)} className="self-end text-white mb-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-8 h-8" />
              </button>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map(link => (
                  <Link key={link.label} href={link.href} className="text-white text-2xl font-sora font-medium hover:text-primary transition-colors" onClick={() => setIsMobMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" className="mt-6 bg-primary text-secondary text-center py-4 rounded-full font-bold text-lg" onClick={() => setIsMobMenuOpen(false)}>
                  Our Profile
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center overflow-hidden bg-secondary w-full">
          <Image 
            src="/assets/images/_extra____Indian_private_202603201015.png" 
            alt="Hero Background" 
            fill 
            className="object-cover object-center opacity-60"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent z-10" />
          
          <div className="relative z-20 w-full px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
              >
                <div className="text-primary font-black uppercase tracking-[8px] text-xs mb-6 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-primary" />
                  Your Partners in
                </div>
                
                <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.9] uppercase font-sora mb-8 italic">
                  Digital<br /><span className="text-primary not-italic">Dominance</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl font-inter border-l-4 border-primary pl-8">
                  Redefining Global Trade with Cutting-edge Design, Tech, and Strategic Excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/services" className="bg-primary text-secondary px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform text-center shadow-xl shadow-primary/20">
                    Our Services
                  </Link>
                  <Link href="/contact" className="bg-transparent border-2 border-white/50 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-secondary transition-all text-center">
                    Get Started
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* MOVING TEXT BAR */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary py-5 overflow-hidden border-t-2 border-secondary/20 z-30">
            <div className="flex gap-16 w-max animate-marquee-slow items-center">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-secondary font-black text-5xl uppercase tracking-[12px] whitespace-nowrap opacity-90 italic">
                  DIGITAL GROWTH MAESTROS • GLOBAL TRADE • STRATEGIC DESIGN • 
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-secondary relative overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 py-16 relative z-10">
            {STATS.map((stat, idx) => (
              <div key={stat.label} className="relative">
                <StatCounter {...stat} />
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-12 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* LOGO CLOUD */}
        <section className="py-24 bg-white border-b border-border/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-sora font-light text-secondary">
                  Our <span className="text-primary font-bold">Strategic Network</span>
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 italic">Trusted by Global Leaders</p>
              </div>
              <LogoCloud />
            </FadeIn>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary mb-4">
                  Full-Suite <span className="text-primary font-bold">Digital Services</span>
                </h2>
                <p className="text-primary font-medium uppercase tracking-[4px] text-xs">Innovation Unleashed</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((svc, i) => (
                <motion.div 
                  key={svc.title}
                  whileHover={{ y: -10 }}
                  className={cn(
                    "p-10 rounded-3xl transition-all duration-300 group bg-white shadow-xl shadow-secondary/5 border border-transparent hover:border-primary",
                    svc.isCTA ? "bg-secondary text-white" : ""
                  )}
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300",
                    svc.isCTA ? "bg-primary" : "bg-muted group-hover:bg-primary"
                  )}>
                    <svc.icon className={cn(
                      "w-8 h-8 transition-colors duration-300",
                      svc.isCTA ? "text-secondary" : "text-primary group-hover:text-white"
                    )} />
                  </div>
                  <h3 className={cn(
                    "text-xl font-sora font-bold mb-4",
                    svc.isCTA ? "text-white" : "text-secondary group-hover:text-primary"
                  )}>
                    {svc.title}
                  </h3>
                  <p className={cn(
                    "text-sm leading-relaxed mb-8",
                    svc.isCTA ? "text-white/60" : "text-muted-foreground"
                  )}>
                    {svc.desc}
                  </p>
                  <Link href="/services" className={cn(
                    "flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-transform group-hover:translate-x-2",
                    svc.isCTA ? "text-primary" : "text-primary"
                  )}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OPERATIONS SECTION */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <FadeIn>
                <div className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-[4px] text-xs mb-6 border-b-2 border-primary pb-2">
                  Operations
                </div>
                <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary mb-8 leading-tight">
                  A company with an<br />
                  <span className="text-primary font-bold">In-house Creative Studio</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-inter italic max-w-3xl mx-auto">
                  As a full-service digital house, we manage design, development, content production, and ad-tech implementation entirely in-house — giving you a single point of accountability.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">
              {[1, 2, 3].map((id) => (
                <div key={id} className="relative rounded-3xl overflow-hidden shadow-2xl group border-2 border-primary/10">
                  <video 
                    src={`/assets/videos/${id}.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                    <p className="text-primary font-black text-xs uppercase tracking-[4px] mb-2">Process Stage</p>
                    <h4 className="text-white font-sora font-bold text-2xl">Production 0{id}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORLD MAP SECTION */}
        <section className="bg-white py-24 relative overflow-hidden border-y border-border/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center mb-20">
                <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4">Global Reach</div>
                <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary leading-tight">
                  Driving Results for <span className="font-bold">250+ Brands</span> <span className="text-primary">Across The Globe</span>
                </h2>
              </div>
            </FadeIn>
            
            <div className="max-w-7xl mx-auto relative group">
              <WorldMap
                lineColor="#f89b34"
                dots={[
                  {
                    start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                    end: { lat: 40.7128, lng: -74.0060, label: "New York" },
                  },
                  {
                    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
                    end: { lat: 51.5074, lng: -0.1278, label: "London" },
                  },
                  {
                    start: { lat: 17.6868, lng: 83.2185, label: "Visakhapatnam" },
                    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
                  },
                  {
                    start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                    end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                  },
                  {
                    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
                    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 bg-[#FAFAF8] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-sora font-light text-secondary">
                  Our <span className="text-primary font-bold italic">Indian Partners</span>
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 italic">Voices of Success</p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-[500px] items-start">
              <TestimonialsColumn 
                testimonials={testimonials.slice(0, 2)} 
                duration={15} 
                className="hidden lg:block"
              />
              <TestimonialsColumn 
                testimonials={testimonials.slice(2, 4)} 
                duration={18}
              />
              <TestimonialsColumn 
                testimonials={testimonials.slice(4, 6)} 
                duration={16}
                className="hidden md:block"
              />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary">
                  <span className="text-primary font-bold">Get in touch</span> with us
                </h2>
                <p className="text-2xl text-secondary font-inter font-light mt-2 italic">
                  Let's craft your digital legacy.
                </p>
              </FadeIn>
            </div>

            <div className="grid lg:grid-cols-[1fr_450px] gap-20 items-start">
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <input className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal" placeholder="Full Name" />
                  <input className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal" placeholder="Email Address" />
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <input className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal" placeholder="Contact Number" />
                  <input className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal" placeholder="Company Website" />
                </div>
                <textarea className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal resize-none" rows={4} placeholder="How can we help you dominant your industry?" />
                <button className="bg-primary hover:bg-primary/90 text-secondary w-full py-6 rounded-full font-black uppercase tracking-[6px] text-sm transition-all shadow-2xl shadow-primary/30">
                  INITIATE GROWTH
                </button>
              </form>

              <div className="bg-secondary p-16 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 space-y-12">
                  <div>
                    <div className="text-primary text-5xl font-sora font-black mb-3">+91 9033131093</div>
                    <p className="text-white/40 text-[10px] font-bold tracking-[4px] uppercase">Available 10:00 – 18:00 IST</p>
                  </div>
                  <div className="space-y-8">
                    <div className="group">
                      <h4 className="text-primary font-black uppercase tracking-[4px] text-[10px] mb-3 group-hover:translate-x-2 transition-transform">HQ Locations</h4>
                      <p className="text-xl font-sora font-bold">Ahmedabad • Surat • Vadodara</p>
                    </div>
                    <div className="group">
                      <h4 className="text-primary font-black uppercase tracking-[4px] text-[10px] mb-3 group-hover:translate-x-2 transition-transform">Email Support</h4>
                      <Link href="mailto:info@shyamoverseas.com" className="text-xl font-sora font-bold hover:text-primary transition-colors block">
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
        <section className="bg-secondary py-10 overflow-hidden border-y border-white/5">
          <div className="flex gap-20 w-max animate-marquee-slow px-6 items-center">
            {[...SECTOR_TAGS, ...SECTOR_TAGS].map((s, i) => (
              <span key={i} className="text-white/20 text-xs font-black uppercase tracking-[6px] whitespace-nowrap">
                {s} •
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#050B14] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-black text-2xl text-secondary group-hover:scale-110 transition-transform">S</div>
              <span className="text-2xl font-sora font-black tracking-tight">Shyama Overseas</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-inter italic border-l-2 border-primary pl-6">
              Empowering Indian brands to transcend borders through strategic digital excellence.
            </p>
          </div>

          <div>
            <h6 className="text-primary font-black uppercase tracking-[4px] text-[10px] mb-10">Navigation</h6>
            <ul className="space-y-5">
              {["Our Story", "Services", "Portfolio", "Insights", "Careers"].map(l => (
                <li key={l}><Link href="#" className="text-white/40 hover:text-primary transition-all text-sm font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary" /> {l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-primary font-black uppercase tracking-[4px] text-[10px] mb-10">Accreditations</h6>
            <div className="space-y-10">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:border-primary transition-colors">
                <div className="text-white font-bold mb-3 text-sm font-sora">Official Partner</div>
                <p className="text-white/30 text-[9px] leading-relaxed uppercase tracking-widest font-black italic">Google & Meta Certified Growth Agency</p>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-primary font-black uppercase tracking-[4px] text-[10px] mb-10">Connectivity</h6>
            <div className="space-y-6">
              <div className="flex items-center gap-5 text-white/40 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors"><Globe className="w-5 h-5 group-hover:text-secondary" /></div>
                <p className="text-sm font-bold">Pan-India Presence</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
