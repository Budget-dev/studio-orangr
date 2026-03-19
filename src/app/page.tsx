
"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatsCounter } from "@/components/home/StatsCounter";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { ArrowRight, Plane, Anchor, Building, FileText, Share2, Globe, Package, Play, Twitter } from "lucide-react";
import Image from "next/image";

/* Sections matched to Socialee sequence */
export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/30">
      <Navbar />

      <main className="animate-in fade-in duration-500">
        
        {/* 1. FULL-WIDTH BANNER IMAGE (1350x600 aspect) */}
        <section className="mt-[85px] relative w-full aspect-[1350/600] min-h-[400px] socialee-gradient overflow-hidden flex items-center">
          <div className="absolute inset-0 socialee-banner-overlay" />
          <div className="absolute inset-0 socialee-grid-texture" />
          
          {/* 2. H1 HEADING (ABSOLUTE OVER BANNER LEFT) + BADGES */}
          <div className="relative z-10 max-w-[1080px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-[600px]">
              <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-normal text-white leading-[1.15]">
                India's Leading<br />
                <span className="text-primary font-bold">International Trade</span><br />
                <span className="text-primary font-bold">& Logistics Agency</span>
              </h1>
            </div>
            
            <div className="hidden lg:flex gap-4">
              <div className="bg-white/5 border border-primary/20 backdrop-blur-md rounded-xl p-6 text-center min-w-[160px] transition-transform hover:-translate-y-1 hover:bg-white/10">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-xs uppercase tracking-wider mb-1">IEC Registered</div>
                <div className="text-white/40 text-[10px] font-medium">Govt. of India</div>
              </div>
              <div className="bg-white/5 border border-primary/20 backdrop-blur-md rounded-xl p-6 text-center min-w-[160px] transition-transform hover:-translate-y-1 hover:bg-white/10">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-xs uppercase tracking-wider mb-1">FIEO Member</div>
                <div className="text-white/40 text-[10px] font-medium">Export Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT SECTION (stretched, light bg, col-50+col-50) */}
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
              <Image 
                src="https://picsum.photos/seed/about_trade/800/600" 
                alt="About Trade" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="international trade"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>

        {/* 4. STATS BAR (4 counters, dark bg) */}
        <section className="bg-[#0a0a0a] flex flex-wrap border-y border-white/5">
          <div className="max-w-[1080px] mx-auto w-full grid grid-cols-2 lg:grid-cols-4">
            <div className="border-r border-white/5">
              <StatsCounter target={19} suffix="+" label="Years of Expertise" />
            </div>
            <div className="lg:border-r border-white/5">
              <StatsCounter target={250} suffix="+" label="Clients Served" />
            </div>
            <div className="border-r border-white/5">
              <StatsCounter target={40} suffix="+" label="Countries Reached" />
            </div>
            <div>
              <StatsCounter target={15000} suffix="+" label="Shipments Handled" />
            </div>
          </div>
        </section>

        {/* 5. SERVICES HEADING */}
        <section className="pt-20 pb-0 text-center">
          <h2 className="text-[32px] md:text-[36px] font-normal text-black">
            Our <span className="text-primary font-bold">Trade & Logistics Services</span><br />
            Your Instruments
          </h2>
        </section>

        {/* 6 & 7. SERVICES ROWS (4 hover cards each) */}
        <section className="max-w-[1080px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/5">
            {[
              { icon: Plane, title: "Freight Forwarding", desc: "End-to-end air, sea & land freight solutions." },
              { icon: Anchor, title: "Sea Freight", desc: "FCL & LCL ocean shipments. Global network." },
              { icon: Building, title: "Warehousing", desc: "Pan-India storage, pick-pack distribution." },
              { icon: FileText, title: "Customs Clearance", desc: "Licensed CHAs handle all port compliance." },
              { icon: Share2, title: "Supply Chain", desc: "Integrated procurement-to-delivery visibility." },
              { icon: Globe, title: "Export Consulting", desc: "Market entry, HS codes, trade agreements." },
              { icon: Package, title: "Packaging", desc: "Compliance-ready export packaging solutions." },
              { icon: ArrowRight, title: "All Services", desc: "See the full suite of trade & logistics." },
            ].map((s, i) => (
              <Link 
                key={i} 
                href="/services" 
                className="bg-[#f5f5f5] p-8 group transition-all duration-300 hover:bg-primary border-r border-b border-black/5"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h5 className="text-[18px] font-bold text-black mb-2 group-hover:text-white transition-colors">{s.title}</h5>
                <p className="text-[13px] text-black/40 leading-relaxed group-hover:text-white/80 transition-colors mb-4">{s.desc}</p>
                <div className="w-4 h-4 border-t-2 border-r-2 border-primary group-hover:border-white rotate-45" />
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

        {/* 9. WORLD MAP REACH (dark bg) */}
        <section className="bg-[#0a0a0a] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] socialee-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6 text-center">
            <div className="text-[72px] mb-6 animate-pulse">🌍</div>
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

        {/* 10 & 11. CREATIVE POSTS ROWS (4x2 portrait grid) */}
        <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-black/5">
          {[
            { icon: "👗", bg: "#f5e6d3" }, { icon: "🌾", bg: "#e6f5e6" }, { icon: "💊", bg: "#e6ecf5" }, { icon: "⚙️", bg: "#f5f0e6" },
            { icon: "🌶️", bg: "#f5ece6" }, { icon: "💎", bg: "#fdf5e6" }, { icon: "🌿", bg: "#e6f5ec" }, { icon: "🧵", bg: "#f5e6ec" }
          ].map((p, i) => (
            <div key={i} className="group relative aspect-[380/560] overflow-hidden cursor-pointer">
              <div style={{ backgroundColor: p.bg }} className="w-full h-full flex items-center justify-center text-7xl transition-transform duration-700 group-hover:scale-110">
                {p.icon}
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white font-bold text-sm uppercase tracking-widest">View Project</div>
              </div>
            </div>
          ))}
        </section>

        {/* 13 & 15. LOGO CAROUSELS */}
        <section className="py-16 bg-white overflow-hidden">
          <LogoMarquee direction="left" logos={["Rajhans Textiles", "AgroFresh", "PharmaBridge", "MetalCraft India", "SpicePath", "GemRoute", "HerbsIndia", "WeaveCraft"]} />
          <div className="h-4" />
          <LogoMarquee direction="right" logos={["SWEC Group", "National Tenders", "Zydus Exports", "MAS Financial", "Rangoli Exports", "Yug Jewellery", "Vyom Innovation", "Vendstop"]} />
        </section>

        {/* 17. OUR CLIENTELES BUTTON */}
        <div className="text-center py-12">
          <Link href="/portfolio" className="bg-[#0a0a0a] text-white px-9 py-4 rounded-sm text-sm font-bold hover:bg-primary transition-all">
            Our Clienteles
          </Link>
        </div>

        {/* 18. ADVERTISING ARSENAL */}
        <section className="max-w-[1080px] mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-normal text-black mb-10">
            Strategic Tools, Measurable Success<br />
            <span className="text-primary font-bold">Our Trade Infrastructure Arsenal</span>
          </h2>
          <div className="flex overflow-hidden group">
            <div className="flex gap-4 animate-marquee-l">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex-shrink-0 w-[200px] h-[130px] bg-[#f5f5f5] rounded-lg border border-black/5 flex items-center justify-center font-bold text-black/40 hover:bg-primary hover:text-[#0a0a0a] transition-all">
                  Tool {i}
                </div>
              ))}
              {/* Duplicated for smooth marquee */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`dup-${i}`} className="flex-shrink-0 w-[200px] h-[130px] bg-[#f5f5f5] rounded-lg border border-black/5 flex items-center justify-center font-bold text-black/40 hover:bg-primary hover:text-[#0a0a0a] transition-all">
                  Tool {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 19. PORTFOLIO GRID (3x2) */}
        <section className="max-w-[1080px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link key={i} href="/portfolio" className="group relative aspect-[500/353] overflow-hidden bg-[#f0e0d0]">
              <Image 
                src={`https://picsum.photos/seed/port_${i}/500/353`} 
                alt="Project" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="logistics export"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                <span className="text-white font-bold text-center">Project Success Story {i}</span>
              </div>
            </Link>
          ))}
        </section>

        {/* 20. CHECK ENTIRE PORTFOLIO BUTTON */}
        <div className="text-center py-12">
          <Link href="/portfolio" className="bg-[#0a0a0a] text-white px-9 py-4 rounded-sm text-sm font-bold hover:bg-primary transition-all">
            Check our entire Portfolio
          </Link>
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
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[9/16] bg-[#f5f5f5] rounded-md relative overflow-hidden group">
                <Image src={`https://picsum.photos/seed/studio_${i}/400/700`} alt="Studio" fill className="object-cover" data-ai-hint="cargo shipping" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"><Play className="fill-white" /></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 22 & 23. BLOG GRID (Photo2 style) */}
        <section className="bg-white py-20 border-t border-black/5">
          <div className="max-w-[1080px] mx-auto px-6">
            <h2 className="text-3xl font-normal text-black mb-12">Latest from <span className="text-primary font-bold">Blogs</span></h2>
            <div className="grid md:grid-cols-3 gap-0">
              {[1, 2, 3].map((i) => (
                <Link key={i} href="/blog" className="group border border-black/5 transition-all hover:shadow-2xl">
                  <div className="aspect-[1200/600] overflow-hidden">
                    <Image 
                      src={`https://picsum.photos/seed/blog_${i}/600/300`} 
                      alt="Blog" 
                      width={600} 
                      height={300} 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint="export documentation"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h2 className="text-[16px] font-normal text-black group-hover:text-primary transition-colors">How to Navigate New Trade Regulations in 2025</h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 24. SEE ALL BLOGS BUTTON */}
        <div className="text-center py-12">
          <Link href="/blog" className="bg-[#0a0a0a] text-white px-9 py-4 rounded-sm text-sm font-bold hover:bg-primary transition-all">
            See all Blogs
          </Link>
        </div>

        {/* 25. TWITTER BANNER (Social banner) */}
        <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] socialee-grid-texture" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl text-white font-normal">Connect with <span className="text-primary font-bold">Shyama Overseas</span></h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">Follow us for real-time trade updates, export insights & industry news from India's trade desk.</p>
            <div className="flex justify-center gap-6 mt-10">
              <Link href="#" className="flex items-center gap-2 text-primary font-bold text-sm"><Twitter className="w-4 h-4" /> Twitter</Link>
              <Link href="#" className="flex items-center gap-2 text-primary font-bold text-sm"><Share2 className="w-4 h-4" /> LinkedIn</Link>
            </div>
          </div>
        </section>

        {/* 26. CONTACT SECTION (col-50 form + col-50 info) */}
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
              <button className="w-full bg-[#00d285] text-white py-4 font-bold rounded-sm hover:bg-[#00b774] transition-colors">Send Message</button>
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
    </div>
  );
}
