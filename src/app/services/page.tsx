"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Target, Smartphone, ShoppingCart, Share2, FileText, Search, MousePointer } from "lucide-react";
import Link from "next/link";
import { Stagger, Reveal, fadeInScale, fadeInUp } from "@/components/services/AnimationWrappers";

const SERVICES = [
  { icon: Target, title: "Performance Marketing", desc: "Turn every rupee into measurable revenue with data-led paid media campaigns.", href: "/services/performance-marketing" },
  { icon: Smartphone, title: "Mobile App Marketing", desc: "Full-stack mobile growth strategies from user acquisition to retention.", href: "/services/mobile-app-marketing" },
  { icon: ShoppingCart, title: "E-Commerce Marketing", desc: "Sell more, spend smarter, and scale your online store to new heights.", href: "/services/ecommerce-marketing" },
  { icon: Share2, title: "Social Media Marketing", desc: "Build a brand people actually follow with platform-native content.", href: "/services/social-media-marketing" },
  { icon: FileText, title: "Content Marketing", desc: "Earn trust and drive revenue with strategic content that educate and converts.", href: "/services/content-marketing" },
  { icon: Search, title: "Search Engine Optimization", desc: "Rank higher and win organically with technical and on-page excellence.", href: "/services/seo" },
  { icon: MousePointer, title: "Conversion Rate Optimization", desc: "More revenue from the traffic you already have through data-driven CRO.", href: "/services/cro" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main className="animate-in fade-in duration-500 pt-[85px]">
        {/* Hero */}
        <section className="bg-secondary py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] social-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6">
            <Reveal variants={fadeInUp}>
              <div className="text-primary text-[11px] font-bold uppercase tracking-[4px] mb-6">Our Expertise</div>
              <h1 className="text-4xl md:text-6xl text-white font-black leading-tight mb-8">Our <span className="text-primary italic font-light">All Services</span></h1>
              <div className="flex items-center gap-3 text-white/40 text-[12px] font-bold uppercase tracking-widest">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-primary">All Services</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="max-w-[1080px] mx-auto px-6">
            <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((s, i) => (
                <Reveal key={i} variants={fadeInScale}>
                  <Link href={s.href} className="block group">
                    <div className="bg-white p-12 rounded-2xl border border-black/5 shadow-sm hover:border-primary hover:-translate-y-2 transition-all relative overflow-hidden h-full flex flex-col">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all relative z-10">
                        <s.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4 relative z-10 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-sm text-[#6b5247] leading-relaxed mb-10 relative z-10 italic">{s.desc}</p>
                      <div className="mt-auto text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all relative z-10">
                        Explore Strategy <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="text-center mb-20">
              <Reveal variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-normal text-black">Our Simplified <span className="text-primary font-bold italic">Process</span></h2>
              </Reveal>
            </div>
            <Stagger className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { n: "01", t: "Audit", d: "Deep dive analysis" },
                { n: "02", t: "Strategy", d: "Custom roadmap" },
                { n: "03", t: "Build", d: "Campaign setup" },
                { n: "04", t: "Optimize", d: "Iterative testing" },
                { n: "05", t: "Scale", d: "Profitable growth" }
              ].map((step, i) => (
                <Reveal key={i} variants={fadeInUp}>
                  <div className="text-center group">
                    <div className="w-16 h-16 rounded-full bg-[#fdf6f2] border-2 border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:border-primary transition-all text-primary group-hover:text-white font-black text-xl">
                      {step.n}
                    </div>
                    <h4 className="font-bold text-black mb-2">{step.t}</h4>
                    <p className="text-xs text-black/40">{step.d}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
