"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, PlayCircle } from "lucide-react";
import { useFirestore } from "@/firebase/provider";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";

/* ── PERFORMANCE OPTIMIZATION: DYNAMIC IMPORTS ── */
const LogoCloud = dynamic(() => import("@/components/LogoCloud").then(mod => mod.LogoCloud), { 
  ssr: false,
  loading: () => <div className="h-32 w-full bg-gray-50 animate-pulse rounded-2xl" />
});
const InteractiveBentoGallery = dynamic(() => import("@/components/InteractiveBentoGallery"), { 
  ssr: false,
  loading: () => <div className="h-96 w-full bg-gray-50 animate-pulse rounded-2xl" />
});
const WorldMap = dynamic(() => import("@/components/WorldMap").then(mod => mod.WorldMap), { 
  ssr: false,
  loading: () => <div className="aspect-[2/1] w-full bg-gray-50 animate-pulse rounded-2xl" />
});
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer), { ssr: true });

/* ── FALLBACK/SEED DATA ── */
const DEFAULT_HERO_CONTENT = [
  {
    videoUrl: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(8).mp4",
    title: "Cinematic Milk Splash Commercial",
    description: "High-speed fluid simulation and photorealistic lighting for premium dairy brand storytelling.",
    ctaText: "Start Growth Chat",
    isEnabled: true,
    order: 0
  },
  {
    videoUrl: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(7).mp4",
    title: "Analytics Visualization",
    description: "From complex logistics to successful global partnerships, we visualize the entire business ecosystem.",
    ctaText: "Explore Results",
    isEnabled: true,
    order: 1
  }
];

const GALLERY_ITEMS = [
  { id: 1, type: 'image', title: 'Healthcare Marketing', desc: 'Patient Acquisition & Clinic Growth Strategy', url: '/assets/images/_extra____Indian_private_202603201015.png', span: 'col-span-2 md:col-span-2 md:row-span-2' },
  { id: 2, type: 'image', title: 'Brand Experience', desc: 'Creating Engaging Customer Experiences', url: '/assets/images/_extra____upper_middle_202603191201 - Copy.png', span: 'col-span-1 md:col-span-1 md:row-span-1' },
  { id: 3, type: 'image', title: 'Food Marketing', desc: 'Professional Food Photography', url: '/assets/images/imagecolur.png', span: 'col-span-1 md:col-span-1 md:row-span-1' },
];

