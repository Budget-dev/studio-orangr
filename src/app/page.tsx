"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatsCounter } from "@/components/home/StatsCounter";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Award, Package, Anchor, Plane, Building, FileText, BarChart3, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="animate-in fade-in duration-700">
        {/* 1. Full-width banner image */}
        <section className="relative w-full h-[700px] mt-[85px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src={heroImg?.imageUrl || ""} 
              alt={heroImg?.description || "Hero"} 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-20" />
          </div>

          <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* 2. H1 title + Badges */}
            <div className="animate-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-[11px] font-bold uppercase tracking-[0.25em] mb-6 backdrop-blur-sm">
                <Globe className="w-3.5 h-3.5" /> Trusted Since 2005
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
                India's Gateway to <br />
                <span className="text-primary italic font-light">Global Markets</span>
              </h1>
              <p className="text-white/70 text-lg mb-10 max-w-lg leading-relaxed">
                Shyama Overseas delivers world-class freight forwarding, customs clearance, and supply chain solutions — connecting Indian businesses to 40+ countries worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-10 font-bold text-base shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 font-bold text-base bg-white/5 border-white/20 text-white hover:border-primary hover:text-primary backdrop-blur-md transition-all">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-6 animate-in slide-in-from-right-8 duration-700">
              <div className="w-56 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center group hover:bg-primary/10 transition-all duration-500 hover:-translate-x-2">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">IEC Registered</div>
                <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">Govt. of India</div>
              </div>
              <div className="w-56 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center group hover:bg-primary/10 transition-all duration-500 hover:-translate-x-4">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">FIEO Member</div>
                <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">Export Excellence</div>
              </div>
              <div className="w-56 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center group hover:bg-primary/10 transition-all duration-500 hover:-translate-x-2">
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-white font-bold text-sm">ISO 9001:2015</div>
                <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">Certified Agency</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About section (left text + right image) */}
        <section className="py-32 bg-about-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-4 text-primary font-bold text-[11px] uppercase tracking-[0.3em] mb-4">
                <div className="w-12 h-[1px] bg-primary" /> About Shyama Overseas
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
                Helping Clients <span className="font-bold text-foreground">Build Global</span> <br />
                <span className="font-bold text-primary">Trade Presence</span> Since 2005
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2005, we are one of India's leading International Trade & Logistics Agencies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From a single Mumbai office to a pan-India network handling 15,000+ shipments annually — our journey is built on trust, compliance, and an unwavering commitment to our clients' growth.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 font-bold text-primary group hover:gap-6 transition-all">
                Read More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white">
              <Image 
                src={aboutImg?.imageUrl || ""} 
                alt={aboutImg?.description || "About"} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-6 right-6 bg-primary text-white p-8 rounded-2xl shadow-2xl text-center min-w-[160px] animate-bounce-slow">
                <div className="text-4xl font-black leading-none">19+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-2">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Stats bar */}
        <section className="bg-foreground py-0">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
            <StatsCounter target={250} suffix="+" label="Clients Served" />
            <StatsCounter target={40} suffix="+" label="Countries Reached" />
            <StatsCounter target={19} suffix=" Yrs" label="Experience" />
            <StatsCounter target={15000} suffix="+" label="Shipments Handled" />
          </div>
        </section>

        {/* 5. Services section */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              Our <span className="font-bold text-primary">Trade & Logistics</span> Services
            </h2>
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs">Empowering Global Growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Freight Forwarding", desc: "End-to-end multi-modal solutions." },
              { icon: Anchor, title: "Sea Freight", desc: "FCL & LCL global ocean transit." },
              { icon: Building, title: "Warehousing", desc: "Hub storage & pick-and-pack." },
              { icon: FileText, title: "Customs Clearance", desc: "Licensed CHA & port compliance." },
              { icon: Package, title: "Supply Chain", desc: "Full procurement visibility." },
              { icon: Globe, title: "Export Consulting", desc: "Strategy & regulatory guidance." },
              { icon: CheckCircle2, title: "Cargo Insurance", desc: "Comprehensive risk protection." },
              { icon: BarChart3, title: "All Services", desc: "Explore our full service suite." },
            ].map((svc, i) => (
              <Link 
                key={i} 
                href="/services" 
                className="bg-secondary/50 p-8 rounded-2xl hover:bg-primary group transition-all duration-500 relative overflow-hidden border border-transparent hover:border-primary shadow-sm hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <svc.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 transition-colors mb-6">{svc.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:text-white transition-colors">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. Clients Reach & Map */}
        <section className="bg-foreground py-32 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-20 relative z-10">
            <h5 className="text-[13px] font-bold text-primary uppercase tracking-[0.4em] mb-4">Our Reach & Clients</h5>
            <h2 className="text-4xl lg:text-5xl font-light">
              Worked with <span className="font-bold">250+</span> Clients <br />
              <span className="text-primary italic font-light">Across The Globe</span>
            </h2>
          </div>
          <div className="relative w-full py-16 bg-gradient-to-br from-[#110a06] via-[#1a0a00] to-[#0d0603] flex flex-col items-center justify-center gap-12 border-y border-white/5">
            <div className="text-9xl animate-pulse">🌍</div>
            <p className="text-2xl font-bold tracking-tight text-center max-w-2xl px-6">
              Active Trade Corridors in <span className="text-primary">40+ Countries</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl px-6">
              {["🇮🇳 India", "🇦🇪 UAE", "🇺🇸 USA", "🇬🇧 UK", "🇸🇬 Singapore", "🇩🇪 Germany", "🇦🇺 Australia", "🇯🇵 Japan"].map(c => (
                <span key={c} className="px-8 py-3 bg-white/5 border border-primary/30 rounded-full text-sm font-semibold text-white/80 backdrop-blur-md hover:bg-primary/20 hover:text-white transition-all cursor-default">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Client creative post grid */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rajhans Textiles", emoji: "👗", bg: "from-[#f5e6d3] to-[#e8c9a8]", sub: "Textiles Partner" },
              { name: "AgroFresh Exports", emoji: "🌾", bg: "from-[#e6f5e6] to-[#b8dfb8]", sub: "Agri Partner" },
              { name: "PharmaBridge", emoji: "💊", bg: "from-[#e6ecf5] to-[#b8c9e8]", sub: "Pharma Partner" },
              { name: "MetalCraft India", emoji: "⚙️", bg: "from-[#f5f0e6] to-[#e8d8b8]", sub: "Eng. Partner" },
              { name: "SpicePath Ltd", emoji: "🌶️", bg: "from-[#f5ece6] to-[#e8c0a8]", sub: "Food Partner" },
              { name: "GemRoute", emoji: "💎", bg: "from-[#fdf5e6] to-[#f0d898]", sub: "Gems Partner" },
              { name: "HerbsIndia", emoji: "🌿", bg: "from-[#e6f5ec] to-[#a8dfb8]", sub: "Organic Partner" },
              { name: "WeaveCraft", emoji: "🧵", bg: "from-[#f5e6ec] to-[#e8a8c0]", sub: "Handloom Partner" },
            ].map((p, i) => (
              <div 
                key={i} 
                className={`bg-gradient-to-br ${p.bg} aspect-[4/5] rounded-[1.5rem] flex flex-col items-center justify-center gap-6 text-center p-8 border border-white/50 shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default group`}
              >
                <div className="text-6xl group-hover:scale-125 transition-transform duration-500">{p.emoji}</div>
                <div>
                  <div className="font-bold text-foreground text-lg">{p.name}</div>
                  <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em] mt-2">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" className="rounded-full px-12 font-bold shadow-xl shadow-primary/20">
              <Link href="/portfolio">Our Client Portfolio</Link>
            </Button>
          </div>
        </section>

        {/* 8 & 9. Logo carousels */}
        <section className="py-12 bg-secondary/30">
          <LogoMarquee logos={["Rajhans Textiles", "AgroFresh Exports", "PharmaBridge", "SpicePath Ltd", "GemRoute", "MetalCraft India", "HerbsIndia", "WeaveCraft"]} direction="left" />
          <LogoMarquee logos={["NatureBridge", "TechExport Co", "PharmaLinks", "ExcelMetals", "SilkRoute", "CerealIndia", "DyeWorks", "EquipTrade", "CrystalSea", "SpiceKing"]} direction="right" />
        </section>

        {/* 10. Advertising arsenal heading + media grid */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Strategic Tools, Measurable Growth <br />
              <span className="font-bold text-primary">Our Trade Infrastructure</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Anchor, title: "Ocean Freight Network" },
              { icon: Plane, title: "Air Cargo Solutions" },
              { icon: Building, title: "Bonded Warehousing" },
              { icon: FileText, title: "DGFT & Customs Portal" },
              { icon: Globe, title: "ICEGATE EDI Filing" },
              { icon: BarChart3, title: "Live Shipment Tracking" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-secondary/50 rounded-2xl hover:bg-primary hover:text-white transition-all duration-500 cursor-default group border border-transparent hover:shadow-2xl hover:shadow-primary/20">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-white/20">
                  <a.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <span className="font-bold text-foreground group-hover:text-white text-base">{a.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Portfolio grid (3x2) */}
        <section className="py-32 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-20 text-center">
              <h2 className="text-4xl lg:text-5xl font-light mb-4">
                Strategic Work, <span className="font-bold text-primary">Real Results</span>
              </h2>
              <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Case Studies & Successes</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rajhans Textiles", cat: "Textiles Export", emoji: "👗", bg: "#f5e6d3" },
                { name: "AgroFresh Exports", cat: "Agriculture", emoji: "🌾", bg: "#e6f5e6" },
                { name: "PharmaBridge", cat: "Pharmaceuticals", emoji: "💊", bg: "#e6ecf5" },
                { name: "MetalCraft India", cat: "Engineering", emoji: "⚙️", bg: "#f5f0e6" },
                { name: "SpicePath Ltd", cat: "Food & Bev", emoji: "🌶️", bg: "#f5ece6" },
                { name: "GemRoute", cat: "Gems & Jewellery", emoji: "💎", bg: "#fdf5e6" },
              ].map((p, i) => (
                <Link key={i} href="/portfolio" className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border-2 border-white">
                  <div style={{ backgroundColor: p.bg }} className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-700">
                    {p.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-2">{p.cat}</div>
                    <div className="text-white font-bold text-2xl">{p.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 12. In-house Compliance Section */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 text-primary font-bold text-[11px] uppercase tracking-[0.4em] mb-4">
                <div className="w-10 h-[1px] bg-primary" /> Our Infrastructure
              </div>
              <h2 className="text-3xl font-light mb-6 leading-tight">
                A trade partner with <br />
                <span className="font-bold text-primary">In-house Compliance</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                We have built a dedicated team of licensed customs brokers, freight coordinators, and logistics specialists.
              </p>
              <Button asChild className="rounded-full font-bold px-8">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            {[
              { emoji: "📦", title: "Cargo Handling", bg: "from-[#f5e6d3] to-[#e8c9a8]" },
              { emoji: "✈️", title: "Air Freight", bg: "from-[#e6ecf5] to-[#b8c9e8]" },
              { emoji: "🚢", title: "Sea Freight", bg: "from-[#e6f5e6] to-[#b8dfb8]" },
            ].map((v, i) => (
              <div key={i} className="group relative">
                <div className={`aspect-[9/16] bg-gradient-to-br ${v.bg} rounded-[2rem] flex flex-col items-center justify-center gap-6 shadow-2xl border-4 border-white overflow-hidden`}>
                  <div className="text-7xl z-10 group-hover:scale-125 transition-transform duration-700">{v.emoji}</div>
                  <div className="absolute bottom-8 left-0 right-0 text-center z-10">
                    <div className="text-foreground font-bold uppercase text-xs tracking-[0.3em]">{v.title}</div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 13. Blog section */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20 flex items-end justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light">
                Latest from <span className="font-bold text-primary italic">Trade Desk</span>
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-primary font-bold hover:bg-primary/5 rounded-full px-8">
              <Link href="/blog">View All Articles →</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cat: "Export Tips", title: "Navigating New Customs Regulations in 2024", date: "Mar 12, 2024", emoji: "📋", bg: "#f5e6d3" },
              { cat: "Logistics", title: "Sea vs Air Freight: Choosing the Right Path", date: "Feb 28, 2024", emoji: "🚢", bg: "#e6ecf5" },
              { cat: "Industry", title: "India's Export Opportunities: Sectors to Watch", date: "Feb 14, 2024", emoji: "🌍", bg: "#e6f5e6" },
            ].map((blog, i) => (
              <Link key={i} href="/blog" className="group bg-white border-2 border-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div style={{ backgroundColor: blog.bg }} className="aspect-video flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-700">
                  {blog.emoji}
                </div>
                <div className="p-10">
                  <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{blog.cat}</div>
                  <h3 className="text-xl font-bold mb-6 leading-tight group-hover:text-primary transition-colors">{blog.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest">
                    {blog.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 14. Contact form section */}
        <section className="py-32 bg-foreground text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                <span className="font-bold text-primary">Get in touch</span> for <br />
                Global Trade Expertise
              </h2>
              <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Response Guaranteed within 2 Hours</p>
            </div>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/30" placeholder="Full Name *" />
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/30" placeholder="Email Address *" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/30" placeholder="Contact Number *" />
                    <input type="url" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/30" placeholder="Company Website" />
                  </div>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/30" placeholder="Company Name *" />
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-white/30 min-h-[160px]" placeholder="Describe your requirement in detail..."></textarea>
                  <Button className="w-full h-16 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-transform">Send Message</Button>
                </form>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-primary/10 p-12 rounded-[2.5rem] border border-primary/20 flex flex-col gap-10 flex-1">
                  <div>
                    <h3 className="text-3xl font-black mb-2 text-primary">📞 +91 98765 43210</h3>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Monday–Saturday, 9am–6pm IST</p>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <Globe className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Head Office</div>
                        <div className="text-base text-white/80 font-medium">Nariman Point, Mumbai 400 021</div>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <Award className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Email Us</div>
                        <div className="text-base text-white/80 font-medium">info@shyamaoverseas.com</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-10 border-t border-white/10">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-6">Follow Our Journey</div>
                    <div className="flex gap-4">
                      {["🔗", "📘", "🐦", "📸", "▶️"].map((ic, i) => (
                        <button key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-xl">
                          {ic}
                        </button>
                      ))}
                    </div>
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