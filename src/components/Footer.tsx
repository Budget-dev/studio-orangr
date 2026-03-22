
"use client";

import Link from "next/link";

const SECTORS = ["Agriculture", "Textiles", "Pharma", "Manufacturing", "Chemicals", "Food & Beverages", "Gems & Jewellery", "Engineering", "B2B", "FMCG", "Mobile Logistics"];

export function Footer() {
  return (
    <footer className="footer bg-[#1a1a1a]">
      {/* Sector Links Bar */}
      <div className="bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-[1080px] mx-auto overflow-x-auto scrollbar-hide flex">
          {SECTORS.map((s) => (
            <Link
              key={s}
              href="/sectors"
              className="flex-shrink-0 px-5 py-4 border-r border-white/5 text-[11px] font-bold text-white/40 hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap"
            >
              {s}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center font-black text-xl text-[#0a0a0a]">
              S
            </div>
            <span className="text-[16px] font-black text-white leading-tight uppercase tracking-tight">Shyama Overseas</span>
          </Link>
          <p className="text-[13px] text-white/40 leading-relaxed max-w-[260px]">
            We are one of India's Leading International Trade & Logistics Agencies. Connecting India to the world since 2005.
          </p>
          <div className="flex gap-3">
            {["🔗", "📘", "🐦", "📸", "▶️"].map((ic, i) => (
              <button key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-base">
                {ic}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-[14px] font-bold text-white mb-8 uppercase tracking-widest text-primary/80">Important Links</h6>
          <ul className="flex flex-col gap-4">
            {[["Our Story", "/about"], ["Services", "/services"], ["Our Portfolio", "/portfolio"], ["Sectors", "/sectors"], ["Blog", "/blog"], ["Careers", "/careers"]].map(([l, p]) => (
              <li key={l}>
                <Link href={p} className="text-[13px] text-white/45 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary transition-colors" /> {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-[14px] font-bold text-white mb-8 uppercase tracking-widest text-primary/80">Our Ventures</h6>
          <ul className="flex flex-col gap-4">
            <li><Link href="/blog" className="text-[13px] text-white/45 hover:text-primary transition-colors">Trade Desk Blog</Link></li>
          </ul>
          <div className="mt-10 pt-10 border-t border-white/5">
            <div className="text-[12px] font-bold text-white/60 mb-4 uppercase tracking-[0.2em]">Certifications</div>
            <p className="text-[12px] text-white/30 leading-relaxed">
              IEC Registered • ISO 9001:2015<br />FIEO Member • CHA Licensed
            </p>
            <div className="mt-6 w-16 h-16 bg-white/5 rounded-full border border-primary/20 flex flex-col items-center justify-center text-[10px] font-bold text-primary leading-none shadow-[0_0_15px_rgba(248,155,52,0.1)]">
              ISO<br />9001<br />2015
            </div>
          </div>
        </div>

        <div>
          <h6 className="text-[14px] font-bold text-white mb-8 uppercase tracking-widest text-primary/80">Get In Touch</h6>
          <ul className="flex flex-col gap-4 text-[13px] text-white/45">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">📍</span>
              <span>Mumbai • Delhi • Surat<br />Bangalore • Chennai</span>
            </li>
            <li className="pt-2">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                <span className="w-8 h-8 bg-white/5 rounded flex items-center justify-center">📞</span> +91-98765 43210
              </a>
            </li>
            <li>
              <a href="tel:+918765432109" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                <span className="w-8 h-8 bg-white/5 rounded flex items-center justify-center">📞</span> +91-87654 32109
              </a>
            </li>
            <li className="pt-2">
              <a href="mailto:info@shyamaoverseas.com" className="flex items-center gap-3 text-primary hover:underline">
                <span className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center text-primary">✉️</span> info@shyamaoverseas.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-8 border-t border-white/5 text-[12px] text-white/30 flex flex-col md:row justify-between items-center gap-4 text-center md:text-left">
        <p>© 2005–2025 | All Rights Reserved by <strong>Shyama Overseas | <Link href="/" className="text-primary hover:underline">India's Gateway to Global Trade</Link></strong></p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
