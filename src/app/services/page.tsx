"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plane, Anchor, Building, FileText, Package, Globe, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const SERVICES = [
    { icon: Plane, title: "Freight Forwarding", desc: "End-to-end freight solutions across air, sea & land. Seamless transit, every time." },
    { icon: Anchor, title: "Sea Freight", desc: "FCL & LCL ocean shipments. Global carrier network, competitive rates." },
    { icon: Building, title: "Warehousing", desc: "Pan-India storage hubs, pick-and-pack, distribution management." },
    { icon: FileText, title: "Customs Clearance", desc: "Licensed CHAs handle all documentation, duty & port compliance." },
    { icon: Package, title: "Supply Chain", desc: "Integrated procurement-to-delivery visibility. Optimise costs & speed." },
    { icon: Globe, title: "Export Consulting", desc: "Market entry strategy, HS codes, trade agreements & regulatory guidance." },
    { icon: CheckCircle, title: "Cargo Insurance", desc: "Comprehensive marine insurance through leading underwriters." },
    { icon: Building, title: "Packaging", desc: "Compliance-ready export packaging with multilingual labeling." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="animate-in fade-in duration-500">
        <section className="pt-[150px] pb-20 bg-social-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">What We Offer</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Comprehensive <span className="text-primary italic not-italic">Logistics Services</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-8">
              From freight to fulfilment — every service you need to move goods across borders, efficiently and compliantly.
            </p>
            <div className="flex items-center gap-3 text-white/40 text-[13px]">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="opacity-50">›</span>
              <span className="text-primary font-bold">Services</span>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Our Services</div>
            <h2 className="text-4xl lg:text-5xl font-light">Everything You Need to <span className="font-bold text-primary">Trade Globally</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white border border-[#e8d5c8] rounded-2xl p-10 hover:border-primary hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-[#fdf6f2] rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-[#6b5247] text-[14px] leading-relaxed mb-8">{s.desc}</p>
                <Button asChild variant="ghost" className="p-0 h-auto text-primary font-bold text-[13px] hover:bg-transparent hover:text-[#b8896e]">
                  <Link href="/contact">Get a Quote →</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-about-gradient border-y border-[#e8d5c8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4">How It Works</div>
            <h2 className="text-4xl lg:text-5xl font-light mb-16">Our <span className="font-bold text-primary italic not-italic">Process</span></h2>
            <div className="grid md:grid-cols-5 gap-4 relative">
              {[
                { icon: "💬", t: "Consultation", d: "Discuss requirements with our trade experts" },
                { icon: "📝", t: "Documentation", d: "We prepare all export documents & compliance" },
                { icon: "🚚", t: "Pickup & Pack", d: "Cargo collection & professional packaging" },
                { icon: "✈️", t: "Transit", d: "Multi-modal freight with real-time tracking" },
                { icon: "🎯", t: "Delivery", d: "Customs clearance & last-mile delivery" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-full bg-white border-[2.5px] border-primary flex items-center justify-center text-3xl mb-6 relative z-10 shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#0a0a0a] text-primary text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-primary">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm mb-2">{step.t}</h4>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed">{step.d}</p>
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