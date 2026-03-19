
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Plane, Anchor, Building, FileText, Share2, Globe, Package, CheckCircle } from "lucide-react";

const SERVICES = [
  { icon: Plane, title: "Freight Forwarding", desc: "End-to-end air, sea & land freight solutions with seamless global transit." },
  { icon: Anchor, title: "Sea Freight", desc: "FCL & LCL ocean shipments via our global carrier network." },
  { icon: Building, title: "Warehousing", desc: "Pan-India storage hubs, pick-and-pack, and distribution management." },
  { icon: FileText, title: "Customs Clearance", desc: "Licensed CHAs managing all documentation and port compliance." },
  { icon: Share2, title: "Supply Chain", desc: "Full procurement-to-delivery visibility and cost optimization." },
  { icon: Globe, title: "Export Consulting", desc: "Market entry strategy, HS codes, and regulatory guidance." },
  { icon: Package, title: "Packaging", desc: "Compliance-ready export packaging with multilingual labeling." },
  { icon: CheckCircle, title: "Cargo Insurance", desc: "Comprehensive marine insurance protection for global cargo." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="animate-in fade-in duration-500 pt-[85px]">
        <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] socialee-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[3px] mb-4">What We Offer</div>
            <h1 className="text-4xl md:text-6xl text-white font-black leading-tight mb-6">Comprehensive <span className="text-primary italic">Logistics Services</span></h1>
          </div>
        </section>

        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-[1080px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-xl border border-black/5 shadow-sm hover:border-primary transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{s.title}</h3>
                <p className="text-sm text-[#6b5247] leading-relaxed mb-6">{s.desc}</p>
                <button className="text-primary font-bold text-[13px] hover:underline">Get a Quote →</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
