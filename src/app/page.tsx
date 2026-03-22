"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  Anchor, 
  Ship, 
  Package, 
  ClipboardCheck, 
  Globe, 
  Briefcase, 
  Handshake, 
  BarChart3, 
  Plus,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  ArrowRight,
  Menu,
  X,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── DATA ── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/portfolio" },
  { label: "Sectors", href: "/sectors" },
  { label: "Blogs", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const STATS = [
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Clients Served", value: 250, suffix: "+" },
  { label: "Product Categories", value: 50, suffix: "+" },
  { label: "Countries Reached", value: 35, suffix: "+" },
];

const SERVICES = [
  { icon: Ship, title: "Export Management", desc: "End-to-end export documentation and logistics management." },
  { icon: Package, title: "Import Solutions", desc: "Seamless import coordination and specialized customs clearance." },
  { icon: ClipboardCheck, title: "Trade Compliance", desc: "DGFT, IEC, and regulatory compliance support for all trades." },
  { icon: Globe, title: "Global Sourcing", desc: "Connecting you with verified global suppliers and distributors." },
  { icon: Briefcase, title: "B2B Trade Facilitation", desc: "Business-to-business deal structuring and expert negotiation." },
  { icon: Handshake, title: "Buyer-Seller Connect", desc: "Matchmaking between top exporters and international buyers." },
  { icon: BarChart3, title: "Market Intelligence", desc: "Trade data, deep market research, and competitor analysis." },
  { icon: Plus, title: "All Services →", desc: "View our complete range of specialized trade services.", isCTA: true },
];

const CLIENT_LOGOS = [
  "Tata Steel", "Reliance", "Adani Ports", "Maersk", "DHL", "FedEx", 
  "AgroFresh", "PharmaBridge", "MetalCraft", "SpicePath", "GemRoute", "HerbsIndia"
];

const PLATFORMS = ["IndiaMART", "Alibaba", "TradeIndia", "ExportHub", "Amazon Global Selling", "DGFT Portal"];

const BLOGS = [
  { title: "How to Start Exporting from India: A Step-by-Step Guide", image: "https://picsum.photos/seed/blog1/600/400" },
  { title: "Top 10 Products India Exports to the Middle East in 2025", image: "https://picsum.photos/seed/blog2/600/400" },
  { title: "How to Select the Right International Freight Forwarder", image: "https://picsum.photos/seed/blog3/600/400" },
];

const SECTORS = [
  "Agriculture & Food Products", "Textiles & Apparel", "Chemicals & Petrochemicals", 
  "Pharmaceuticals", "FMCG & Consumer Goods", "Handicrafts & Home Décor", 
  "Engineering Goods", "Gems & Jewellery", "IT & Software Services"
];

/* ── COMPONENTS ── */

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(ease * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="stat p-10 text-center border-r border-white/10 last:border-none">
      <div className="text-5xl font-bold text-accent mb-2">{count}{suffix}</div>
      <div className="text-white/60 text-sm font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
}

function LogoMarquee({ direction = "left", logos }: { direction?: "left" | "right", logos: string[] }) {
  const items = [...logos, ...logos, ...logos];
  return (
    <div className="carousel-wrap overflow-hidden py-8">
      <div className={cn(
        "flex gap-8 w-max",
        direction === "left" ? "animate-marquee-ltr" : "animate-marquee-rtl"
      )}>
        {items.map((logo, i) => (
          <div key={i} className="c-slide border border-accent/20 rounded-2xl bg-white px-12 py-6 shadow-sm flex items-center justify-center min-w-[200px]">
            <span className="text-primary font-bold text-lg whitespace-nowrap">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── MAIN PAGE ── */

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      
      {/* 1. STICKY NAVBAR */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-6 lg:px-12 flex items-center justify-between",
        isScrolled ? "h-16 bg-primary shadow-xl" : "h-[85px] bg-transparent"
      )}>
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-black text-xl text-white">S</div>
          <div className="flex flex-col">
            <span className="text-white font-bold leading-tight">Shyam Overseas</span>
            <span className="text-[10px] text-accent font-semibold uppercase tracking-widest">Global Trade Partner</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <Link href={link.href} className="text-white/90 hover:text-accent font-semibold text-sm transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden lg:block bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all">
          Our Profile →
        </Link>

        <button className="lg:hidden text-white" onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}>
          {isMobMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-primary z-[999] transition-transform duration-300 lg:hidden p-6",
        isMobMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link key={link.label} href={link.href} className="text-white text-lg font-medium border-b border-white/5 pb-4" onClick={() => setIsMobMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <main>
        
        {/* 2. HERO SECTION */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/60 z-10" />
          <Image 
            src="https://picsum.photos/seed/tradehero/1920/1080" 
            alt="Trade Port" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 trade-grid-texture z-[11] opacity-20" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="text-accent font-black uppercase tracking-[4px] mb-6">We are your</div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8">
                <span className="heading-highlight">GLOBAL TRADE</span><br />
                <span className="heading-highlight">MAESTROS</span>
              </h1>
              <p className="text-xl text-white/80 font-medium leading-relaxed mb-10 max-w-xl">
                Crafting Your Legacy of International Commerce with Precision, Compliance, and Unmatched Efficiency.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-accent text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider hover:scale-105 transition-transform">Get Started</Link>
                <Link href="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider hover:bg-white/20 transition-all">Explore Services</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. TRUST BADGES */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <h3 className="text-xl font-bold text-primary flex items-center gap-4">
              <span className="w-12 h-1 bg-accent" />
              India's Leading Import-Export Agency
            </h3>
            <div className="flex gap-6 flex-wrap justify-center">
              {["IEC Registered", "FIEO Member", "ISO Certified", "DGFT Compliant"].map(badge => (
                <div key={badge} className="px-6 py-4 border border-accent/20 rounded-xl font-bold text-sm text-primary hover:border-accent transition-colors">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ABOUT SECTION */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-accent font-bold mb-4">
                <span className="text-2xl">_</span> ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Helping Clients Build <span className="text-accent">Global Trade Networks</span> Since 2014
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Founded in 2014, we are one of the leading Import-Export companies in India, connecting businesses across continents with reliable, compliant, and efficient trade solutions. Our expertise spans continents and categories.
              </p>
              <Link href="/about" className="group flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
                Read More <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <Image src="https://picsum.photos/seed/office1/400/600" alt="Office" width={400} height={600} className="rounded-2xl object-cover shadow-2xl" />
              </div>
              <div className="space-y-4">
                <Image src="https://picsum.photos/seed/port1/400/600" alt="Port" width={400} height={600} className="rounded-2xl object-cover shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. STATS BAR */}
        <section className="bg-primary">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
            {STATS.map(stat => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        {/* 6. SERVICES GRID */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Trade & Export Services</h2>
              <p className="text-accent font-bold uppercase tracking-widest">Your Instruments</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((svc, i) => (
                <motion.div 
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-8 rounded-2xl transition-all duration-300 group cursor-pointer",
                    svc.isCTA ? "border-2 border-accent hover:bg-accent" : "bg-white hover:shadow-2xl hover:-translate-y-2"
                  )}
                >
                  <svc.icon className={cn(
                    "w-12 h-12 mb-6 group-hover:scale-110 transition-transform",
                    svc.isCTA ? "text-accent group-hover:text-white" : "text-accent"
                  )} />
                  <h3 className={cn(
                    "text-xl font-bold mb-4",
                    svc.isCTA ? "text-primary group-hover:text-white" : "text-primary"
                  )}>{svc.title}</h3>
                  <p className={cn(
                    "text-sm mb-6",
                    svc.isCTA ? "text-muted-foreground group-hover:text-white/80" : "text-muted-foreground"
                  )}>{svc.desc}</p>
                  <ArrowRight className={cn(
                    "w-5 h-5",
                    svc.isCTA ? "text-accent group-hover:text-white" : "text-accent"
                  )} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GLOBAL REACH / WORLD MAP */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 trade-grid-texture opacity-10" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="text-accent font-bold mb-4">Our Reach & Clients</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Worked with 250+ Clients Across The Globe</h2>
            
            <div className="relative aspect-video max-w-5xl mx-auto flex items-center justify-center">
              <Globe className="w-64 h-64 text-accent/20 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-lg font-bold">DOTTED WORLD MAP<br/><span className="text-accent">WITH PINS DISPLAYED HERE</span></div>
              </div>
              
              {/* Pins visualization */}
              {["Canada", "Europe", "UAE", "India", "Australia"].map((loc, i) => (
                <div key={loc} className="absolute p-2 bg-accent rounded-full text-[10px] text-white font-bold shadow-lg gold-glow" style={{
                  top: `${20 + i * 15}%`,
                  left: `${15 + i * 18}%`
                }}>
                  {loc}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CLIENT WORK GALLERY */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="relative group aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <Image src={`https://picsum.photos/seed/trade${i}/600/600`} alt="Portfolio" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold">View Category</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. LOGO MARQUEE */}
        <section className="py-12 bg-white">
          <LogoMarquee direction="left" logos={CLIENT_LOGOS} />
          <div className="center-btn-wrap mt-8">
            <Link href="/portfolio" className="elementor-btn">Our Clienteles</Link>
          </div>
        </section>

        {/* 10. TRADE PLATFORMS */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Strategic Platforms, Measurable Results</h2>
            <p className="text-accent font-bold uppercase tracking-widest mb-12">Our Trade Arsenal</p>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 transition-all">
              {PLATFORMS.map(p => (
                <div key={p} className="text-2xl font-black text-primary">{p}</div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. BENTO GRID SHOWCASE */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 aspect-video relative rounded-3xl overflow-hidden shadow-xl">
              <Image src="https://picsum.photos/seed/warehouse/800/600" alt="Warehouse" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-xl">
              <Image src="https://picsum.photos/seed/shipping/400/400" alt="Shipping" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-xl">
              <Image src="https://picsum.photos/seed/packing/400/400" alt="Packing" fill className="object-cover" />
            </div>
            <div className="md:col-span-2 aspect-video relative rounded-3xl overflow-hidden shadow-xl">
              <Image src="https://picsum.photos/seed/vessel/800/600" alt="Vessel" fill className="object-cover" />
            </div>
          </div>
          <div className="center-btn-wrap mt-12">
            <Link href="/portfolio" className="elementor-btn">View Our Trade Portfolio →</Link>
          </div>
        </section>

        {/* 12. IN-HOUSE CAPABILITY */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-accent font-bold mb-4">_ Operations</div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                A company with an<br />
                <span className="text-accent">In-house Trade Operations Team</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 italic border-l-4 border-accent pl-6">
                "As a full-service import-export house, we manage sourcing, documentation, compliance, logistics, and buyer communication entirely in-house — giving you a single point of accountability."
              </p>
            </div>
            <div className="flex gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex-1 aspect-[2/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src={`https://picsum.photos/seed/team${i}/400/600`} alt="Team" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. BLOG / INSIGHTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary">Latest from Insights</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {BLOGS.map(blog => (
                <div key={blog.title} className="group cursor-pointer">
                  <div className="aspect-video relative rounded-2xl overflow-hidden mb-6">
                    <Image src={blog.image} alt="Blog" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-accent font-bold text-sm">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
            <div className="center-btn-wrap mt-16">
              <Link href="/blog" className="elementor-btn">See all Insights →</Link>
            </div>
          </div>
        </section>

        {/* 14. BRAND BANNER */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 trade-grid-texture opacity-10" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center font-black text-2xl text-white mx-auto mb-8">S</div>
            <h2 className="text-4xl font-bold text-white mb-4">Shyam Overseas</h2>
            <p className="text-accent font-bold text-xl mb-12">Your Global Trade Partner</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/60 text-sm font-medium">
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full" /> Trade Solutions that drive results</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full" /> Focus on compliance</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full" /> Result-oriented mindset</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full" /> A team of seasoned trade professionals</span>
            </div>
          </div>
        </section>

        {/* 15. CONTACT SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-3">
                <h2 className="text-4xl font-bold text-primary mb-4">Get in touch with us for</h2>
                <p className="text-accent font-bold text-xl mb-12">our Trade & Export Services</p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="cf-input" placeholder="Name" />
                  <input className="cf-input" placeholder="Email ID" />
                  <input className="cf-input" placeholder="Contact Number" />
                  <input className="cf-input" placeholder="Website / Company" />
                  <input className="cf-input md:col-span-2" placeholder="Company Name" />
                  <textarea className="cf-input md:col-span-2" rows={4} placeholder="Please share your requirement in detail..." />
                  <button className="cf-submit md:col-span-2 font-bold uppercase tracking-widest">Send Message</button>
                </form>
              </div>
              <div className="lg:col-span-2">
                <div className="contact-info h-full">
                  <div className="mb-12">
                    <div className="flex items-center gap-4 text-accent text-3xl font-bold mb-2">
                      <Phone className="w-8 h-8" /> 9033131093
                    </div>
                    <p className="text-white/50">available 10:00 – 18:00</p>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Locations</h4>
                      <p className="text-white text-lg font-bold">Ahmedabad | Surat | Vadodara</p>
                    </div>
                    <div>
                      <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Email Us</h4>
                      <Link href="mailto:info@shyamoverseas.com" className="text-white text-lg font-bold hover:text-accent transition-colors">
                        info@shyamoverseas.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 16. SECTOR TAGS */}
        <section className="bg-primary py-6 overflow-hidden">
          <div className="flex gap-8 w-max animate-marquee-slow">
            {[...SECTORS, ...SECTORS].map((s, i) => (
              <span key={i} className="text-white/40 text-xs font-bold uppercase tracking-[3px] whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* 17. FOOTER */}
      <footer className="bg-[#05111a] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="footer-brand">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-black text-lg text-white">S</div>
              <span className="text-xl font-bold">Shyam Overseas</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              We are one of India's Leading Import-Export Companies, committed to building reliable bridges between Indian excellence and global markets.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook, Twitter, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-all cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h6 className="text-accent font-bold uppercase tracking-widest text-xs mb-8">Important Links</h6>
            <ul className="space-y-4">
              {["Our Story", "Services", "Our Portfolio", "Trade Campaigns", "Case Study", "Career"].map(l => (
                <li key={l}><Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h6 className="text-accent font-bold uppercase tracking-widest text-xs mb-8">Our Ventures</h6>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
              <div className="text-white font-bold mb-2">Partner Badges</div>
              <p className="text-white/40 text-[10px] leading-relaxed">Official Partner of FIEO and DGFT. ISO 9001:2015 Certified Agency.</p>
            </div>
            <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center text-[10px] font-bold text-accent text-center">
              ISO<br />9001<br />2015
            </div>
          </div>

          <div className="footer-col">
            <h6 className="text-accent font-bold uppercase tracking-widest text-xs mb-8">Get In Touch</h6>
            <div className="space-y-6">
              <p className="text-white/50 text-sm flex items-start gap-3">
                <span className="text-accent">📍</span>
                Nariman Point, Mumbai 400 021, India
              </p>
              <p className="text-white/50 text-sm flex items-start gap-3">
                <span className="text-accent">📞</span>
                +91-90331 31093
              </p>
              <p className="text-white/50 text-sm flex items-start gap-3">
                <span className="text-accent">✉️</span>
                info@shyamoverseas.com
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/30 uppercase tracking-[2px]">
          <p>© 2014-2026 | All Rights Reserved by Shyam Overseas</p>
          <p>Expanding Horizons, Building Bridges.</p>
        </div>
      </footer>

      <style jsx>{`
        .cf-input {
          @apply w-full bg-white border-2 border-transparent rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all;
        }
        .cf-submit {
          @apply bg-accent text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-accent/90 transition-all;
        }
        .elementor-btn {
          @apply inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-accent transition-all;
        }
        .contact-info {
          background: linear-gradient(135deg, #0A2540 0%, #05111a 100%);
          @apply p-12 rounded-3xl border border-accent/20 flex flex-col justify-center;
        }
      `}</style>
    </div>
  );
}