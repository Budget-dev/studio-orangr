"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function BlogPage() {
  const BLOGS = [
    { cat: "Export Tips", title: "How to Navigate New Customs Regulations in 2024", date: "Mar 12, 2024", emoji: "📋", bg: "#f5e6d3" },
    { cat: "Logistics", title: "Sea vs Air Freight: Making the Right Choice for Your Cargo", date: "Feb 28, 2024", emoji: "🚢", bg: "#e6ecf5" },
    { cat: "Industry News", title: "India's Export Opportunities: Sectors to Watch in 2024", date: "Feb 14, 2024", emoji: "🌍", bg: "#e6f5e6" },
    { cat: "Supply Chain", title: "How Bonded Warehousing Can Transform Your Export Operations", date: "Jan 30, 2024", emoji: "🏭", bg: "#f5f0e6" },
    { cat: "Compliance", title: "Understanding RCMC and Its Role in Export Benefits", date: "Jan 15, 2024", emoji: "📋", bg: "#fdf5e6" },
    { cat: "Trade Finance", title: "Letter of Credit vs. Bank Guarantee: What Exporters Need to Know", date: "Dec 28, 2023", emoji: "💳", bg: "#e6f0f5" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="animate-in fade-in duration-500">
        <section className="pt-[150px] pb-20 bg-social-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Insights & News</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              The <span className="text-primary italic not-italic">Trade Desk Blog</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
              Expert insights on international trade, logistics trends, customs regulations, and export best practices from the Shyama team.
            </p>
            <div className="flex items-center gap-3 text-white/40 text-[13px]">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="opacity-50">›</span>
              <span className="text-primary font-bold">Blog</span>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((b, i) => (
              <div key={i} className="group bg-white border border-[#e8d5c8] rounded-2xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
                <div style={{ backgroundColor: b.bg }} className="aspect-video flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">
                  {b.emoji}
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">{b.cat}</div>
                  <h3 className="text-xl font-bold mb-6 leading-tight group-hover:text-primary transition-colors">{b.title}</h3>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold">
                      <Clock className="w-4 h-4" /> {b.date}
                    </div>
                    <span className="text-primary font-bold text-[13px] group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a] text-center">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Stay Informed</div>
            <h2 className="text-4xl font-light text-white mb-6">Subscribe to <span className="font-bold text-primary italic not-italic">Trade Insights</span></h2>
            <p className="text-white/60 mb-10 leading-relaxed">Monthly updates on customs changes, freight trends, and export opportunities — straight to your inbox.</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input className="flex-1 bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email Address" />
              <Button className="px-8 font-bold rounded-xl h-auto">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}