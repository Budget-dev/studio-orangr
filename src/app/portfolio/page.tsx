"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatsCounter } from "@/components/home/StatsCounter";
import Link from "next/link";

export default function PortfolioPage() {
  const PORTFOLIO = [
    { name: "Rajhans Lifestyle", cat: "Brand Strategy & PPC", emoji: "✨", bg: "#f5e6d3" },
    { name: "AgroFresh D2C", cat: "E-Commerce Growth", emoji: "🥗", bg: "#e6f5e6" },
    { name: "PharmaBridge Health", cat: "Performance Marketing", emoji: "🩺", bg: "#e6ecf5" },
    { name: "MetalCraft Tech", cat: "B2B Lead Generation", emoji: "🏗️", bg: "#f5f0e6" },
    { name: "SpicePath Gourmet", cat: "Content & Social", emoji: "🧂", bg: "#f5ece6" },
    { name: "GemRoute Luxe", cat: "Conversion (CRO)", emoji: "💎", bg: "#fdf5e6" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="animate-in fade-in duration-500">
        <section className="pt-[150px] pb-20 bg-social-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Our Work</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Client <span className="text-primary italic not-italic">Growth Stories</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
              Real results for real brands. See how we've helped companies scale their digital footprint and drive revenue.
            </p>
            <div className="flex items-center gap-3 text-white/40 text-[13px]">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="opacity-50">›</span>
              <span className="text-primary font-bold">Portfolio</span>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="group relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg border border-[#e8d5c8]">
                <div style={{ backgroundColor: p.bg }} className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  {p.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-all">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{p.cat}</div>
                  <div className="text-white font-bold text-xl">{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
            <StatsCounter target={150} suffix="+" label="Brands Grown" />
            <StatsCounter target={50} suffix="Cr+" label="Revenue Driven" />
            <StatsCounter target={98} suffix="%" label="Client Retention" />
            <StatsCounter target={40} suffix="+" label="Markets Reached" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
