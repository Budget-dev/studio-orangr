"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Shield, Zap, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main className="animate-in fade-in duration-500 pt-[85px]">
        {/* Page Hero */}
        <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] social-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-6">Who We Are</div>
            <h1 className="text-4xl md:text-6xl text-white font-black leading-tight mb-8">
              Our Story of <span className="text-primary italic font-light">Digital Growth</span>
            </h1>
            <div className="flex items-center gap-3 text-white/40 text-[12px] font-bold uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">About Us</span>
            </div>
          </div>
        </section>

        {/* Founder / Visionary Highlight Section */}
        <section className="py-24">
          <div className="max-w-[1080px] mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 md:gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border-2 border-primary/20 shadow-2xl bg-secondary">
                <img
                  src="https://1234567890.sirv.com/WhatsApp%20Image%202024-07-13%20at%2007.00.32_cb353d13.jpg%20(1).jpeg"
                  alt="Agency Director of Shyama Overseas"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-3 text-primary mb-3">
                    <Award className="w-6 h-6" />
                    <span className="font-black text-[11px] uppercase tracking-[4px]">Agency Director</span>
                  </div>
                  <h3 className="text-white text-3xl font-black uppercase tracking-tighter">The Visionary Maestro</h3>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-xs font-black text-primary mb-6 uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-10 h-px bg-primary" /> THE DRIVING FORCE
              </div>
              <h2 className="text-4xl md:text-5xl font-normal text-secondary leading-[1.1] mb-10">
                Pioneering <span className="text-primary italic font-bold underline decoration-primary/20 underline-offset-8">Results</span> in the Digital Era
              </h2>
              <div className="space-y-8 text-secondary/70 leading-relaxed text-[18px]">
                <p className="italic font-light border-l-4 border-primary pl-8 text-secondary/90 text-xl py-2">
                  "Digital marketing isn't just about clicks; it's about building trust at scale. We bridge the gap between human desire and brand solutions through data-led storytelling."
                </p>
                <p className="text-secondary/60">
                  Under the strategic leadership of our director, Shyama Overseas has evolved from a local consultancy into a global growth engine. With nearly two decades of mastery in performance marketing, he has steered the agency to manage over ₹50Cr+ in revenue for clients worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-secondary/10">
                <div>
                  <div className="text-primary font-black text-4xl mb-1 tracking-tighter">19+</div>
                  <div className="text-[10px] text-secondary/40 font-bold uppercase tracking-[2px]">Years Experience</div>
                </div>
                <div>
                  <div className="text-primary font-black text-4xl mb-1 tracking-tighter">150+</div>
                  <div className="text-[10px] text-secondary/40 font-bold uppercase tracking-[2px]">Brands Scaled</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Journey Info */}
        <section className="py-24 bg-[#fdf6f2]">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">_ OUR LEGACY</div>
                <h2 className="text-3xl font-bold text-black mb-8 leading-tight">Rooted in Strategy, <br /><span className="text-primary italic">Reaching the World</span></h2>
                <div className="space-y-6 text-secondary/60 leading-relaxed">
                  <p>Founded in 2005, Shyama Overseas started with a vision to revolutionize the way brands connect with global audiences. From our beginnings in India, we've grown into a powerhouse of digital strategy and creative technology.</p>
                  <p>Today, we handle a massive portfolio of campaigns across E-Commerce, Tech, and Lifestyle sectors, supported by our in-house network of creative experts and data analysts.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[["40+", "Markets"], ["10M+", "Daily Reach"]].map(([n, l]) => (
                  <div key={l} className="bg-white p-10 rounded-3xl text-center shadow-sm border border-primary/10">
                    <div className="text-secondary font-black text-4xl mb-2 tracking-tighter">{n}</div>
                    <div className="text-[9px] text-primary font-bold uppercase tracking-widest">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="text-center mb-20">
              <div className="text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">CORE VALUES</div>
              <h2 className="text-3xl md:text-4xl font-normal text-secondary">What Sustains <span className="text-primary font-bold italic">Our Excellence</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, t: "Radical Transparency", d: "Clear data and honest reporting are our non-negotiable standards for every campaign." },
                { icon: Zap, t: "Velocity & Scale", d: "We leverage proprietary ad-tech for the fastest growth and sustainable scaling." },
                { icon: Users, t: "Obsessive Focus", d: "Every strategic decision is filtered through the lens of long-term client growth." }
              ].map((v, i) => (
                <div key={i} className="bg-[#fafafa] p-12 rounded-[32px] border border-black/5 hover:border-primary/40 transition-all group">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500">
                    <v.icon className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-secondary uppercase tracking-tight">{v.t}</h3>
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
