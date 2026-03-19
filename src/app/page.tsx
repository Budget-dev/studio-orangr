
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatsCounter } from "@/components/home/StatsCounter";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { Plane, Ship, Building, FileText, Share2, Globe, Package, ArrowRight, Play, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const POSTS_R1 = [
  { name: "Rajhans Textiles", bg: "bg-[#f5e6d3]", icon: "👗", cat: "Textiles Export" },
  { name: "AgroFresh Exports", bg: "bg-[#e6f5e6]", icon: "🌾", cat: "Agriculture" },
  { name: "PharmaBridge", bg: "bg-[#e6ecf5]", icon: "💊", cat: "Pharma" },
  { name: "MetalCraft India", bg: "bg-[#f5f0e6]", icon: "⚙️", cat: "Engineering" },
];

const POSTS_R2 = [
  { name: "SpicePath Ltd", bg: "bg-[#f5ece6]", icon: "🌶️", cat: "Food & Beverages" },
  { name: "GemRoute", bg: "bg-[#fdf5e6]", icon: "💎", cat: "Gems & Jewellery" },
  { name: "HerbsIndia", bg: "bg-[#e6f5ec]", icon: "🌿", cat: "Organic Exports" },
  { name: "WeaveCraft", bg: "bg-[#f5e6ec]", icon: "🧵", cat: "Handloom" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="animate-in fade-in duration-500">
        
        {/* 1. FULL-WIDTH BANNER */}
        <section className="mt-[85px] relative w-full aspect-[1350/600] min-h-[400px] bg-[#0a0a0a] overflow-hidden flex items-center">
          <div className="absolute inset-0 social-grid-texture opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#080808] via-[#1a0d07] to-[#0d0603]" />
          
          {/* 2. H1 HEADING + BADGES */}
          <div className="relative z-10 max-w-[1080px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-normal text-white leading-[1.15]">
                India's Leading<br />
                <span className="text-primary font-bold">International Trade</span><br />
                <span className="text-primary font-bold">& Logistics Agency</span>
              </h1>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-white/5 border border-primary/20 backdrop-blur-md rounded-xl p-6 text-center min-w-[160px] transition-transform hover:-translate-y-1">
                <div className="text-2xl mb-2">📋</div>
                <div className="text-white font-bold text-xs uppercase tracking-wider mb-1">IEC Registered</div>
                <div className="text-white/40 text-[10px] font-medium">Govt. of India</div>
              </div>
              <div className="bg-white/5 border border-primary/20 backdrop-blur-md rounded-xl p-6 text-center min-w-[160px] transition-transform hover:-translate-y-1">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-white font-bold text-xs uppercase tracking-wider mb-1">FIEO Member</div>
                <div className="text-white/40 text-[10px] font-medium">Export Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT SECTION */}
        <section className="bg-[#f5f5f5] py-20 overflow-hidden">
          <div className="max-w-[1080px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-[#262626] mb-4">
                <span className="text-primary">_</span> ABOUT US
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-black leading-[1.3] mb-6">
                Helping Clients <span className="text-primary font-bold">Build</span><br />
                <span className="text-primary font-bold">Global Trade</span> Presence <span className="text-primary font-bold">Since 2005</span>
              </h2>
              <p className="text-[17px] text-[#262626] mb-4">Founded in 2005, we are one of the leading</p>
              <p className="text-[17px] font-bold text-primary mb-8 underline underline-offset-8 decoration-primary/20">International Trade Agencies In India.</p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative aspect-[546/426] rounded-lg overflow-hidden shadow-2xl group">
              <Image src="https://picsum.photos/seed/trade_about/800/600" alt="Trade Global" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center text-8xl">🌐</div>
            </div>
          </div>
        </section>

        {/* 4. STATS BAR */}
        <section className="bg-[#0a0a0a] flex flex-wrap border-y border-white/5">
          <div className="max-w-[1080px] mx-auto w-full grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className="border-r border-white/5 last:border-0">
                <StatsCounter target={s.num} suffix={s.suf} label={s.label} />
              </div>
            ))}
          </div>
        </section>

        {/* 5. SERVICES HEADING */}
        <section className="pt-20 pb-0 text-center">
          <h2 className="text-[32px] md:text-[36px] font-normal text-black">
            Our <span className="text-primary font-bold">Trade & Logistics Services</span><br />
            Your Instruments
          </h2>
        </section>

        {/* 6 & 7. SERVICES ROWS */}
        <section className="max-w-[1080px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/5">
            {[...SERVICES_ROW1, ...SERVICES_ROW2].map((s, i) => (
              <Link key={i} href="/services" className="bg-[#f5f5f5] p-8 group transition-all duration-300 hover:bg-primary border-r border-b border-black/5">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h5 className="text-[18px] font-bold text-black mb-4 group-hover:text-white transition-colors whitespace-pre-line">{s.title}</h5>
                <p className="text-[13px] text-black/40 leading-relaxed group-hover:text-white/80 transition-colors mb-4">{s.desc}</p>
                <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* 8. CLIENTS HEADING */}
        <section className="pt-12 pb-4 max-w-[1080px] mx-auto px-6">
          <h5 className="text-[18px] font-semibold text-black mb-2">Our Reach & Clients</h5>
          <h2 className="text-3xl md:text-4xl font-normal text-black">
            Worked with <span className="font-bold">250+</span> Clients <span className="text-primary font-bold italic">Across The Globe</span>
          </h2>
        </section>

        {/* 9. WORLD MAP REACH */}
        <section className="bg-[#0a0a0a] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] social-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6 text-center">
            <div className="text-[72px] mb-6">🌍</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Active Trade Corridors in <span className="text-primary">40+ Countries</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["🇮🇳 India", "🇦🇪 UAE", "🇺🇸 USA", "🇬🇧 UK", "🇸🇬 Singapore", "🇩🇪 Germany", "🇦🇺 Australia", "🇯🇵 Japan"].map(c => (
                <div key={c} className="text-sm font-semibold text-white/60 px-5 py-2.5 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors cursor-default">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 & 11. CREATIVE POSTS ROWS */}
        <section className="grid grid-cols-2 lg:grid-cols-4">
          {[...POSTS_R1, ...POSTS_R2].map((p, i) => (
            <div key={i} className={`group relative aspect-[380/560] overflow-hidden cursor-pointer ${p.bg}`}>
              <div className="w-full h-full flex items-center justify-center text-7xl transition-transform duration-700 group-hover:scale-110">
                {p.icon}
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <div className="text-white font-bold text-xl mb-2">{p.name}</div>
                <div className="text-primary font-semibold text-sm uppercase tracking-widest">{p.cat}</div>
              </div>
            </div>
          ))}
        </section>

        {/* 12-16. LOGO CAROUSELS */}
        <section className="py-16 bg-white overflow-hidden space-y-4">
          <LogoMarquee direction="left" logos={LOGOS_R1} />
          <LogoMarquee direction="right" logos={LOGOS_R2} />
        </section>

        {/* 17. OUR CLIENTELES BUTTON */}
        <div className="text-center py-12">
          <Link href="/portfolio" className="elementor-btn">Our Clienteles</Link>
        </div>

        {/* 18. ADVERTISING ARSENAL */}
        <section className="max-w-[1080px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-normal text-black mb-10">
            Strategic Tools, Measurable Success<br />
            <span className="text-primary font-bold">Our Trade Infrastructure Arsenal</span>
          </h2>
          <div className="flex overflow-hidden group">
            <div className="flex gap-4 animate-marquee-ltr">
              {ARSENAL.map((a, i) => (
                <div key={i} className="flex-shrink-0 w-[200px] h-[130px] bg-[#f5f5f5] rounded-lg border border-black/5 flex flex-col items-center justify-center gap-2 hover:bg-primary transition-all">
                  <div className="text-3xl">{a.icon}</div>
                  <div className="font-bold text-xs text-black/60">{a.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 19. PORTFOLIO GRID */}
        <section className="max-w-[1080px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {PORTFOLIO.map((p, i) => (
            <div key={i} className="group relative aspect-[500/353] overflow-hidden bg-[#f0e0d0]">
              <div className={`w-full h-full flex items-center justify-center text-6xl ${p.bg}`}>
                {p.icon}
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                <span className="text-white font-bold text-center text-xl">{p.name}</span>
              </div>
            </div>
          ))}
        </section>

        {/* 20. CHECK ENTIRE PORTFOLIO BUTTON */}
        <div className="text-center py-12">
          <Link href="/portfolio" className="elementor-btn">Check our entire Portfolio</Link>
        </div>

        {/* 21. STUDIO SECTION */}
        <section className="max-w-[1080px] mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">_ IN-HOUSE OPERATIONS</div>
              <h2 className="text-2xl font-normal text-black leading-tight mb-6">
                A trade partner with an <span className="text-primary font-bold">In-house Compliance Setup</span>
              </h2>
              <p className="text-sm text-black/50 leading-relaxed">We've built a dedicated team of licensed customs brokers, freight coordinators, and logistics specialists — all under one roof.</p>
            </div>
            {[
              {bg:"bg-[#f5e6d3]",icon:"📦",lbl:"Cargo Handling"},
              {bg:"bg-[#e6ecf5]",icon:"✈️",lbl:"Air Freight"},
              {bg:"bg-[#e6f5e6]",icon:"🚢",lbl:"Sea Freight"},
            ].map((v, i) => (
              <div key={i} className={`aspect-[9/16] ${v.bg} rounded-md relative overflow-hidden group flex flex-col items-center justify-center`}>
                <div className="text-6xl mb-4">{v.icon}</div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer"><Play className="fill-white" /></div>
                <div className="absolute bottom-6 font-bold text-sm text-black/60">{v.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 22 & 23. BLOG GRID */}
        <section className="bg-white py-20 border-t border-black/5">
          <div className="max-w-[1080px] mx-auto px-6">
            <h2 className="text-3xl font-normal text-black mb-12">Latest from <span className="text-primary font-bold">Blogs</span></h2>
            <div className="grid md:grid-cols-3 gap-0 border-l border-t border-black/5">
              {BLOGS.map((b, i) => (
                <Link key={i} href="/blog" className="group border-r border-b border-black/5 transition-all hover:shadow-2xl">
                  <div className={`aspect-[1200/600] overflow-hidden ${b.bg} flex items-center justify-center text-6xl`}>
                    {b.icon}
                  </div>
                  <div className="p-8 text-center">
                    <h2 className="text-[16px] font-normal text-black group-hover:text-primary transition-colors">{b.title}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 24. SEE ALL BLOGS BUTTON */}
        <div className="text-center py-12">
          <Link href="/blog" className="elementor-btn">See all Blogs</Link>
        </div>

        {/* 25. SOCIAL BANNER */}
        <section className="social-banner">
          <div className="social-banner-img">
            <div className="social-banner-dots"/>
            <div className="social-banner-text">
              <h2 className="text-white text-3xl"><strong>Connect with Shyama Overseas</strong></h2>
              <p className="text-white/60 mt-2">Follow us for trade updates, export insights & industry news</p>
              <div className="flex gap-6 justify-center mt-8">
                <Link href="#" className="flex items-center gap-2 text-primary font-bold text-sm"><Linkedin className="w-4 h-4" /> LinkedIn</Link>
                <Link href="#" className="flex items-center gap-2 text-primary font-bold text-sm"><Twitter className="w-4 h-4" /> Twitter</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 26. CONTACT SECTION */}
        <section className="max-w-[1080px] mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-normal text-black mb-12">
            <span className="text-primary font-bold">Get in touch</span> with us for<br />our Global Trade Services
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" className="w-full p-4 bg-[#f5f5f5] rounded border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Name" />
                <input type="email" className="w-full p-4 bg-[#f5f5f5] rounded border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Email ID" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="tel" className="w-full p-4 bg-[#f5f5f5] rounded border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Contact Number" />
                <input type="url" className="w-full p-4 bg-[#f5f5f5] rounded border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Website" />
              </div>
              <input type="text" className="w-full p-4 bg-[#f5f5f5] rounded border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Company Name" />
              <textarea className="w-full p-4 bg-[#f5f5f5] rounded border-none focus:ring-2 focus:ring-primary outline-none min-h-[120px]" placeholder="Please share your requirement in detail"></textarea>
              <button type="button" className="w-full bg-[#00d285] text-white py-4 font-bold rounded-sm hover:bg-[#00b774] transition-colors">Send Message</button>
            </form>
            
            <div className="bg-[#0a0a0a] p-10 rounded-sm flex flex-col justify-center h-fit">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"><Share2 /></div>
                <h3 className="text-2xl font-bold text-white tracking-tight">+91-98765 43210</h3>
              </div>
              <div className="space-y-4 text-white/60 text-sm">
                <p>Available Mon-Sat: 09:00 – 18:00 IST</p>
                <p className="font-bold text-white">Mumbai | Delhi | Surat | Bangalore</p>
                <p>Email: <Link href="mailto:info@shyamaoverseas.com" className="text-primary hover:underline">info@shyamaoverseas.com</Link></p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      
      <style jsx>{`
        .elementor-btn {
          display: inline-block;
          background: #0a0a0a;
          color: #fff;
          padding: 14px 34px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 5px;
          transition: all 0.2s;
        }
        .elementor-btn:hover {
          background: #f89b34;
          color: #0a0a0a;
        }
        .social-banner-img {
          width: 100%;
          aspect-ratio: 1200/400;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0a00 40%, #0a0a0a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .social-banner-dots {
          position: absolute;
          inset: 0;
          opacity: .04;
          background-image: radial-gradient(circle, #f89b34 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>
    </div>
  );
}

const STATS = [
  { label: "Years of Expertise", num: 19, suf: "+" },
  { label: "Clients Served", num: 250, suf: "+" },
  { label: "Countries Reached", num: 40, suf: "+" },
  { label: "Shipments Handled", num: 15000, suf: "+" },
];

const SERVICES_ROW1 = [
  { icon: "✈️", title: "Freight\nForwarding", desc: "End-to-end air, sea & land freight solutions." },
  { icon: "🚢", title: "Sea\nFreight", desc: "FCL & LCL ocean shipments. Global network." },
  { icon: "🏭", title: "Warehousing\n& Storage", desc: "Pan-India storage, pick-pack distribution." },
  { icon: "📋", title: "Customs\nClearance", desc: "Licensed CHAs handle all port compliance." },
];

const SERVICES_ROW2 = [
  { icon: "🔗", title: "Supply\nChain", desc: "Integrated procurement-to-delivery visibility." },
  { icon: "🌍", title: "Export\nConsulting", desc: "Market entry, HS codes, trade agreements." },
  { icon: "📦", title: "Packaging\n& Labeling", desc: "Compliance-ready export packaging solutions." },
  { icon: "➡️", title: "All\nServices", desc: "See the full suite of trade & logistics." },
];

const LOGOS_R1 = ["Rajhans Textiles", "AgroFresh", "PharmaBridge", "MetalCraft India", "SpicePath", "GemRoute", "HerbsIndia", "WeaveCraft"];
const LOGOS_R2 = ["SWEC Group", "National Tenders", "Zydus Exports", "MAS Financial", "Rangoli Exports", "Yug Jewellery", "Vyom Innovation", "Vendstop"];

const ARSENAL = [
  { icon: "🚢", name: "Ocean Freight" },
  { icon: "✈️", name: "Air Cargo" },
  { icon: "🔗", name: "ICEGATE EDI" },
  { icon: "📊", name: "Shipment Tracking" },
  { icon: "🏭", name: "Bonded Warehouse" },
  { icon: "📋", name: "DGFT Portal" },
];

const PORTFOLIO = [
  { name: "Rajhans Textiles", bg: "bg-[#f5e6d3]", icon: "👗" },
  { name: "AgroFresh Exports", bg: "bg-[#e6f5e6]", icon: "🌾" },
  { name: "PharmaBridge", bg: "bg-[#e6ecf5]", icon: "💊" },
  { name: "Univo Education", bg: "bg-[#fdf5e6]", icon: "🎓" },
  { name: "MetalCraft India", bg: "bg-[#f5f0e6]", icon: "⚙️" },
  { name: "SpicePath Ltd", bg: "bg-[#f5ece6]", icon: "🌶️" },
];

const BLOGS = [
  { bg: "bg-[#f5e6d3]", icon: "📋", title: "How to Navigate New Customs Regulations in 2025" },
  { bg: "bg-[#e6ecf5]", icon: "🚢", title: "Sea vs Air Freight: Making the Right Choice for Your Cargo" },
  { bg: "bg-[#e6f5e6]", icon: "🌍", title: "India's Export Opportunities: Sectors to Watch in 2025" },
];
