"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Menu,
  X,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WorldMap } from "@/components/WorldMap";
import { LogoCloud } from "@/components/LogoCloud";
import InteractiveBentoGallery, { type MediaItemType } from "@/components/InteractiveBentoGallery";
import { DynamicFrameLayout, type Frame } from "@/components/DynamicFrameLayout";

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

const GALLERY_ITEMS: MediaItemType[] = [
  { id: 1, type: 'image', title: 'Global Logistics', desc: 'Indian Private Trade Logistics Operations', url: '/assets/images/_extra____Indian_private_202603201015.png', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, type: 'image', title: 'Trade Operations', desc: 'Upper Middle Trade Operations Excellence', url: '/assets/images/_extra____upper_middle_202603191201 - Copy.png', span: 'md:col-span-1 md:row-span-1' },
  { id: 3, type: 'image', title: 'Digital Insights', desc: 'Subject A Trade Insights Analysis', url: '/assets/images/imagecolur.png', span: 'md:col-span-1 md:row-span-1' },
  { id: 4, type: 'image', title: 'Export Hub', desc: 'Indian Trade Subject 1 - Primary Port', url: '/assets/images/imagesloyred.png', span: 'md:col-span-1 md:row-span-1' },
  { id: 5, type: 'image', title: 'Logistics Network', desc: 'Indian Trade Subject 2 - Global Reach', url: '/assets/images/nyf.png', span: 'md:col-span-1 md:row-span-2' },
  { id: 6, type: 'image', title: 'Trade Mastery', desc: 'Indian Trade Subject 3 - Strategic Growth', url: '/assets/images/niraj.png', span: 'md:col-span-2 md:row-span-1' },
];

