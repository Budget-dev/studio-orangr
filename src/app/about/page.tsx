
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="animate-in fade-in duration-500 pt-[85px]">
        {/* Page Hero */}
        <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] socialee-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[3px] mb-4">Who We Are</div>
            <h1 className="text-4xl md:text-6xl text-white font-black leading-tight mb-6">
              Our Story of <span className="text-primary italic font-light">Global Reach</span>
            </h1>
            <div className="flex items-center gap-3 text-white/40 text-[12.5px]">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>›</span>
              <span className="text-primary font-semibold">About Us</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-[1080px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">_ OUR JOURNEY</div>
              <h2 className="text-3xl md:text-4xl font-normal text-black leading-tight mb-8">Rooted in India, <span className="text-primary italic">Reaching the World</span></h2>
              <div className="space-y-6 text-[#6b5247] leading-relaxed text-[17px]">
                <p>Founded in 2005 by a visionary team, we started with a single office in Mumbai and a dream to simplify global trade for Indian businesses.</p>
                <p>Today, we handle 15,000+ shipments annually for over 250 clients, spanning 40+ countries. Our success is built on a foundation of trust, compliance, and technological excellence.</p>
              </div>
            </div>
            <div className="bg-[#fdf6f2] p-10 rounded-xl border border-primary/10">
              <div className="text-center text-[80px] mb-10">🌐</div>
              <div className="grid grid-cols-3 gap-4">
                {[["250+", "Clients"], ["40+", "Countries"], ["19+", "Years"], ["15K+", "Shipments"], ["6", "Offices"], ["ISO", "Certified"]].map(([n, l]) => (
                  <div key={l} className="bg-white p-4 rounded text-center border border-black/5 shadow-sm">
                    <div className="text-primary font-black text-xl">{n}</div>
                    <div className="text-[10px] text-[#888] font-bold uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
