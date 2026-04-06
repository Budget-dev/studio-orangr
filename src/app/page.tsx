
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { LogoCloud } from "@/components/LogoCloud";
import { Footer } from "@/components/Footer";
import InteractiveBentoGallery, { type MediaItemType } from "@/components/InteractiveBentoGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ── DATA ── */
const testimonials = [
  {
    text: "Shyama Overseas transformed our digital presence. Their attention to detail in performance marketing is truly unmatched. They helped us scale from Idea to Vision.",
    name: "Arjun Mehta",
    role: "Founder, Innovate Tech",
    image: "https://picsum.photos/seed/arjun/100/100"
  },
  {
    text: "The digital growth solutions provided by the team helped us reach 40+ global markets. Their expertise in customer acquisition and ad-tech is phenomenal.",
    name: "Priya Sharma",
    role: "Marketing Head, Ethos D2C",
    image: "https://picsum.photos/seed/priya/100/100"
  },
  {
    text: "Reliable, creative, and fast. They are the perfect partner for scaling any digital business. Their in-house studio handled everything perfectly.",
    name: "Vikram Goel",
    role: "CEO, Goel Enterprises",
    image: "https://picsum.photos/seed/vikram/100/100"
  },
  {
    text: "From branding to performance marketing, they handle it all with absolute professionalism and deep insight into the digital landscape.",
    name: "Sanjay Gupta",
    role: "Growth Director, Bharat Brand",
    image: "https://picsum.photos/seed/sanjay/100/100"
  }
];

const GALLERY_ITEMS: MediaItemType[] = [
  { id: 1, type: 'image', title: 'Performance Marketing', desc: 'Full-Funnel Campaign Strategy & Execution', url: '/assets/images/_extra____Indian_private_202603201015.png', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, type: 'image', title: 'Brand Identity', desc: 'Creative Branding for Global Tech Leaders', url: '/assets/images/_extra____upper_middle_202603191201 - Copy.png', span: 'md:col-span-1 md:row-span-1' },
  { id: 3, type: 'image', title: 'Digital Strategy', desc: 'Data-Driven Insights for Market Entry', url: '/assets/images/imagecolur.png', span: 'md:col-span-1 md:row-span-1' },
  { id: 4, type: 'image', title: 'E-Commerce Growth', desc: 'Scaling D2C Brands to 8-Figures', url: '/assets/images/imagesloyred.png', span: 'md:col-span-1 md:row-span-1' },
  { id: 5, type: 'image', title: 'Social Impact', desc: 'Viral Campaigns with Massive Reach', url: '/assets/images/nyf.png', span: 'md:col-span-1 md:row-span-2' },
  { id: 6, type: 'image', title: 'Conversion (CRO)', desc: 'Optimizing the User Journey for ROI', url: '/assets/images/niraj.png', span: 'md:col-span-2 md:row-span-1' },
];

