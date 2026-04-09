
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { LogoCloud } from "@/components/LogoCloud";
import { Footer } from "@/components/Footer";
import InteractiveBentoGallery, { type MediaItemType } from "@/components/InteractiveBentoGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WorldMap } from "@/components/WorldMap";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Phone, MapPin, ArrowRight } from "lucide-react";

/* ── DATA ── */
const heroContent = [
  {
    video: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(8).mp4",
    title: "Cinematic Milk Splash Commercial",
    desc: "High-speed fluid simulation and photorealistic lighting for premium dairy brand storytelling."
  },
  {
    video: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(7).mp4",
    title: "Analytics Visualization",
    desc: "From complex logistics to successful global partnerships, we visualize the entire business ecosystem."
  },
  {
    video: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(5).mp4",
    title: "Gourmet Burger Experience",
    desc: "High-impact restaurant advertisement showcasing photorealistic food textures and cinematic motion."
  },
  {
    video: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(6).mp4",
    title: "Luxury Chocolate Simulation",
    desc: "Silky chocolate textures and fluid dynamics for high-end confectionery and premium brand experiences."
  },
  {
    video: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(4).mp4",
    title: "Galaxy Ice Cream Evolution",
    desc: "Surreal AI-generated animation of gourmet ice cream evolving amidst a cosmic galaxy of stars."
  },
  {
    video: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(3).mp4",
    title: "Cyberpunk Footwear Cinematics",
    desc: "High-impact product showcase for luxury footwear, featuring dynamic lighting and hyper-realistic textures."
  }
];

const testimonials = [
  {
    text: "Shyama Overseas transformed our digital presence. Their attention to detail in performance marketing is truly unmatched. They helped us scale from Idea to Vision.",
    name: "Arjun Mehta",
    role: "Founder, Innovate Tech",
    image: "https://picsum.photos/seed/arjun/100/100",
    date: "2 days ago"
  },
  {
    text: "The digital growth solutions provided by the team helped us reach 40+ global markets. Their expertise in customer acquisition and ad-tech is phenomenal.",
    name: "Priya Sharma",
    role: "Marketing Head, Ethos D2C",
    image: "https://picsum.photos/seed/priya/100/100",
    date: "1 week ago"
  },
  {
    text: "Reliable, creative, and fast. They are the perfect partner for scaling any digital business. Their in-house studio handled everything perfectly.",
    name: "Vikram Goel",
    role: "CEO, Goel Enterprises",
    image: "https://picsum.photos/seed/vikram/100/100",
    date: "3 days ago"
  },
  {
    text: "From branding to performance marketing, they handle it all with absolute professionalism and deep insight into the digital landscape.",
    name: "Sanjay Gupta",
    role: "Growth Director, Bharat Brand",
    image: "https://picsum.photos/seed/sanjay/100/100",
    date: "5 days ago"
  }
];

const GALLERY_ITEMS: MediaItemType[] = [
  { id: 1, type: 'image', title: 'Healthcare Marketing', desc: 'Patient Acquisition & Clinic Growth Strategy', url: '/assets/images/_extra____Indian_private_202603201015.png', span: 'col-span-2 md:col-span-2 md:row-span-2' },
  { id: 2, type: 'image', title: 'Brand Experience Marketing', desc: 'Creating Engaging Customer Experiences That Drive Loyalty', url: '/assets/images/_extra____upper_middle_202603191201 - Copy.png', span: 'col-span-1 md:col-span-1 md:row-span-1' },
  { id: 3, type: 'image', title: 'Food & Restaurant Marketing', desc: 'Professional Food Photography for Brand Promotion', url: '/assets/images/imagecolur.png', span: 'col-span-1 md:col-span-1 md:row-span-1' },
  { id: 4, type: 'image', title: 'Commercial Content Production', desc: 'Professional Shoots for Brand Promotion & Marketing Campaigns', url: '/assets/images/imagesloyred.png', span: 'col-span-1 md:col-span-1 md:row-span-1' },
  { id: 5, type: 'image', title: 'Social Impact', desc: 'Viral Campaigns with Massive Reach', url: '/assets/images/nyf.png', span: 'col-span-1 md:col-span-1 md:row-span-2' },
  { id: 6, type: 'image', title: 'Jewelry Product Marketing', desc: 'Professional Product Shoot for High-End Branding', url: '/assets/images/niraj.png', span: 'col-span-2 md:col-span-2 md:row-span-1' },
];

