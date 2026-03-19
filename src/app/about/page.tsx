"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Award, ShieldCheck, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Page Hero */}
        <section className="pt-[150px] pb-20 bg-social-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,var(--primary)_0,var(--primary)_1px,transparent_1px,transparent_55px),repeating-linear-gradient(-45deg,var(--primary)_0,var(--primary)_1px,transparent_1px,transparent_55px)]" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Who We Are</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Our Story of <span className="text-primary italic not-italic">Global Reach</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
              Since 2005, building bridges between India&apos;s exporters and the world&apos;s markets — with trust, expertise, and relentless commitment.
            </p>
            <div className="flex items-center gap-3 text-white/40 text-[13px]">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="opacity-50">›</span>
              <span className="text-primary font-bold">About Us</span>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 text-primary font-bold text-[11px] uppercase tracking-[0.3em] mb-4">
                <div className="w-8 h-[1px] bg-primary" /> Our Journey
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
                Rooted in India, <span className="font-bold text-primary italic not-italic">Reaching the World</span>
              </h2>
              <div className="space-y-6 text-[#6b5247] text-[15px] leading-relaxed">
                <p>Founded in 2005 by Arjun Shyama, we started with a single office in Mumbai and a vision to simplify international trade for Indian businesses. Today we handle 15,000+ shipments annually for 250+ clients in 40+ countries.</p>
                <p>We combine deep regulatory expertise with a vast carrier network and cutting-edge technology to deliver seamless, compliant, and cost-effective trade solutions for businesses of every size.</p>
              </div>
              <Button asChild className="mt-8 rounded-full px-8 font-bold">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
            <div className="bg-about-gradient rounded-3xl p-12 grid grid-cols-2 md:grid-cols-3 gap-4 border border-[#e8d5c8]">
              {[
                { n: "250+", l: "Clients" },
                { n: "40+", l: "Countries" },
                { n: "19+", l: "Years" },
                { n: "15K+", l: "Shipments" },
                { n: "6", l: "Offices" },
                { n: "ISO", l: "Certified" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center border border-[#e8d5c8] shadow-sm">
                  <div className="text-xl font-black text-primary mb-1">{stat.n}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-about-gradient border-y border-[#e8d5c8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">What Drives Us</div>
              <h2 className="text-4xl lg:text-5xl font-light">Our Core <span className="font-bold text-primary">Values</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🤝", t: "Trust & Integrity", d: "Every commitment we make, we keep. Transparency in pricing and communication is non-negotiable." },
                { icon: "⚡", t: "Speed & Efficiency", d: "Time is money in trade. We leverage technology and relationships for the fastest transit times." },
                { icon: "🎯", t: "Client-First", d: "Every decision is filtered through one question: is this the best outcome for our client?" },
                { icon: "🔬", t: "Compliance Excellence", d: "Our regulatory experts ensure every shipment meets the highest standards of trade compliance." },
                { icon: "🚀", t: "Innovation", d: "From real-time tracking dashboards to AI-powered routing — we continuously invest in better tools." },
                { icon: "🔒", t: "Security", d: "We protect your cargo and data with rigorous security protocols and comprehensive insurance." },
              ].map((val, i) => (
                <div key={i} className="bg-white/50 border border-[#e8d5c8] rounded-2xl p-8 hover:border-primary hover:bg-[#f5ebe4] transition-all group">
                  <div className="text-4xl mb-6">{val.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{val.t}</h3>
                  <p className="text-[#6b5247] text-[14px] leading-relaxed">{val.d}</p>
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