"use client";

import Link from "next/link";

const SECTORS = [
  { icon: "🌾", name: "Agriculture" },
  { icon: "👗", name: "Textiles" },
  { icon: "💊", name: "Pharma" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🛢️", name: "Chemicals" },
  { icon: "🍎", name: "Food & Beverages" },
  { icon: "💎", name: "Gems & Jewellery" },
  { icon: "⚙️", name: "Engineering" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20">
      {/* Sectors Quick Bar */}
      <div className="bg-black/40 border-y border-white/5 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex">
          {SECTORS.map((sector) => (
            <Link
              key={sector.name}
              href="/sectors"
              className="flex-shrink-0 px-8 py-4 border-r border-white/5 text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <span>{sector.icon}</span>
              {sector.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xl text-primary-foreground shadow-lg shadow-primary/20">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">Shyama Overseas</span>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.2em]">Global Trade Solutions</span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Your trusted partner for international trade, freight forwarding, and supply chain solutions. Connecting India to the world since 2005.
          </p>
          <div className="flex gap-4">
            {["🔗", "📘", "🐦", "📸"].map((ic, i) => (
              <button key={i} className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
                {ic}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-primary">Services</h4>
          <ul className="space-y-4">
            {["Freight Forwarding", "Sea Freight", "Warehousing", "Customs Clearance", "Supply Chain", "Export Consulting"].map((s) => (
              <li key={s}>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-primary">Company</h4>
          <ul className="space-y-4">
            {["About Us", "Our Sectors", "Portfolio", "Latest Blogs", "Contact Us", "Privacy Policy"].map((s) => (
              <li key={s}>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-primary">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="text-sm text-muted-foreground">📍 Nariman Point, Mumbai 400 021</li>
            <li className="text-sm text-muted-foreground">📞 +91 98765 43210</li>
            <li className="text-sm text-muted-foreground">✉️ info@shyamaoverseas.com</li>
            <li className="text-sm text-muted-foreground">🕐 Mon–Sat: 9am–6pm IST</li>
          </ul>
          <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <span className="text-[10px] font-bold text-primary uppercase block mb-1">Certifications</span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              IEC Registered • ISO 9001:2015<br />FIEO Member • CHA Licensed
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-muted-foreground">
          <p>© 2005–2024 <Link href="/" className="text-primary hover:underline">Shyama Overseas</Link>. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}