const mapDots = [
  {
    start: { lat: 23.0225, lng: 72.5714, label: "Ahmedabad" },
    end: { lat: 40.7128, lng: -74.0060, label: "New York City (NYC)" },
  },
  {
    start: { lat: 23.0225, lng: 72.5714, label: "Ahmedabad" },
    end: { lat: -33.8688, lng: 151.2093, label: "Australia" },
  },
  {
    start: { lat: 23.0225, lng: 72.5714, label: "Ahmedabad" },
    end: { lat: 52.5200, lng: 13.4050, label: "Germany" },
  },
  {
    start: { lat: 23.0225, lng: 72.5714, label: "Ahmedabad" },
    end: { lat: 35.6762, lng: 139.6503, label: "Japan" },
  },
  {
    start: { lat: 23.0225, lng: 72.5714, label: "Ahmedabad" },
    end: { lat: 10.8231, lng: 106.6297, label: "Vietnam" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
    end: { lat: 23.0225, lng: 72.5714 },
  },
  {
    start: { lat: 21.1702, lng: 72.8311, label: "Surat" },
    end: { lat: 23.0225, lng: 72.5714 },
  },
  {
    start: { lat: 22.5726, lng: 88.3639, label: "West Bengal" },
    end: { lat: 23.0225, lng: 72.5714 },
  },
];

/* ── COMPONENTS ── */

const TestimonialCard = ({ text, name, role, date }: { text: string; name: string; role: string; date: string }) => {
  return (
    <div className="flex flex-col justify-between bg-white p-5 md:p-6 w-[240px] md:w-[300px] rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all flex-shrink-0 whitespace-normal">
      <div>
        <div className="flex gap-0.5 text-[#eecb08] mb-3 md:mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 md:w-4 h-4">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="infos">
          <p className="text-primary text-[9px] font-bold uppercase tracking-widest mb-1.5">
            {date}
          </p>
          <p className="text-secondary/70 text-[13px] leading-relaxed italic">
            "{text}"
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-6 pt-3 md:pt-4 border-t border-border/10">
        <div className="text-secondary font-bold text-[13px]">
          — {name}
        </div>
        <div className="text-primary font-bold text-[9px] uppercase tracking-widest mt-0.5">
          {role}
        </div>
      </div>
    </div>
  );
};

function FadeIn({ children, shadow = false, delay = 0, className = "" }: { children: React.ReactNode; shadow?: boolean; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn(shadow && "relative z-10", className)}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppChat = () => {
    const text = `Hi, I'm ${formState.name}. I'm interested in digital growth. My email is ${formState.email}. Message: ${formState.message}`;
    window.open(`https://wa.me/918918348537?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-body">
      
      <Navbar />

      <main>
        
        {/* HERO SECTION - VIDEO CAROUSEL */}
        <section className="relative aspect-[2/1] md:h-[85vh] mt-16 md:mt-20 flex items-center overflow-hidden bg-[#0a0a0a] w-full">
          {/* Subtle Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
          
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.video
                key={heroContent[currentVideo].video}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                src={heroContent[currentVideo].video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain md:object-cover object-center"
              />
            </AnimatePresence>
          </div>

          {/* Text Overlays */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 z-20 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[9px] md:text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                    Creative AI Production
                  </span>
                </div>
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-sora font-black text-white leading-[1.1] uppercase tracking-tighter mb-4 drop-shadow-2xl">
                  {heroContent[currentVideo].title.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? "text-primary italic" : ""}>{word} </span>
                  ))}
                </h1>
                <p className="text-sm md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl border-l-4 border-primary pl-6 italic drop-shadow-lg">
                  {heroContent[currentVideo].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 md:py-5 overflow-hidden z-30 shadow-[0_-10px_30px_rgba(248,155,52,0.3)]">
            <div className="flex gap-10 md:gap-16 w-max animate-marquee-slow items-center">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-secondary font-black text-xs md:text-3xl uppercase tracking-[4px] md:tracking-[10px] whitespace-nowrap">
                  PERFORMANCE MARKETING • DIGITAL DOMINANCE • CREATIVE EXCELLENCE • 
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LOGO CLOUD - STRATEGIC NETWORK */}
        <section className="py-16 md:py-24 bg-white border-b border-border/10 relative overflow-hidden">
          <div
            aria-hidden="true"
            className={cn(
              "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
              "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04),transparent_50%)]",
              "blur-[30px]"
            )}
          />

          <div className="relative mx-auto max-w-3xl px-6">
            <FadeIn shadow>
              <h2 className="mb-5 text-center font-medium text-secondary text-lg tracking-tight md:text-3xl">
                <span className="text-muted-foreground">Trusted by experts.</span>
                <br />
                <span className="font-semibold text-secondary">Used by the leaders.</span>
              </h2>
              <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

              <LogoCloud />

              <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
              <p className="text-center text-primary font-bold uppercase tracking-widest text-[8px] md:text-[10px] mt-8 italic">Our Strategic Network</p>
            </FadeIn>
          </div>
        </section>

        {/* BENTO GALLERY */}
        <section className="py-16 md:py-24 bg-white border-b border-border/10 overflow-hidden">
          <InteractiveBentoGallery 
            mediaItems={GALLERY_ITEMS} 
            title="Our Creative Showcase" 
            description="A Visual Journey Through Our Digital Success"
          />
        </section>

        {/* GLOBAL REACH SECTION */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden border-b border-border/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center mb-12 md:mb-20">
                <div className="text-primary font-bold uppercase tracking-[4px] text-[10px] md:text-xs mb-4">Global Reach</div>
                <h2 className="text-2xl md:text-5xl font-sora font-light text-secondary leading-tight mb-8 md:mb-12">
                  Empowering <span className="font-bold">150+ Brands</span> <span className="text-primary">Worldwide</span>
                </h2>
                <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl">
                  <WorldMap dots={mapDots} />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12 md:py-16 bg-[#FAFAF8] overflow-hidden border-b border-border/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-sora font-light text-secondary">
                  Latest from <span className="text-primary font-bold italic">Our Partners</span>
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest text-[8px] md:text-[9px] mt-2 italic">Growth Stories</p>
              </div>
            </FadeIn>
          </div>

          <div className="flex w-full overflow-hidden group py-4 md:py-6">
            <div className="flex gap-4 md:gap-5 animate-marquee-slow hover:[animation-play-state:paused] whitespace-nowrap">
              {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard 
                  key={i}
                  text={t.text}
                  name={t.name}
                  role={t.role}
                  date={t.date}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-12 md:mb-16">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-8 md:w-12 bg-primary rounded-full" />
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">Contact Us</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-sora font-black text-secondary leading-tight tracking-tighter uppercase mb-2">
                  Get in touch <span className="text-primary italic font-light">with us</span>
                </h2>
                <p className="text-base md:text-xl text-muted-foreground font-light max-w-2xl">
                  Let's craft your digital legacy. Our strategists are ready to scale your brand globally.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Form Side */}
              <div className="lg:col-span-7 space-y-6 md:space-y-10">
                <FadeIn delay={0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Full Name</label>
                      <input 
                        className="w-full bg-[#FAFAF8] border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary font-bold placeholder:font-normal text-sm" 
                        placeholder="John Doe" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Email Address</label>
                      <input 
                        className="w-full bg-[#FAFAF8] border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary font-bold placeholder:font-normal text-sm" 
                        placeholder="john@example.com" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-6 md:mt-8">
                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Project Details</label>
                    <textarea 
                      className="w-full bg-[#FAFAF8] border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary font-bold placeholder:font-normal resize-none text-sm" 
                      rows={5} 
                      placeholder="Tell us about your digital goals and how we can help you dominate your industry..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
                    <Button 
                      className="h-14 md:h-16 px-8 md:px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-xl shadow-primary/20 transition-all active:scale-[0.98] group flex-1 sm:flex-none"
                      onClick={handleWhatsAppChat}
                    >
                      Send via WhatsApp
                      <MessageCircle className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="h-14 md:h-16 px-8 md:px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs border-secondary/20 hover:bg-secondary hover:text-white transition-all flex-1 sm:flex-none"
                    >
                      Traditional Email
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* Info Side */}
              <div className="lg:col-span-5">
                <FadeIn delay={0.2}>
                  <div className="bg-secondary rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    
                    <div className="relative z-10 space-y-8 md:space-y-12">
                      <div>
                        <span className="text-primary font-black uppercase tracking-widest text-[9px] md:text-[10px] block mb-4">Direct Access</span>
                        <a href="tel:+918918348537" className="text-2xl md:text-4xl font-sora font-black hover:text-primary transition-colors block leading-tight tracking-tighter italic">
                          +91 89183 48537
                        </a>
                        <p className="text-white/40 text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase mt-2">Available 10:00 – 18:00 IST</p>
                      </div>

                      <div className="space-y-6 md:space-y-8">
                        <div className="flex gap-4 md:gap-5 group">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-primary font-black uppercase tracking-widest text-[9px] md:text-[10px] mb-2">Strategy Hubs</h4>
                            <p className="text-base md:text-lg font-sora font-bold leading-tight">Ahmedabad • Surat • Mumbai</p>
                            <p className="text-white/40 text-[10px] md:text-[11px] mt-1 italic">India Headquarters</p>
                          </div>
                        </div>

                        <div className="flex gap-4 md:gap-5 group">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-primary font-black uppercase tracking-widest text-[9px] md:text-[10px] mb-2">Regional Offices</h4>
                            <p className="text-base md:text-lg font-sora font-bold leading-tight">Bangalore • Pune • Delhi</p>
                            <p className="text-white/40 text-[10px] md:text-[11px] mt-1 italic">Growth Network</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 md:pt-8 border-t border-white/10">
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-secondary overflow-hidden bg-white/10">
                                <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Agent" className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                          <p className="text-[10px] md:text-xs text-white/60 font-medium">
                            Strategists online now
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

    </div>
  );
}
