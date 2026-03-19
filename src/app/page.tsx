"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatsCounter } from "@/components/home/StatsCounter";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Award, CheckCircle, Package, Anchor, Plane, Building, FileText, BarChart3, Clock, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="animate-in fade-in duration-500">
        {/* 1. Full-width banner image */}
        <section className="relative w-full h-[600px] mt-[85px] bg-social-gradient overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_50%,rgba(208,163,141,0.4)_0%,transparent_70%)]" />
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,var(--primary)_0,var(--primary)_1px,transparent_1px,transparent_55px),repeating-linear-gradient(-45deg,var(--primary)_0,var(--primary)_1px,transparent_1px,transparent_55px)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* 2. H1 title + Badges */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/25 rounded-full text-primary text-[11px] font-bold uppercase tracking-[0.25em] mb-6">
                <Globe className="w-3.5 h-3.5" /> Trusted Since 2005
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
                India&apos;s Gateway to <br />
                <span className="text-primary italic not-italic">Global Markets</span>
              </h1>
              <p className="text-white/65 text-lg mb-10 max-w-lg leading-relaxed">
                Shyama Overseas delivers world-class freight forwarding, customs clearance, and supply chain solutions — connecting Indian businesses to 40+ countries worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-10 font-bold text-base shadow-xl shadow-primary/35">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 font-bold text-base bg-white/5 border-white/30 text-white hover:border-primary hover:text-primary transition-all">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="w-48 p-6 bg-white/5 backdrop-blur-md border border-primary/25 rounded-2xl text-center group hover:bg-primary/15 transition-all duration-300">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">IEC Registered</div>
                <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider">Govt. of India</div>
              </div>
              <div className="w-48 p-6 bg-white/5 backdrop-blur-md border border-primary/25 rounded-2xl text-center group hover:bg-primary/15 transition-all duration-300">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">FIEO Member</div>
                <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider">Export Excellence</div>
              </div>
              <div className="w-48 p-6 bg-white/5 backdrop-blur-md border border-primary/25 rounded-2xl text-center group hover:bg-primary/15 transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">ISO 9001:2015</div>
                <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider">Certified Agency</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About section (left text + right image) */}
        <section className="py-24 bg-about-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-4 text-primary font-bold text-[11px] uppercase tracking-[0.3em] mb-4">
                <div className="w-8 h-[1px] bg-primary" /> About Shyama Overseas
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
                Helping Clients <span className="font-bold">Build Global</span> <br />
                <span className="font-bold text-primary">Trade Presence</span> Since 2005
              </h2>
              <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
                Founded in 2005, we are one of India&apos;s leading International Trade & Logistics Agencies.
              </p>
              <p className="text-secondary-foreground text-lg leading-relaxed mb-8">
                From a single Mumbai office to a pan-India network handling 15,000+ shipments annually — our journey is built on trust, compliance, and an unwavering commitment to our clients&apos; growth.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 font-bold text-primary group hover:gap-5 transition-all">
                Read More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-[#e8d5c8] to-[#d0b09a] flex items-center justify-center">
              <Globe className="w-32 h-32 text-primary/30" />
              <div className="absolute bottom-[-18px] right-[-18px] bg-primary text-primary-foreground p-8 rounded-2xl shadow-2xl text-center min-w-[140px]">
                <div className="text-4xl font-black leading-none">19+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-2">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Stats bar */}
        <section className="bg-[#0a0a0a] py-0">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
            <StatsCounter target={250} suffix="+" label="Clients Served" />
            <StatsCounter target={40} suffix="+" label="Countries Reached" />
            <StatsCounter target={19} suffix=" Yrs" label="Experience" />
            <StatsCounter target={15000} suffix="+" label="Shipments Handled" />
          </div>
        </section>

        {/* 5. Services section */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              Our <span className="font-bold text-primary">Trade & Logistics</span> Services
            </h2>
            <p className="text-muted-foreground">Your Growth Engine</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Plane, title: "Freight Forwarding", desc: "End-to-end freight solutions across air, sea & land." },
              { icon: Anchor, title: "Sea Freight", desc: "FCL & LCL ocean shipments. Global carrier network." },
              { icon: Building, title: "Warehousing", desc: "Pan-India storage hubs, pick-and-pack management." },
              { icon: FileText, title: "Customs Clearance", desc: "Licensed CHAs handle all documentation & compliance." },
              { icon: Package, title: "Supply Chain", desc: "Integrated procurement-to-delivery visibility." },
              { icon: Globe, title: "Export Consulting", desc: "Market entry strategy & regulatory guidance." },
              { icon: CheckCircle, title: "Packaging", desc: "Compliance-ready export packaging and labeling." },
              { icon: BarChart3, title: "All Services", desc: "See the full suite of trade & logistics solutions." },
            ].map((svc, i) => (
              <Link 
                key={i} 
                href="/services" 
                className="bg-muted/40 p-8 rounded-xl hover:bg-primary group transition-all duration-300 relative overflow-hidden border-t-2 border-transparent hover:border-primary"
              >
                <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <svc.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">{svc.title}</h3>
                <p className="text-muted-foreground text-[12.5px] leading-relaxed group-hover:text-white/80 transition-colors">{svc.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-10 font-bold">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </section>

        {/* 6. Clients heading + World Map */}
        <section className="bg-[#0a0a0a] py-24 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16 relative z-10">
            <h5 className="text-[13px] font-bold text-white/50 uppercase tracking-[0.2em] mb-4">Our Reach & Clients</h5>
            <h2 className="text-4xl lg:text-5xl font-light">
              Worked with <span className="font-bold">250+</span> Clients <br />
              <span className="text-primary italic not-italic">Across The Globe</span>
            </h2>
          </div>
          <div className="relative w-full py-16 bg-gradient-to-br from-[#110a06] via-[#1a0a00] to-[#0d0603] flex flex-col items-center justify-center gap-8">
            <div className="text-8xl">🌍</div>
            <p className="text-2xl font-bold tracking-tight text-center max-w-2xl px-6">
              Active Trade Corridors in <span className="text-primary">40+ Countries</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl px-6">
              {["🇮🇳 India", "🇦🇪 UAE", "🇺🇸 USA", "🇬🇧 UK", "🇸🇬 Singapore", "🇩🇪 Germany", "🇦🇺 Australia", "🇯🇵 Japan"].map(c => (
                <span key={c} className="px-6 py-2 bg-white/5 border border-primary/20 rounded-full text-[13px] font-semibold text-white/70">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Client creative post grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Rajhans Textiles", emoji: "👗", bg: "from-[#f5e6d3] to-[#e8c9a8]", sub: "Textiles Export Partner" },
              { name: "AgroFresh Exports", emoji: "🌾", bg: "from-[#e6f5e6] to-[#b8dfb8]", sub: "Agriculture Partner" },
              { name: "PharmaBridge", emoji: "💊", bg: "from-[#e6ecf5] to-[#b8c9e8]", sub: "Pharma Export Partner" },
              { name: "MetalCraft India", emoji: "⚙️", bg: "from-[#f5f0e6] to-[#e8d8b8]", sub: "Engineering Partner" },
              { name: "SpicePath Ltd", emoji: "🌶️", bg: "from-[#f5ece6] to-[#e8c0a8]", sub: "Food Export Partner" },
              { name: "GemRoute", emoji: "💎", bg: "from-[#fdf5e6] to-[#f0d898]", sub: "Gems & Jewellery" },
              { name: "HerbsIndia", emoji: "🌿", bg: "from-[#e6f5ec] to-[#a8dfb8]", sub: "Organic Export Partner" },
              { name: "WeaveCraft", emoji: "🧵", bg: "from-[#f5e6ec] to-[#e8a8c0]", sub: "Handloom Export Partner" },
            ].map((p, i) => (
              <div 
                key={i} 
                className={`bg-gradient-to-br ${p.bg} aspect-[380/560] rounded-xl flex flex-col items-center justify-center gap-4 text-center p-6 border border-[#e8d5c8] hover:scale-[1.03] transition-transform cursor-default`}
              >
                <div className="text-5xl">{p.emoji}</div>
                <div>
                  <div className="font-bold text-[#2c1a10] text-lg">{p.name}</div>
                  <div className="text-[11px] font-bold text-[#6b5247]/70 uppercase tracking-widest mt-1">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-10 font-bold">
              <Link href="/portfolio">Our Client Portfolio</Link>
            </Button>
          </div>
        </section>

        {/* 8 & 9. Logo carousels */}
        <section className="py-4 bg-background">
          <LogoMarquee logos={["Rajhans Textiles", "AgroFresh Exports", "PharmaBridge", "SpicePath Ltd", "GemRoute", "MetalCraft India", "HerbsIndia", "WeaveCraft"]} direction="left" />
          <LogoMarquee logos={["NatureBridge", "TechExport Co", "PharmaLinks", "ExcelMetals", "SilkRoute", "CerealIndia", "DyeWorks", "EquipTrade", "CrystalSea", "SpiceKing"]} direction="right" />
        </section>

        {/* 10. Advertising arsenal heading + media grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              Strategic Tools, Measurable Growth <br />
              <span className="font-bold text-primary">Our Trade Infrastructure</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Anchor, title: "Ocean Freight Network" },
              { icon: Plane, title: "Air Cargo Solutions" },
              { icon: Building, title: "Bonded Warehousing" },
              { icon: FileText, title: "DGFT & Customs Portal" },
              { icon: Globe, title: "ICEGATE EDI Filing" },
              { icon: BarChart3, title: "Live Shipment Tracking" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-5 p-6 bg-muted/40 rounded-xl hover:bg-primary hover:text-[#0a0a0a] transition-all cursor-default group border border-transparent hover:border-primary">
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  <a.icon className="w-8 h-8 text-primary group-hover:text-[#0a0a0a]" />
                </div>
                <span className="font-bold text-foreground group-hover:text-[#0a0a0a] text-sm">{a.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Portfolio grid (3x2) */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-light mb-4 leading-tight">
                Strategic Work, Real Results <br />
                <span className="font-bold text-primary">Our Export Portfolio</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Rajhans Textiles", cat: "Textiles Export", emoji: "👗", bg: "#f5e6d3" },
                { name: "AgroFresh Exports", cat: "Agriculture", emoji: "🌾", bg: "#e6f5e6" },
                { name: "PharmaBridge", cat: "Pharmaceuticals", emoji: "💊", bg: "#e6ecf5" },
                { name: "MetalCraft India", cat: "Engineering Goods", emoji: "⚙️", bg: "#f5f0e6" },
                { name: "SpicePath Ltd", cat: "Food & Beverages", emoji: "🌶️", bg: "#f5ece6" },
                { name: "GemRoute", cat: "Gems & Jewellery", emoji: "💎", bg: "#fdf5e6" },
              ].map((p, i) => (
                <Link key={i} href="/portfolio" className="group relative aspect-[3/2] rounded-xl overflow-hidden shadow-lg border border-[#e8d5c8]">
                  <div style={{ backgroundColor: p.bg }} className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    {p.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{p.cat}</div>
                    <div className="text-white font-bold text-lg">{p.name}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="rounded-full px-10 font-bold">
                <Link href="/portfolio">Check Our Entire Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 12. Studio / content creation section */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 text-primary font-bold text-[11px] uppercase tracking-[0.3em] mb-4">
                <div className="w-8 h-[1px] bg-primary" /> Our Infrastructure
              </div>
              <h2 className="text-3xl font-light mb-6 leading-tight">
                A trade partner with <br />
                <span className="font-bold text-primary">In-house Compliance</span>
              </h2>
              <p className="text-muted-foreground text-[14px] leading-relaxed mb-8">
                We have built a dedicated team of licensed customs brokers, freight coordinators, and logistics specialists — all under one roof.
              </p>
              <Button asChild className="rounded-full font-bold">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            {[
              { emoji: "📦", title: "Cargo Handling", bg: "from-[#f5e6d3] to-[#e8c9a8]" },
              { emoji: "✈️", title: "Air Freight", bg: "from-[#e6ecf5] to-[#b8c9e8]" },
              { emoji: "🚢", title: "Sea Freight", bg: "from-[#e6f5e6] to-[#b8dfb8]" },
            ].map((v, i) => (
              <div key={i} className="group relative">
                <div className={`aspect-[9/16] bg-gradient-to-br ${v.bg} rounded-xl flex flex-col items-center justify-center gap-6 shadow-xl border border-[#e8d5c8] overflow-hidden`}>
                  <div className="text-6xl z-10">{v.emoji}</div>
                  <div className="absolute bottom-6 left-0 right-0 text-center z-10">
                    <div className="text-[#2c1a10] font-bold uppercase text-[12px] tracking-widest">{v.title}</div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <Play className="w-10 h-10 text-white opacity-0 group-hover:opacity-70 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 13. Blog section */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 bg-background">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              Latest from <span className="font-bold text-primary">Trade Desk Blog</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cat: "Export Tips", title: "How to Navigate New Customs Regulations in 2024", date: "Mar 12, 2024", emoji: "📋", bg: "#f5e6d3" },
              { cat: "Logistics", title: "Sea vs Air Freight: Making the Right Choice for Your Cargo", date: "Feb 28, 2024", emoji: "🚢", bg: "#e6ecf5" },
              { cat: "Industry News", title: "India&apos;s Export Opportunities: Sectors to Watch in 2024", date: "Feb 14, 2024", emoji: "🌍", bg: "#e6f5e6" },
            ].map((blog, i) => (
              <Link key={i} href="/blog" className="group bg-white border border-[#e8d5c8] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div style={{ backgroundColor: blog.bg }} className="aspect-video flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                  {blog.emoji}
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">{blog.cat}</div>
                  <h3 className="text-lg font-bold mb-4 leading-tight group-hover:text-primary transition-colors">{blog.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold">
                    <Clock className="w-4 h-4" /> {blog.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all">
              <Link href="/blog">See All Blogs</Link>
            </Button>
          </div>
        </section>

        {/* 14. Contact form section */}
        <section className="py-24 bg-about-gradient">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                <span className="font-bold text-primary">Get in touch</span> with us for <br />
                our Global Trade Services
              </h2>
            </div>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 bg-white p-10 rounded-2xl shadow-xl border border-[#e0d0c8]">
                <h3 className="text-2xl font-bold mb-2">Request a Quote</h3>
                <p className="text-muted-foreground text-[13.5px] mb-8">Fill in the details and our trade expert will respond within 2 hours.</p>
                
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Full Name *" />
                    <input type="email" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Email Address *" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="tel" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Contact Number *" />
                    <input type="url" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Company Website" />
                  </div>
                  <input type="text" className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Company Name *" />
                  <textarea className="w-full bg-[#fdf6f2] border border-[#e0d0c8] rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[120px]" placeholder="Describe your requirement in detail..."></textarea>
                  <Button className="w-full h-14 rounded-lg text-base font-bold shadow-lg shadow-primary/25">Send Message</Button>
                </form>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-[#0a0a0a] text-white p-10 rounded-2xl shadow-xl flex flex-col gap-8 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">📞 +91 98765 43210</h3>
                    <p className="text-white/40 text-[13.5px]">Available Monday–Saturday, 9am–6pm IST</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Head Office</div>
                        <div className="text-[13.5px] text-white/80">Nariman Point, Mumbai 400 021</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Email Us</div>
                        <div className="text-[13.5px] text-white/80">info@shyamaoverseas.com</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Follow Us</div>
                    <div className="flex gap-3">
                      {["🔗", "📘", "🐦", "📸", "▶️"].map((ic, i) => (
                        <button key={i} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                          {ic}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-widest mb-4">Certifications</div>
                  <p className="text-muted-foreground text-[12.5px] leading-relaxed">
                    📋 IEC Registered &nbsp;|&nbsp; ✅ ISO 9001:2015<br />
                    🏆 FIEO Member &nbsp;|&nbsp; ⚖️ CHA Licensed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}