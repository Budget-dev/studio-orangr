"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const SECTORS = [
  { icon: "🛍️", name: "D2C & E-Commerce", count: "40+ brands" },
  { icon: "💻", name: "SaaS & Tech", count: "60+ clients" },
  { icon: "🏥", name: "Health & Wellness", count: "35+ clients" },
  { icon: "🏠", name: "Real Estate", count: "50+ clients" },
  { icon: "💄", name: "Beauty & Fashion", count: "28+ brands" },
  { icon: "🍔", name: "Food & Beverage", count: "45+ clients" },
  { icon: "💎", name: "Luxury Goods", count: "22+ brands" },
  { icon: "💰", name: "FinTech", count: "38+ clients" },
];

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="animate-in fade-in duration-500 pt-[85px]">
        <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] socialee-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[3px] mb-4">Industries We Transform</div>
            <h1 className="text-4xl md:text-6xl text-white font-black leading-tight mb-6">Growth Strategy Across <span className="text-primary italic">Every Sector</span></h1>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1080px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {SECTORS.map((s, i) => (
              <div key={i} className="bg-[#fdf6f2] border border-primary/10 rounded-lg p-10 text-center hover:shadow-xl hover:border-primary transition-all">
                <div className="text-5xl mb-4">{s.icon}</div>
                <div className="font-bold text-black text-lg mb-1">{s.name}</div>
                <div className="text-xs text-black/40 font-semibold">{s.count}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
