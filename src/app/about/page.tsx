
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Shield, Zap, Users, Target, Rocket } from "lucide-react";

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
              Our Story of <span className="text-primary italic font-light">Global Reach</span>
            </h1>
            <div className="flex items-center gap-3 text-white/40 text-[12px] font-bold uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">About Us</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="max-w-[1080px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">_ OUR JOURNEY</div>
              <h2 className="text-3xl md:text-4xl font-normal text-black leading-tight mb-8">Rooted in India, <span className="text-primary italic font-bold">Reaching the World</span></h2>
              <div className="space-y-6 text-[#6b5247] leading-relaxed text-[17px]">
                <p>Founded in 2005, Shyama Overseas started with a vision to revolutionize the way Indian products reach global shores. From our humble beginnings in Mumbai, we've grown into a powerhouse of international trade compliance and logistics.</p>
                <p>Today, we handle a massive volume of exports across textiles, pharma, and engineering, supported by our in-house network of licensed brokers and modern warehousing hubs.</p>
              </div>
              <button className="mt-10 px-8 py-4 bg-[#0a0a0a] text-white font-bold rounded-md hover:bg-primary transition-all uppercase tracking-widest text-xs border-2 border-transparent">Partner With Us</button>
            </div>
            <div className="bg-[#fdf6f2] p-12 rounded-2xl border-2 border-primary/5 relative">
              <div className="text-center text-[100px] mb-12 animate-float">🌐</div>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[["250+", "Clients"], ["40+", "Countries"], ["19+", "Years"], ["15K+", "Shipments"]].map(([n, l]) => (
                  <div key={l} className="bg-white p-6 rounded-xl text-center shadow-sm border border-black/5 hover:border-primary/40 transition-all group">
                    <div className="text-primary font-black text-3xl mb-1 group-hover:scale-110 transition-transform">{n}</div>
                    <div className="text-[10px] text-[#888] font-bold uppercase tracking-widest">{l}</div>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">OUR PRINCIPLES</div>
              <h2 className="text-3xl md:text-4xl font-normal text-black">What Drives <span className="text-primary font-bold italic">Our Success</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, t: "Trust & Integrity", d: "Transparency in pricing and communication is our non-negotiable standard." },
                { icon: Zap, t: "Speed & Efficiency", d: "Leveraging technology for the fastest transit times in the industry." },
                { icon: Users, t: "Client-First", d: "Every strategic decision is filtered through the lens of client benefit." }
              ].map((v, i) => (
                <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 hover:border-primary transition-all group">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all">
                    <v.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{v.t}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
