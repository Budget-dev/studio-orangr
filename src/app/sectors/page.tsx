"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function SectorsPage() {
  const SECTORS = [
    { icon: "🌾", name: "Agriculture", count: "40+ clients" },
    { icon: "👗", name: "Textiles", count: "60+ clients" },
    { icon: "💊", name: "Pharma", count: "35+ clients" },
    { icon: "🏭", name: "Manufacturing", count: "50+ clients" },
    { icon: "🛢️", name: "Chemicals", count: "28+ clients" },
    { icon: "🍎", name: "Food & Beverages", count: "45+ clients" },
    { icon: "💎", name: "Gems & Jewellery", count: "22+ clients" },
    { icon: "⚙️", name: "Engineering", count: "38+ clients" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="animate-in fade-in duration-500">
        <section className="pt-[150px] pb-20 bg-social-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Industries We Serve</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Export Expertise Across <span className="text-primary italic not-italic">Every Sector</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
              Deep domain knowledge in 8+ industries ensures sector-specific regulations, packaging, and trade nuances are always handled correctly.
            </p>
            <div className="flex items-center gap-3 text-white/40 text-[13px]">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="opacity-50">›</span>
              <span className="text-primary font-bold">Sectors</span>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((s, i) => (
              <div key={i} className="bg-about-gradient border border-[#e8d5c8] rounded-xl p-8 text-center hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="font-bold text-lg mb-2">{s.name}</div>
                <div className="text-[11.5px] text-muted-foreground">{s.count}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-about-gradient border-t border-[#e8d5c8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Deep Dives</div>
              <h2 className="text-4xl lg:text-5xl font-light">Sector-Specific <span className="font-bold text-primary italic not-italic">Expertise</span></h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                { icon: "🌾", t: "Agriculture & Agri-Products", d: "Phytosanitary certs, cold chain logistics, APEDA compliance, fumigation for fresh produce, grains & spices.", tags: ["Phytosanitary", "Cold Chain", "APEDA"] },
                { icon: "👗", t: "Textiles & Garments", d: "HSN code expertise, GSP/FTA utilisation, ATA Carnet for samples, testing lab coordination for certifications.", tags: ["GSP/FTA", "ATA Carnet", "Testing Labs"] },
                { icon: "💊", t: "Pharmaceuticals", d: "CDSCO coordination, WHO-GMP documentation, temperature-controlled logistics, drug export authorisations.", tags: ["WHO-GMP", "Cold Storage", "CDSCO"] },
                { icon: "⚙️", t: "Engineering & Machinery", d: "Oversize cargo, heavy lift, professional machine packing, SASO certification, EPC project logistics.", tags: ["Oversize Cargo", "SASO", "Heavy Lift"] },
              ].map((s, i) => (
                <div key={i} className="bg-white border border-[#e8d5c8] rounded-2xl p-10 shadow-sm">
                  <div className="text-5xl mb-6">{s.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{s.t}</h3>
                  <p className="text-[#6b5247] text-[15px] leading-relaxed mb-8">{s.d}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(tag => (
                      <span key={tag} className="bg-[#fdf6f2] text-primary text-[11px] font-bold px-4 py-1.5 rounded-full border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
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