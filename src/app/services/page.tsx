
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Plane, Anchor, Building, FileText, Share2, Globe, Package, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main className="animate-in fade-in duration-500 pt-[85px]">
        <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] social-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-6">Our Expertise</div>
            <h1 className="text-4xl md:text-6xl text-white font-black leading-tight mb-8">Comprehensive <span className="text-primary italic font-light">Logistics Solutions</span></h1>
            <div className="flex items-center gap-3 text-white/40 text-[12px] font-bold uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">Services</span>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f5f5f5]">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((s, i) => (
                <div key={i} className="bg-white p-12 rounded-2xl border border-black/5 shadow-sm hover:border-primary hover:-translate-y-2 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all relative z-10">
                    <s.icon className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 relative z-10">{s.title}</h3>
                  <p className="text-sm text-[#6b5247] leading-relaxed mb-10 relative z-10">{s.desc}</p>
                  <Link href="/contact" className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all relative z-10">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-normal text-black">Our Simplified <span className="text-primary font-bold italic">Process</span></h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { n: "01", t: "Consult", d: "Discovery & strategy" },
                { n: "02", t: "Docs", d: "Legal compliance" },
                { n: "03", t: "Pack", d: "Safe handling" },
                { n: "04", t: "Transit", d: "Global shipping" },
                { n: "05", t: "Deliver", d: "Final arrival" }
              ].map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-[#fdf6f2] border-2 border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:border-primary transition-all text-primary group-hover:text-black font-black text-xl">
                    {step.n}
                  </div>
                  <h4 className="font-bold text-black mb-2">{step.t}</h4>
                  <p className="text-xs text-black/40">{step.d}</p>
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
