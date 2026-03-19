"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatsCounter } from "@/components/home/StatsCounter";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Award, CheckCircle, Package, Anchor, Plane, Building, FileText, BarChart3, Clock } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* 1. Full-width banner image */}
        <section className="relative w-full h-screen min-h-[700px] flex items-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://picsum.photos/seed/shyama1/1920/1080" 
              alt="Shyama Banner" 
              fill 
              className="object-cover brightness-[0.25]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* 2. H1 title + Badges */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Globe className="w-3 h-3" /> Trusted Global Network
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
                India's Gateway to <br />
                <span className="text-primary">Global Markets</span>
              </h1>
              <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
                Shyama Overseas delivers world-class freight forwarding, customs clearance, and supply chain solutions — connecting Indian businesses to 40+ countries worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full h-14 px-8 font-bold text-base shadow-xl shadow-primary/20">
                  Get a Free Quote
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-14 px-8 font-bold text-base bg-white/5 border-white/20 text-white hover:bg-white/10">
                  Our Services
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="w-48 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center group hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">IEC Registered</div>
                <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">Govt. of India</div>
              </div>
              <div className="w-48 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center group hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">FIEO Member</div>
                <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">Export Excellence</div>
              </div>
              <div className="w-48 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center group hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">ISO 9001:2015</div>
                <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">Certified Agency</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About section (left text + right image) */}
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-4 text-primary font-black text-xs uppercase tracking-widest mb-4">
                <div className="w-8 h-[2px] bg-primary" /> About Shyama Overseas
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                Helping Clients <span className="text-primary">Build Global Trade Presence</span> Since 2005
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2005, we are one of India's leading International Trade & Logistics Agencies. From a single Mumbai office to a pan-India network handling 15,000+ shipments annually.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our journey is built on trust, compliance, and an unwavering commitment to our clients' growth.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 font-bold text-primary group">
                Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="https://picsum.photos/seed/shyama2/800/600" 
                alt="About Shyama" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-6 right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-black leading-none">19+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Stats bar */}
        <section className="bg-foreground py-0">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
            <StatsCounter target={250} suffix="+" label="Clients Served" />
            <StatsCounter target={40} suffix="+" label="Countries Reached" />
            <StatsCounter target={19} suffix="+" label="Years Experience" />
            <StatsCounter target={15000} suffix="+" label="Shipments Handled" />
          </div>
        </section>

        {/* 5. Services section */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Our <span className="text-primary">Trade & Logistics</span> Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions designed to streamline your international trade operations and fuel your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Freight Forwarding", desc: "End-to-end freight solutions across air, sea & land." },
              { icon: Anchor, title: "Sea Freight", desc: "FCL & LCL ocean shipments. Global carrier network." },
              { icon: Building, title: "Warehousing", desc: "Pan-India storage hubs, pick-and-pack management." },
              { icon: FileText, title: "Customs Clearance", desc: "Licensed CHAs handle all documentation & compliance." },
              { icon: Package, title: "Supply Chain", desc: "Integrated procurement-to-delivery visibility." },
              { icon: Globe, title: "Export Consulting", desc: "Market entry strategy & regulatory guidance." },
              { icon: ShieldCheck, title: "Cargo Insurance", desc: "Comprehensive risk coverage for your goods." },
              { icon: BarChart3, title: "Live Tracking", desc: "Real-time visibility into your shipment status." },
            ].map((svc, i) => (
              <Link 
                key={i} 
                href="/services" 
                className="bg-card border border-border/50 p-8 rounded-2xl hover:bg-primary group transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <svc.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 transition-colors">{svc.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="rounded-full px-8 font-bold">View All Services</Button>
          </div>
        </section>

        {/* 6. Clients heading + World Map */}
        <section className="bg-foreground py-24 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16 relative z-10">
            <h5 className="text-primary font-black text-xs uppercase tracking-widest mb-4">Our Reach & Clients</h5>
            <h2 className="text-4xl lg:text-6xl font-black">
              Worked with <span className="text-primary">250+ Clients</span> <br />
              Across The Globe
            </h2>
          </div>
          <div className="relative w-full aspect-[21/9] max-w-5xl mx-auto flex items-center justify-center">
            <div className="text-9xl opacity-10 font-black absolute inset-0 flex items-center justify-center">WORLD REACH</div>
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="text-8xl animate-bounce">🌍</div>
              <p className="text-2xl font-bold tracking-tight text-center max-w-2xl">
                Active Trade Corridors in <span className="text-primary">40+ Countries</span>
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["🇮🇳 India", "🇦🇪 UAE", "🇺🇸 USA", "🇬🇧 UK", "🇸🇬 Singapore", "🇩🇪 Germany", "🇦🇺 Australia", "🇯🇵 Japan"].map(c => (
                  <span key={c} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Client creative post grid (2 rows x 4) */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Rajhans Textiles", emoji: "👗", color: "bg-amber-100", sub: "Textiles Export Partner" },
              { name: "AgroFresh Exports", emoji: "🌾", color: "bg-emerald-100", sub: "Agriculture Partner" },
              { name: "PharmaBridge", emoji: "💊", color: "bg-blue-100", sub: "Pharma Export Partner" },
              { name: "MetalCraft India", emoji: "⚙️", color: "bg-slate-100", sub: "Engineering Partner" },
              { name: "SpicePath Ltd", emoji: "🌶️", color: "bg-orange-100", sub: "Food Export Partner" },
              { name: "GemRoute", emoji: "💎", color: "bg-indigo-100", sub: "Gems & Jewellery" },
              { name: "HerbsIndia", emoji: "🌿", color: "bg-lime-100", sub: "Organic Partner" },
              { name: "WeaveCraft", emoji: "🧵", color: "bg-rose-100", sub: "Handloom Partner" },
            ].map((p, i) => (
              <div 
                key={i} 
                className={`${p.color} aspect-[3/4] rounded-2xl flex flex-col items-center justify-center gap-4 text-center p-6 border border-black/5 hover:scale-[1.02] transition-transform cursor-default group`}
              >
                <div className="text-6xl group-hover:scale-110 transition-transform">{p.emoji}</div>
                <div>
                  <div className="font-black text-foreground text-lg">{p.name}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8 & 9. Logo carousels */}
        <section className="py-12 bg-secondary/20">
          <LogoMarquee logos={["Rajhans Textiles", "AgroFresh Exports", "PharmaBridge", "SpicePath Ltd", "GemRoute", "MetalCraft India", "HerbsIndia", "WeaveCraft"]} direction="left" />
          <LogoMarquee logos={["NatureBridge", "TechExport Co", "PharmaLinks", "ExcelMetals", "SilkRoute", "CerealIndia", "DyeWorks", "EquipTrade"]} direction="right" />
        </section>

        {/* 10. Advertising arsenal heading + media grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
              Strategic Tools, Measurable Growth <br />
              <span className="text-primary">Our Trade Infrastructure</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Anchor, title: "Ocean Freight Network" },
              { icon: Plane, title: "Air Cargo Solutions" },
              { icon: Building, title: "Bonded Warehousing" },
              { icon: FileText, title: "DGFT & Customs Portal" },
              { icon: CheckCircle, title: "ICEGATE EDI Filing" },
              { icon: BarChart3, title: "Live Shipment Tracking" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-muted/40 rounded-xl border border-transparent hover:border-primary/30 transition-all cursor-default group">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                  <a.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-foreground">{a.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Portfolio grid (3x2) */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                Strategic Work, <span className="text-primary">Real Results</span>
              </h2>
              <p className="text-muted-foreground">Check our latest successful shipments and trade projects.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rajhans Textiles", cat: "Textiles Export", emoji: "👗", bg: "bg-amber-100" },
                { name: "AgroFresh Exports", cat: "Agriculture", emoji: "🌾", bg: "bg-emerald-100" },
                { name: "PharmaBridge", cat: "Pharmaceuticals", emoji: "💊", bg: "bg-blue-100" },
                { name: "MetalCraft India", cat: "Engineering Goods", emoji: "⚙️", bg: "bg-slate-100" },
                { name: "SpicePath Ltd", cat: "Food & Beverages", emoji: "🌶️", bg: "bg-orange-100" },
                { name: "GemRoute", cat: "Gems & Jewellery", emoji: "💎", bg: "bg-indigo-100" },
              ].map((p, i) => (
                <div key={i} className="group relative aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                  <div className={`absolute inset-0 ${p.bg} flex items-center justify-center text-7xl`}>
                    {p.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{p.cat}</div>
                    <div className="text-white font-bold text-lg">{p.name}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="rounded-full px-8 font-bold">Check Our Entire Portfolio</Button>
            </div>
          </div>
        </section>

        {/* 12. Studio / content creation section */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 text-primary font-black text-xs uppercase tracking-widest mb-4">
                <div className="w-8 h-[2px] bg-primary" /> Infrastructure
              </div>
              <h2 className="text-3xl font-black mb-6 leading-tight">
                A trade partner with <br />
                <span className="text-primary">In-house Compliance</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                We have built a dedicated team of licensed customs brokers, freight coordinators, and logistics specialists — all under one roof.
              </p>
              <Button variant="default" className="rounded-full font-bold">Explore Services</Button>
            </div>
            {[
              { emoji: "📦", title: "Cargo Handling", bg: "bg-amber-100" },
              { emoji: "✈️", title: "Air Freight", bg: "bg-blue-100" },
              { emoji: "🚢", title: "Sea Freight", bg: "bg-emerald-100" },
            ].map((v, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`aspect-[9/16] ${v.bg} rounded-3xl flex flex-col items-center justify-center gap-6 shadow-xl border-4 border-white overflow-hidden relative`}>
                  <div className="text-7xl animate-pulse">{v.emoji}</div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                      <ArrowRight className="text-foreground w-8 h-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <div className="text-foreground font-black uppercase text-xs tracking-widest">{v.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 13. Blog section */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Latest from <span className="text-primary">Trade Desk Blog</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cat: "Export Tips", title: "How to Navigate New Customs Regulations in 2024", date: "Mar 12, 2024", emoji: "📋", bg: "bg-amber-100" },
              { cat: "Logistics", title: "Sea vs Air Freight: Making the Right Choice", date: "Feb 28, 2024", emoji: "🚢", bg: "bg-blue-100" },
              { cat: "Industry News", title: "India's Export Opportunities: Sectors to Watch", date: "Feb 14, 2024", emoji: "🌍", bg: "bg-emerald-100" },
            ].map((blog, i) => (
              <div key={i} className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className={`aspect-video ${blog.bg} flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500`}>
                  {blog.emoji}
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">{blog.cat}</div>
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">{blog.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold">
                    <Clock className="w-4 h-4" /> {blog.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-primary text-primary hover:bg-primary hover:text-white">
              See All Blogs
            </Button>
          </div>
        </section>

        {/* 14. Contact form section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="text-primary">Get in touch</span> with us for <br />
                our Global Trade Services
              </h2>
            </div>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 bg-card p-10 rounded-3xl shadow-xl border border-border">
                <h3 className="text-2xl font-black mb-2">Request a Quote</h3>
                <p className="text-muted-foreground text-sm mb-8">Fill in the details and our trade expert will respond within 2 hours.</p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Full Name *</label>
                      <input type="text" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email Address *</label>
                      <input type="email" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Contact Number *</label>
                      <input type="tel" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="+91 00000 00000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Company Website</label>
                      <input type="url" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="www.example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Company Name *</label>
                    <input type="text" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Requirement Details</label>
                    <textarea className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[150px]" placeholder="Describe your requirement in detail..."></textarea>
                  </div>
                  <Button className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20">Send Message</Button>
                </form>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-foreground text-white p-10 rounded-3xl shadow-xl flex flex-col gap-8 flex-1">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Contact Info</h3>
                    <p className="text-white/40 text-sm">Mon–Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <Globe className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Head Office</div>
                        <div className="text-sm text-white/80">Nariman Point, Mumbai 400 021, India</div>
                      </div>
                    </div>
                    <div className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <Award className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Email Us</div>
                        <div className="text-sm text-white/80">info@shyamaoverseas.com</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">Follow Our Journey</div>
                    <div className="flex gap-4">
                      {["🔗", "📘", "🐦", "📸"].map((ic, i) => (
                        <button key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                          {ic}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl">
                  <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Our Network</div>
                  <div className="flex flex-wrap gap-2">
                    {["Delhi", "Surat", "Bangalore", "Chennai", "Kolkata", "Ahmedabad"].map(city => (
                      <span key={city} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-muted-foreground border border-border/50">
                        {city}
                      </span>
                    ))}
                  </div>
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