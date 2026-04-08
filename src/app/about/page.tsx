
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Shield, Zap, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">
      <Navbar />
      <main className="animate-in fade-in duration-500 pt-[64px] md:pt-[85px]">
        {/* Page Hero */}
        <section className="bg-[#0a0a0a] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] social-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6">
            <div className="text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-[4px] mb-6">Who We Are</div>
            <h1 className="text-3xl md:text-6xl text-white font-black leading-tight mb-8">
              Our Story of <span className="text-primary italic font-light">Digital Growth</span>
            </h1>
            <div className="flex items-center gap-3 text-white/40 text-[10px] md:text-[12px] font-bold uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">About Us</span>
            </div>
          </div>
        </section>

        {/* Founder / Visionary Highlight Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1080px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-24 items-center">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border-2 border-primary/20 shadow-2xl bg-secondary">
                <img
                  src="https://1234567890.sirv.com/WhatsApp%20Image%202024-07-13%20at%2007.00.32_cb353d13.jpg%20(1).jpeg"
                  alt="Chairman Adarsha Banerjee"
                  className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80" />
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                  <div className="flex items-center gap-3 text-primary mb-3">
                    <Award className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-black text-[9px] md:text-[11px] uppercase tracking-[4px]">Chairman</span>
                  </div>
                  <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">Adarsha Banerjee</h3>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-[10px] md:text-xs font-black text-primary mb-6 uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-6 md:w-10 h-px bg-primary" /> THE DRIVING FORCE
              </div>
              <h2 className="text-3xl md:text-5xl font-normal text-secondary leading-[1.1] mb-8 md:mb-10">
                Pioneering <span className="text-primary italic font-bold underline decoration-primary/20 underline-offset-8">Results</span> in the Digital Era
              </h2>
              <div className="space-y-6 md:space-y-8 text-secondary/70 leading-relaxed text-base md:text-[18px]">
                <p className="italic font-light border-l-4 border-primary pl-6 md:pl-8 text-secondary/90 text-lg md:text-xl py-2">
                  "Digital marketing isn't just about clicks; it's about building trust at scale. We bridge the gap between human desire and brand solutions through data-led storytelling."
                </p>
                <p className="text-secondary/60">
                  Under the strategic leadership of our Chairman, Shyama Overseas has evolved from a local consultancy into a global growth engine. With over 5 years of mastery in performance marketing, he has steered the agency to manage substantial growth for clients worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-10 md:mt-12 pt-10 md:pt-12 border-t border-secondary/10">
                <div>
                  <div className="text-primary font-black text-3xl md:text-4xl mb-1 tracking-tighter">5+</div>
                  <div className="text-[9px] md:text-[10px] text-secondary/40 font-bold uppercase tracking-[2px]">Years Experience</div>
                </div>
                <div>
                  <div className="text-primary font-black text-3xl md:text-4xl mb-1 tracking-tighter">80+</div>
                  <div className="text-[9px] md:text-[10px] text-secondary/40 font-bold uppercase tracking-[2px]">Brands Scaled</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Journey Info */}
        <section className="py-16 md:py-24 bg-[#fdf6f2]">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
              <div>
                <div className="text-[10px] md:text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">_ OUR LEGACY</div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 leading-tight">Rooted in Strategy, <br /><span className="text-primary italic">Reaching the World</span></h2>
                <div className="space-y-4 md:space-y-6 text-secondary/60 leading-relaxed text-sm md:text-base">
                  <p>Founded with a vision to revolutionize the way brands connect with global audiences, Shyama Overseas started with a focus on data and creative excellence. From our beginnings, we've grown into a powerhouse of digital strategy and creative technology.</p>
                  <p>Today, we handle a massive portfolio of campaigns across E-Commerce, Tech, and Lifestyle sectors, supported by our in-house network of creative experts and data analysts.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[["40+", "Markets"], ["10M+", "Daily Reach"]].map(([n, l]) => (
                  <div key={l} className="bg-white p-8 md:p-10 rounded-3xl text-center shadow-sm border border-primary/10">
                    <div className="text-secondary font-black text-3xl md:text-4xl mb-2 tracking-tighter">{n}</div>
                    <div className="text-[8px] md:text-[9px] text-primary font-bold uppercase tracking-widest">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="text-center mb-16 md:mb-20">
              <div className="text-[10px] md:text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">CORE VALUES</div>
              <h2 className="text-2xl md:text-4xl font-normal text-secondary">What Sustains <span className="text-primary font-bold italic">Our Excellence</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Shield, t: "Radical Transparency", d: "Clear data and honest reporting are our non-negotiable standards for every campaign." },
                { icon: Zap, t: "Velocity & Scale", d: "We leverage proprietary ad-tech for the fastest growth and sustainable scaling." },
                { icon: Users, t: "Obsessive Focus", d: "Every strategic decision is filtered through the lens of long-term client growth." }
              ].map((v, i) => (
                <div key={i} className="bg-[#fafafa] p-8 md:p-12 rounded-[32px] border border-black/5 hover:border-primary/40 transition-all group">
                  <div className="w-12 h-12 md:w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-primary transition-all duration-500">
                    <v.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-secondary uppercase tracking-tight">{v.t}</h3>
                  <p className="text-sm text-secondary/50 leading-relaxed italic">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