const OPERATIONS_VIDEOS = [
  { id: 1, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.14%20PM.mp4", title: "Market Intelligence", subtitle: "Global Insights" },
  { id: 2, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.18%20PM%20(1).mp4", title: "Campaign Hub", subtitle: "Live Metrics" },
  { id: 3, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.18%20PM.mp4", title: "Growth Lab", subtitle: "Strategy Sync" },
  { id: 4, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.23%20PM%20(1).mp4", title: "Creative Studio", subtitle: "Visual Design" },
  { id: 5, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.23%20PM%20(2).mp4", title: "Operations", subtitle: "Scale Engine" },
  { id: 6, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.23%20PM%20(3).mp4", title: "Performance", subtitle: "Ad-Tech Ops" },
  { id: 7, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.23%20PM.mp4", title: "Data Center", subtitle: "Real-time Flow" },
  { id: 8, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.24%20PM%20(1).mp4", title: "Execution", subtitle: "Precision Delivery" },
  { id: 9, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.24%20PM%20(2).mp4", title: "Analytics", subtitle: "Core Reporting" },
  { id: 10, src: "/assets/videos/WhatsApp%20Video%202026-03-19%20at%2012.41.24%20PM%20(3).mp4", title: "Optimization", subtitle: "Alpha Testing" },
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
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 md:p-10 rounded-3xl border border-border/50 shadow-lg shadow-primary/10 max-w-xs w-full bg-white" key={i}>
                  <div className="text-secondary font-medium italic text-sm">"{text}"</div>
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

function FadeIn({ children, shadow = false, delay = 0 }: { children: React.ReactNode; shadow?: boolean; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn(shadow && "relative z-10")}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-body">
      
      <Navbar />

      <main>
        
        {/* HERO SECTION */}
        <section className="relative h-[80vh] mt-[85px] md:mt-[100px] flex items-center overflow-hidden bg-secondary w-full shadow-2xl">
          <Image 
            src="https://1234567890.sirv.com/ChatGPT%20Image%20Mar%2030%2C%202026%2C%2003_05_25%20PM.png" 
            alt="Shyama Overseas Banner" 
            fill 
            className="object-cover object-center"
            priority
            unoptimized
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-primary py-4 md:py-5 overflow-hidden z-30 shadow-[0_-10px_30px_rgba(248,155,52,0.3)]">
            <div className="flex gap-16 w-max animate-marquee-slow items-center">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-secondary font-black text-xl md:text-3xl uppercase tracking-[10px] whitespace-nowrap">
                  PERFORMANCE MARKETING • DIGITAL DOMINANCE • CREATIVE EXCELLENCE • 
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LOGO CLOUD - STRATEGIC NETWORK */}
        <section className="py-24 bg-white border-b border-border/10 relative overflow-hidden">
          <div
            aria-hidden="true"
            className={cn(
              "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
              "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04),transparent_50%)]",
              "blur-[30px]"
            )}
          />

          <div className="relative mx-auto max-w-3xl px-6">
            <FadeIn>
              <h2 className="mb-5 text-center font-medium text-secondary text-xl tracking-tight md:text-3xl">
                <span className="text-muted-foreground">Trusted by experts.</span>
                <br />
                <span className="font-semibold text-secondary">Used by the leaders.</span>
              </h2>
              <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

              <LogoCloud />

              <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
              <p className="text-center text-primary font-bold uppercase tracking-widest text-[10px] mt-8 italic">Our Strategic Network</p>
            </FadeIn>
          </div>
        </section>

        {/* BENTO GALLERY */}
        <section className="py-16 md:py-24 bg-white border-b border-border/10">
          <InteractiveBentoGallery 
            mediaItems={GALLERY_ITEMS} 
            title="Our Creative Showcase" 
            description="A Visual Journey Through Our Digital Success"
          />
        </section>

        {/* OPERATIONS SECTION */}
        <section className="py-16 md:py-24 bg-[#FAFAF8] overflow-hidden border-b border-border/10">
          <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
            <FadeIn>
              <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-6 font-sora">Operations</div>
              <h2 className="text-3xl md:text-5xl font-sora font-light text-secondary mb-8 leading-tight">
                Growth <span className="text-primary font-bold italic">Dashboard</span> & Operations
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic max-w-3xl">
                Real-time execution across strategy, creative, and ad-tech. We manage everything in-house for complete accountability and performance control.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative group">
            <Carousel 
              className="w-full" 
              opts={{ 
                loop: true,
                align: "start",
              }}
            >
              <CarouselContent>
                {OPERATIONS_VIDEOS.map((video) => (
                  <CarouselItem key={video.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-black group/video">
                      <video 
                        src={video.src} 
                        className="w-full h-full object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-primary font-bold uppercase tracking-widest text-[8px] mb-1">{video.title}</div>
                        <h3 className="text-sm font-black uppercase tracking-tight">{video.subtitle}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2">
                <CarouselPrevious className="relative left-0 bg-white shadow-xl hover:bg-primary border-none text-secondary" />
              </div>
              <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2">
                <CarouselNext className="relative right-0 bg-white shadow-xl hover:bg-primary border-none text-secondary" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* GLOBAL REACH SECTION */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden border-b border-border/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center mb-12 md:mb-20">
                <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4">Global Reach</div>
                <h2 className="text-3xl md:text-5xl font-sora font-light text-secondary leading-tight mb-12">
                  Empowering <span className="font-bold">150+ Brands</span> <span className="text-primary">Worldwide</span>
                </h2>
                <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                  <img 
                    src="https://1234567890.sirv.com/ChatGPT%20Image%20Apr%205%2C%202026%2C%2001_42_40%20PM.png"
                    alt="Shyama Overseas Global Network"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 md:py-24 bg-[#FAFAF8] overflow-hidden border-b border-border/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-sora font-light text-secondary">
                  Latest from <span className="text-primary font-bold italic">Our Partners</span>
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 italic">Growth Stories</p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 h-auto lg:h-[550px] items-start">
              <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={20} className="hidden lg:block" />
              <TestimonialsColumn testimonials={testimonials.slice(2, 4)} duration={25} className="flex flex-col items-center" />
              <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={22} className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 md:mb-16">
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-sora font-light text-secondary">
                  <span className="text-primary font-bold italic">Get in touch</span> with us
                </h2>
                <p className="text-xl md:text-2xl text-secondary font-light mt-2 italic font-sora">
                  Let's craft your digital legacy.
                </p>
              </FadeIn>
            </div>

            <div className="grid lg:grid-cols-[1fr_450px] gap-12 md:gap-20 items-start">
              <div className="space-y-8 md:space-y-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                  <input className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal font-inter text-sm md:text-base" placeholder="Full Name" />
                  <input className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal font-inter text-sm md:text-base" placeholder="Email Address" />
                </div>
                <textarea className="w-full bg-transparent border-b-2 border-secondary/20 py-4 focus:outline-none focus:border-primary transition-colors text-secondary font-bold placeholder:font-normal resize-none font-inter text-sm md:text-base" rows={4} placeholder="How can we help you dominate your industry?" />
                <div className="flex justify-center md:justify-start">
                  <WhatsAppButton className="w-full h-16 hover:w-[220px]" />
                </div>
              </div>

              <div className="bg-secondary p-10 md:p-16 rounded-[30px] md:rounded-[40px] text-white shadow-2xl">
                <div className="space-y-10 md:space-y-12">
                  <div>
                    <div className="text-primary text-3xl md:text-5xl font-sora font-black mb-3 italic">+91 89183 48537</div>
                    <p className="text-white/40 text-[10px] font-bold tracking-[4px] uppercase">Available 10:00 – 18:00 IST</p>
                  </div>
                  <div className="space-y-6 md:space-y-8">
                    <div className="group">
                      <h4 className="text-primary font-black uppercase tracking-[4px] text-[10px] mb-3">HQ Locations</h4>
                      <p className="text-lg md:text-xl font-sora font-bold">Ahmedabad • Surat • Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

    </div>
  );
}