const mapDots = [
  { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 40.7128, lng: -74.0060, label: "New York City (NYC)" } },
  { start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" }, end: { lat: -33.8688, lng: 151.2093, label: "Australia" } },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const [banners, setBanners] = useState<any[]>(DEFAULT_HERO_CONTENT);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const firestore = useFirestore();

  useEffect(() => {
    if (!firestore) return;
    const q = query(collection(firestore, "banners"), where("isEnabled", "==", true), orderBy("order", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveBanners = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (liveBanners.length > 0) {
        setBanners(liveBanners);
      }
    });
    return () => unsubscribe();
  }, [firestore]);

  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners]);

  const handleWhatsAppChat = () => {
    const text = `Hi, I'm ${formState.name}. I'm interested in digital growth. Message: ${formState.message}`;
    window.open(`https://wa.me/918918348537?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-body">
      <Navbar />

      <main>
        {/* HERO SECTION - DYNAMIC DATA FROM FIRESTORE */}
        <section className="relative aspect-video md:h-[90vh] mt-16 md:mt-20 flex items-center overflow-hidden bg-black w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />
          
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.video
                key={banners[currentVideo]?.videoUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src={banners[currentVideo]?.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 z-20 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
              >
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                    Live Strategic Production
                  </span>
                </div>
                <h1 className="text-3xl md:text-7xl font-sora font-black text-white leading-tight uppercase tracking-tighter mb-4 drop-shadow-2xl">
                  {banners[currentVideo]?.title}
                </h1>
                <p className="text-sm md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl border-l-4 border-primary pl-8 italic drop-shadow-lg">
                  {banners[currentVideo]?.description}
                </p>
                <div className="mt-10 flex gap-4 pointer-events-auto">
                   <Button onClick={handleWhatsAppChat} size="lg" className="rounded-full h-14 px-10 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/30">
                     {banners[currentVideo]?.ctaText || 'Start Growth Chat'}
                   </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-primary py-4 overflow-hidden z-30 shadow-2xl">
            <div className="flex gap-16 w-max animate-marquee-slow items-center">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-secondary font-black text-2xl uppercase tracking-[10px] whitespace-nowrap">
                  PERFORMANCE MARKETING • DIGITAL DOMINANCE • CREATIVE EXCELLENCE • 
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LOGO CLOUD - PERFORMANCE OPTIMIZED */}
        <section className="py-12 md:py-20 bg-white border-b border-border/10">
          <div className="mx-auto max-w-4xl px-6">
            <FadeIn>
              <h2 className="mb-10 text-center font-medium text-secondary text-2xl tracking-tight">
                <span className="text-muted-foreground">Trusted by global experts.</span><br />
                <span className="font-semibold">Used by industry leaders.</span>
              </h2>
              <Suspense fallback={<div className="h-24 w-full bg-gray-50 animate-pulse" />}>
                <LogoCloud />
              </Suspense>
            </FadeIn>
          </div>
        </section>

        {/* BENTO GALLERY - PERFORMANCE OPTIMIZED */}
        <section className="py-12 md:py-24 bg-white border-b border-border/10">
          <Suspense fallback={<div className="h-96 w-full animate-pulse bg-gray-50" />}>
            <InteractiveBentoGallery 
              mediaItems={GALLERY_ITEMS} 
              title="Creative Production Showcase" 
              description="A Visual Journey Through Our Digital Success"
            />
          </Suspense>
        </section>

        {/* GLOBAL REACH - PERFORMANCE OPTIMIZED */}
        <section className="bg-[#FAFAF8] py-16 md:py-32 relative overflow-hidden border-b border-border/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="text-primary font-bold uppercase tracking-[6px] text-xs mb-4">Strategic Footprint</div>
                <h2 className="text-4xl md:text-6xl font-sora font-light text-secondary leading-tight mb-10">
                  Dominating <span className="font-bold">80+ Markets</span> <span className="text-primary">Globally</span>
                </h2>
                <div className="max-w-5xl mx-auto overflow-hidden rounded-[40px] shadow-2xl border-4 border-white bg-white p-2">
                  <Suspense fallback={<div className="aspect-[2/1] w-full bg-gray-100" />}>
                    <WorldMap dots={mapDots} />
                  </Suspense>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 md:py-32 bg-white relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Let's Talk</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-sora font-black text-secondary leading-tight tracking-tighter uppercase mb-8">
                    Ready to <span className="text-primary italic font-light">Dominate</span> Your Industry?
                  </h2>
                  <div className="space-y-6">
                    <input className="w-full bg-[#FAFAF8] border border-border/50 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-primary/20 transition-all text-sm font-bold" placeholder="Full Name" onChange={e => setFormState({...formState, name: e.target.value})} />
                    <input className="w-full bg-[#FAFAF8] border border-border/50 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-primary/20 transition-all text-sm font-bold" placeholder="Business Email" onChange={e => setFormState({...formState, email: e.target.value})} />
                    <textarea className="w-full bg-[#FAFAF8] border border-border/50 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-primary/20 transition-all text-sm font-bold h-40 resize-none" placeholder="Your Growth Goals" onChange={e => setFormState({...formState, message: e.target.value})} />
                    <Button onClick={handleWhatsAppChat} className="w-full h-16 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/20 transition-all active:scale-[0.98]">
                      Initiate Strategy Session <MessageCircle className="ml-3 w-5 h-5" />
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <div className="lg:col-span-5 bg-secondary rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="relative z-10 space-y-12">
                   <div>
                     <p className="text-primary font-black uppercase tracking-widest text-[10px] mb-4">Direct Access</p>
                     <p className="text-4xl font-sora font-black italic">+91 89183 48537</p>
                   </div>
                   <div className="space-y-8">
                      <div className="flex gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10"><PlayCircle className="text-primary w-6 h-6" /></div>
                        <div><p className="font-bold text-lg">Strategy Hubs</p><p className="text-white/40 text-sm italic">Mumbai • Hyderabad • Kolkata</p></div>
                      </div>
                      <div className="flex gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10"><Send className="text-primary w-6 h-6" /></div>
                        <div><p className="font-bold text-lg">Official Reach</p><p className="text-white/40 text-sm italic">info@shyamaoverseas.com</p></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Suspense fallback={<div className="h-64 w-full bg-secondary" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