const OPERATIONS_FRAMES: Frame[] = [
  { id: 1, video: "https://cdn.pixabay.com/video/2016/10/05/5638-184518428_tiny.mp4", defaultPos: { x: 0, y: 0, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
  { id: 2, video: "https://cdn.pixabay.com/video/2021/04/12/70874-538186175_tiny.mp4", defaultPos: { x: 4, y: 0, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
  { id: 3, video: "https://cdn.pixabay.com/video/2016/09/08/5115-182885449_tiny.mp4", defaultPos: { x: 8, y: 0, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
  { id: 4, video: "https://cdn.pixabay.com/video/2019/12/11/30113-379656114_tiny.mp4", defaultPos: { x: 0, y: 4, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
  { id: 5, video: "https://cdn.pixabay.com/video/2022/10/25/136427-764359400_tiny.mp4", defaultPos: { x: 4, y: 4, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
  { id: 6, video: "https://cdn.pixabay.com/video/2015/12/11/1572-147814041_tiny.mp4", defaultPos: { x: 8, y: 4, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
  { id: 7, video: "https://cdn.pixabay.com/video/2016/10/16/5923-185419951_tiny.mp4", defaultPos: { x: 0, y: 8, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
  { id: 8, video: "https://cdn.pixabay.com/video/2017/04/24/8834-213328082_tiny.mp4", defaultPos: { x: 4, y: 8, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
  { id: 9, video: "https://cdn.pixabay.com/video/2020/05/25/40118-424754407_tiny.mp4", defaultPos: { x: 8, y: 8, w: 4, h: 4 }, mediaSize: 1, borderThickness: 1, borderSize: 100 },
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
        isScrolled ? "bg-secondary shadow-xl h-16" : "bg-transparent"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xl text-secondary group-hover:rotate-12 transition-transform">S</div>
          <div className="flex flex-col">
            <span className="text-white font-sora font-bold leading-tight uppercase">Shyama Overseas</span>
            <span className="text-[10px] text-primary font-semibold uppercase tracking-widest italic">Global Trade Solutions</span>
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

      {/* Mobile Menu */}
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
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-secondary z-[1002] p-10 shadow-2xl flex flex-col"
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
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent z-10" />
          
          <div className="relative z-20 w-full px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="text-primary font-black uppercase tracking-[8px] text-xs mb-6 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-primary" />
                  Digital Growth Maestros
                </div>
                
                <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.9] uppercase font-sora mb-8">
                  IDEA TO<br /><span className="text-primary italic">VISION</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl border-l-4 border-primary pl-8 italic">
                  Scaling Indian brands to global landmarks with precision digital trade and creative ad-tech.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/services" className="bg-primary text-secondary px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform text-center shadow-xl shadow-primary/20">
                    Explore Services
                  </Link>
                  <Link href="/contact" className="bg-transparent border-2 border-white/50 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-secondary transition-all text-center">
                    Initiate Growth
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* MOVING TEXT BAR */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary py-5 overflow-hidden z-30">
            <div className="flex gap-16 w-max animate-marquee-slow items-center">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-secondary font-black text-3xl uppercase tracking-[10px] whitespace-nowrap opacity-90">
                  GLOBAL TRADE SOLUTIONS • DIGITAL DOMINANCE • STRATEGIC EXCELLENCE • 
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LOGO CLOUD */}
        <section className="py-24 bg-white border-b border-border/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-sora font-light text-secondary">
                  Our <span className="text-primary font-bold italic">Strategic Network</span>
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 italic">Trusted by Global Leaders</p>
              </div>
              <LogoCloud />
            </FadeIn>
          </div>
        </section>

        {/* BENTO GALLERY */}
        <section className="py-24 bg-white border-b border-border/10">
          <InteractiveBentoGallery 
            mediaItems={GALLERY_ITEMS} 
            title="Our Creative Showcase" 
            description="A Visual Journey Through Our Global Success"
          />
        </section>

        {/* OPERATIONS SECTION */}
        <section className="py-24 bg-[#FAFAF8] overflow-hidden min-h-[800px] flex flex-col">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <FadeIn>
              <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-6">Operations</div>
              <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary mb-8 leading-tight">
                A company with an<br />
                <span className="text-primary font-bold italic">In-house Creative Studio</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic max-w-3xl">
                As a full-service digital house, we manage design, development, content production, and ad-tech implementation entirely in-house — giving you a single point of accountability.
              </p>
            </FadeIn>
          </div>

          <div className="flex-1 w-full max-w-[1600px] mx-auto px-6 h-[600px]">
            <DynamicFrameLayout 
              frames={OPERATIONS_FRAMES} 
              className="w-full h-full"
              showFrames={false}
              hoverSize={6}
              gapSize={12}
            />
          </div>
        </section>

        {/* WORLD MAP */}
        <section className="bg-white py-24 relative overflow-hidden border-y border-border/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center mb-20">
                <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4">Global Reach</div>
                <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary leading-tight">
                  Empowering <span className="font-bold">250+ Brands</span> <span className="text-primary">Worldwide</span>
                </h2>
              </div>
            </FadeIn>
            <WorldMap 
              lineColor="#f89b34"
              dots={[
                { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 40.7128, lng: -74.0060, label: "New York" } },
                { start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" }, end: { lat: 51.5074, lng: -0.1278, label: "London" } },
                { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 25.2048, lng: 55.2708, label: "Dubai" } },
              ]}
            />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-[#FAFAF8] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-sora font-light text-secondary">
                  Latest from <span className="text-primary font-bold italic">Our Partners</span>
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 italic">Client Voices</p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-[500px] items-start">
              <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={15} className="hidden lg:block" />
              <TestimonialsColumn testimonials={testimonials.slice(2, 4)} duration={18} />
              <TestimonialsColumn testimonials={testimonials.slice(4, 6)} duration={16} className="hidden md:block" />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary">
                  <span className="text-primary font-bold italic">Get in touch</span> with us
                </h2>
                <p className="text-2xl text-secondary font-light mt-2 italic">
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
                <textarea className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal resize-none" rows={4} placeholder="How can we help you dominate your industry?" />
                <button className="bg-primary hover:bg-primary/90 text-secondary w-full py-6 rounded-full font-black uppercase tracking-[6px] text-sm transition-all shadow-xl shadow-primary/20">
                  INITIATE GROWTH
                </button>
              </form>

              <div className="bg-secondary p-16 rounded-[40px] text-white shadow-2xl">
                <div className="space-y-12">
                  <div>
                    <div className="text-primary text-5xl font-sora font-black mb-3 italic">+91 9033131093</div>
                    <p className="text-white/40 text-[10px] font-bold tracking-[4px] uppercase">Available 10:00 – 18:00 IST</p>
                  </div>
                  <div className="space-y-8">
                    <div className="group">
                      <h4 className="text-primary font-black uppercase tracking-[4px] text-[10px] mb-3">HQ Locations</h4>
                      <p className="text-xl font-sora font-bold">Ahmedabad • Surat • Vadodara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* FOOTER */}
      <footer className="bg-[#050B14] text-white pt-24 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="flex items-center justify-center gap-4 group mb-12">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-black text-2xl text-secondary transition-transform group-hover:rotate-12">S</div>
            <span className="text-2xl font-sora font-black tracking-tight uppercase">Shyama Overseas</span>
          </Link>
          <p className="text-white/40 text-sm italic mb-12 max-w-xl mx-auto">
            Empowering Indian brands to transcend borders through strategic digital excellence.
          </p>
          <div className="pt-12 border-t border-white/5 text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2005–2025 Shyama Overseas | India's Gateway to Global Trade
          </div>
        </div>
      </footer>

    </div>
  );
}