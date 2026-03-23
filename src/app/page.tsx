"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
import InteractiveBentoGallery, { MediaItemType } from "@/components/InteractiveBentoGallery";
import { DynamicFrameLayout } from "@/components/DynamicFrameLayout";
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

const AGENCY_GALLERY: MediaItemType[] = [
  {
    id: 1,
    type: 'image',
    title: 'Global Logistics',
    desc: 'Bespoke trade solutions crafted with precision and ROI in mind.',
    url: "/assets/images/_extra____Indian_private_202603201015.png",
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    type: 'image',
    title: 'Trade Operations',
    desc: 'Reimagining export identities for the global digital age.',
    url: "/assets/images/_extra____upper_middle_202603191201 - Copy.png",
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 3,
    type: 'image',
    title: 'Strategic Insights',
    desc: 'Strategic thinking meets logistical excellence in every route.',
    url: "/assets/images/imagecolur.png",
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 4,
    type: 'image',
    title: 'Digital Portal',
    desc: 'Seamless user interfaces for complex trade ecosystems.',
    url: "/assets/images/imagesloyred.png",
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 5,
    type: 'image',
    title: 'Next-Gen Logistics',
    desc: 'Pushing the boundaries of international trade and supply chain flow.',
    url: "/assets/images/nyf.png",
    span: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 6,
    type: 'image',
    title: 'Studio Excellence',
    desc: 'Our iterative process of trade and discovery yields results.',
    url: "/assets/images/niraj.png",
    span: 'md:col-span-1 md:row-span-1'
  }
];

