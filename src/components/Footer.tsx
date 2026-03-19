
"use client";

import Link from "next/link";

const SECTORS = ["Agriculture", "Textiles", "Pharma", "Manufacturing", "Chemicals", "Food & Beverages", "Gems & Jewellery", "Engineering", "B2B", "FMCG", "Mobile Logistics"];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Sector Links Bar */}
      <div className="bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-[1080px] mx-auto overflow-x-auto scrollbar-hide flex">
          {SECTORS.map((s) => (
            <Link
              key={s}
              href="/sectors"
              className="flex-shrink-0 px-4 py-3.5 border-r border-white/5 text-[11px] font-semibold text-white/40 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {s}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-black text-base text-[#0a0a0a]">
              S
            </div>
            <span className="text-[15px] font-extrabold text-white leading-tight uppercase tracking-tight">Shyama Overseas</span>
          </Link>
          <p className="text-[13px] text-white/40 leading-relaxed max-w-[260px]">
            We are one of India's Leading International Trade & Logistics Agencies. Connecting India to the world since 2005.
          </p>
          <div className="flex gap-2.5 mt-2">
            {["🔗", "📘", "🐦", "📸", "▶️"].map((ic, i) => (
              <button key={i} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-sm">
                {ic}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-[14px] font-bold text-white mb-6 uppercase tracking-wider">Important Links</h6>
          <ul className="flex flex-col gap-3">
            {[["Our Story", "/about"], ["Services", "/services"], ["Our Portfolio", "/portfolio"], ["Sectors", "/sectors"], ["Blog", "/blog"], ["Careers", "/careers"]].map(([l, p]) => (
              <li key={l}>
                <Link href={p} className="text-[13px] text-white/45 hover:text-primary transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-[14px] font-bold text-white mb-6 uppercase tracking-wider">Our Ventures</h6>
          <ul className="flex flex-col gap-3">
            <li><Link href="/blog" className="text-[13px] text-white/45 hover:text-primary transition-colors">Trade Desk Blog</Link></li>
          </ul>
          <div className="mt-8">
            <div className="text-[13px] font-bold text-white mb-2">Certifications</div>
            <p className="text-[12px] text-white/40 leading-relaxed">
              IEC Registered<br />ISO 9001:2015<br />FIEO Member<br />CHA Licensed
            </p>
          </div>
          <div className="mt-4 w-14 h-14 bg-white/5 rounded-full border border-primary/20 flex flex-col items-center justify-center text-[9px] font-bold text-primary leading-none">
            ISO<br />9001<br />2015
          </div>
        </div>

        <div>
          <h6 className="text-[14px] font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h6>
          <ul className="flex flex-col gap-2.5 text-[13px] text-white/45">
            <li>Mumbai • Delhi • Surat</li>
            <li>Bangalore • Chennai</li>
            <li className="pt-2">📞 <a href="tel:+919876543210" className="hover:text-primary">+91-98765 43210</a></li>
            <li>📞 <a href="tel:+918765432109" className="hover:text-primary">+91-87654 32109</a></li>
            <li className="pt-2">✉️ <a href="mailto:info@shyamaoverseas.com" className="text-primary hover:underline">info@shyamaoverseas.com</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-6 border-t border-white/5 text-[12px] text-white/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2005–2025 | All Rights Reserved by <strong>Shyama Overseas | <Link href="/" className="text-primary hover:underline">India's Gateway to Global Trade</Link></strong></p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