const OPERATIONS_FRAMES = [
  { id: 1, video: "/assets/videos/1.mp4", defaultPos: { x: 0, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
  { id: 2, video: "/assets/videos/2.mp4", defaultPos: { x: 4, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
  { id: 3, video: "/assets/videos/3.mp4", defaultPos: { x: 8, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
  { id: 4, video: "/assets/videos/1.mp4", defaultPos: { x: 0, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
  { id: 5, video: "/assets/videos/2.mp4", defaultPos: { x: 4, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
  { id: 6, video: "/assets/videos/3.mp4", defaultPos: { x: 8, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
  { id: 7, video: "/assets/videos/1.mp4", defaultPos: { x: 0, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
  { id: 8, video: "/assets/videos/2.mp4", defaultPos: { x: 4, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
  { id: 9, video: "/assets/videos/3.mp4", defaultPos: { x: 8, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1.2, borderThickness: 0, borderSize: 100, isHovered: false },
];

const testimonials = [
  {
    text: "Shyama Overseas transformed our digital presence. Their attention to detail in UI/UX is truly unmatched in India. They turned our vision into a global growth reality.",
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

export const TestimonialsColumn = (props: {
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
                  <div className="text-sm text-muted-foreground leading-relaxed italic mb-6">"{text}"</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-secondary">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-primary font-bold text-xs uppercase">{role}</div>
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
      const duration = 1000;
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
            alt="Cinematic Agency Office" 
            fill 
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-transparent z-10" />
          
          <div className="relative z-20 w-full px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-4xl"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-white font-medium uppercase tracking-[6px] text-sm mb-6 flex items-center gap-4"
                >
                  <span className="w-12 h-[1px] bg-primary" />
                  We are your
                </motion.div>
                
                <div className="relative inline-block mb-10 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-primary px-8 py-6 absolute inset-0 -skew-x-6 z-[-1] shadow-2xl" 
                  />
                  <motion.h1 
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 50 }}
                    className="text-5xl md:text-[90px] font-black text-secondary leading-[0.9] uppercase font-sora -skew-x-6"
                  >
                    DIGITAL GROWTH<br />MAESTROS
                  </motion.h1>
                </div>

                <motion.p 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-xl md:text-2xl text-white/90 font-light italic leading-relaxed mb-12 max-w-2xl font-inter"
                >
                  Crafting Your Digital Legacy with Precision Design, Cutting-edge Tech, and Unmatched ROI.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Link href="/services" className="bg-primary text-secondary px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform text-center shadow-2xl shadow-primary/20">
                    Explore Services
                  </Link>
                  <Link href="/contact" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-secondary transition-all text-center">
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
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
                  Trusted by <span className="text-primary font-bold">Global Leaders</span>
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2">Strategic Partnerships</p>
              </div>
              <LogoCloud />
            </FadeIn>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary mb-4">
                  Our Digital & <span className="text-primary italic font-bold">Creative Services</span>
                </h2>
                <p className="text-primary font-medium uppercase tracking-[4px] text-xs">Your Instruments</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20 border border-border/20 overflow-hidden rounded-2xl shadow-sm">
              {SERVICES.map((svc, i) => (
                <motion.div 
                  key={svc.title}
                  whileHover={{ y: -5 }}
                  className={cn(
                    "p-10 transition-all duration-200 group bg-white hover:z-10",
                    svc.isCTA ? "bg-muted/30" : ""
                  )}
                >
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-200">
                    <svc.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-200" />
                  </div>
                  <h3 className="text-xl font-sora font-bold mb-4 text-secondary group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-2">
                    {svc.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest transform transition-transform group-hover:translate-x-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE BENTO GALLERY */}
        <section className="py-24 bg-white">
          <InteractiveBentoGallery 
            title="Our Creative Showcase" 
            description="A curated collection of our finest digital works and innovative solutions."
            mediaItems={AGENCY_GALLERY}
          />
        </section>

        {/* OPERATIONS / STUDIO */}
        <section className="py-24 bg-[#FAFAF8] relative overflow-hidden w-full">
          <div className="w-full px-6">
            <div className="mb-16 text-center max-w-4xl mx-auto">
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
            
            <div className="w-full mt-12 overflow-hidden aspect-video md:aspect-[21/9]">
               <DynamicFrameLayout 
                  frames={OPERATIONS_FRAMES} 
                  hoverSize={6}
                  gapSize={4}
                  showFrames={false}
               />
            </div>
          </div>
        </section>

        {/* WORLD MAP SECTION */}
        <section className="bg-white py-24 relative overflow-hidden border-y border-border/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center mb-20">
                <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4">Global Reach & Insights</div>
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
        <section className="py-24 bg-muted/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-sora font-light text-secondary">
                  Latest from <span className="text-primary font-bold">Insights</span>
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2">What our Indian partners say</p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[500px] items-start">
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
                  <span className="text-primary font-bold">Get in touch</span> with us for
                </h2>
                <p className="text-2xl text-secondary font-inter font-light mt-2">
                  our Digital & Creative Services
                </p>
              </FadeIn>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-medium" placeholder="Name" />
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-medium" placeholder="Email ID" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-medium" placeholder="Contact Number" />
                  <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-medium" placeholder="Website / LinkedIn" />
                </div>
                <input className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-medium" placeholder="Company Name" />
                <textarea className="w-full bg-transparent border-b-2 border-border/40 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-medium resize-none" rows={4} placeholder="Please share your digital requirement in detail..." />
                <button className="bg-primary hover:bg-primary/90 text-secondary w-full py-5 rounded-full font-bold uppercase tracking-[4px] text-sm transition-all shadow-xl shadow-primary/20">
                  SEND MESSAGE
                </button>
              </form>

              <div className="bg-secondary p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10 space-y-10">
                  <div>
                    <div className="text-primary text-4xl font-sora font-bold mb-2">+91 9033131093</div>
                    <p className="text-white/50 text-sm tracking-wider uppercase font-medium">available from 10:00 – 18:00</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-primary font-bold uppercase tracking-[3px] text-[10px] mb-2">Locations</h4>
                      <p className="text-lg font-sora font-semibold">Ahmedabad | Surat | Vadodara</p>
                    </div>
                    <div>
                      <h4 className="text-primary font-bold uppercase tracking-[3px] text-[10px] mb-2">Email Us</h4>
                      <Link href="mailto:info@shyamoverseas.com" className="text-lg font-sora font-semibold hover:text-primary transition-colors">
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
        <section className="bg-secondary py-8 overflow-hidden border-y border-white/5">
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
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center font-black text-xl text-secondary">S</div>
              <span className="text-2xl font-sora font-bold">Shyama Overseas</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-inter">
              We are one of India's Leading Digital & Creative Agencies, committed to building reliable bridges between your vision and global digital excellence.
            </p>
          </div>

          <div>
            <h6 className="text-primary font-bold uppercase tracking-[3px] text-xs mb-8">Important Links</h6>
            <ul className="space-y-4">
              {["Our Story", "Services", "Portfolio", "Case Studies", "Insights", "Career"].map(l => (
                <li key={l}><Link href="#" className="text-white/50 hover:text-primary transition-colors text-sm font-medium">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-primary font-bold uppercase tracking-[3px] text-xs mb-8">Our Ventures</h6>
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-white font-bold mb-2 text-sm font-sora">Official Partners</div>
                <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest font-bold">Google & Meta Business Partner Agency.</p>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-primary font-bold uppercase tracking-[3px] text-xs mb-8">Get In Touch</h6>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-primary mt-1"><Globe className="w-4 h-4" /></span>
                <p className="text-white/50 text-sm font-medium">Ahmedabad | Surat | Vadodara</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}