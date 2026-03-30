"use client";

import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const SERVICES = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Social Media", href: "/services/social-media-marketing" },
  { label: "SEO Services", href: "/services/seo" },
  { label: "App Growth", href: "/services/mobile-app-marketing" },
  { label: "E-Commerce", href: "/services/ecommerce-marketing" },
  { label: "Content Strategy", href: "/services/content-marketing" },
  { label: "Conversion (CRO)", href: "/services/cro" }
];

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0a0a0a 50%, #f89b3411 100%)",
      }}
    />
  );
};

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 font-body overflow-hidden">
      <FooterBackgroundGradient />
      
      <div className="relative z-10">
        {/* Branding Section with Animated Letters */}
        <div className="h-[150px] md:h-[250px] w-full flex items-center justify-center">
          <TextHoverEffect text="SHYAMA" />
        </div>

        {/* Services Links Bar */}
        <div className="bg-white/5 border-y border-white/5 hidden sm:block">
          <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide flex">
            {SERVICES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex-shrink-0 px-8 py-5 border-r border-white/5 text-[11px] font-bold text-white/40 hover:text-primary transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-black text-2xl text-secondary transition-transform group-hover:rotate-12">
                S
              </div>
              <span className="text-xl font-black text-white leading-tight uppercase tracking-tight">Shyama Overseas</span>
            </Link>
            <p className="text-[14px] text-white/40 leading-relaxed max-w-[300px] italic">
              Engineering digital dominance for brands that refuse to settle. We turn data into growth and ideas into market-leading visions.
            </p>
            <div className="flex gap-4">
              {["🔗", "📘", "📸", "▶️"].map((ic, i) => (
                <button key={i} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-lg">
                  {ic}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-[14px] font-black text-white mb-8 md:mb-10 uppercase tracking-[0.3em] text-primary">Quick Navigation</h6>
            <ul className="flex flex-col gap-4 md:gap-5">
              {[["About Us", "/about"], ["Our Services", "/services"], ["Client Success", "/portfolio"], ["Insights Blog", "/blog"]].map(([l, p]) => (
                <li key={l}>
                  <Link href={p} className="text-[14px] text-white/45 hover:text-primary transition-colors flex items-center gap-3 group font-medium">
                    <span className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary transition-all" /> {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-[14px] font-black text-white mb-8 md:mb-10 uppercase tracking-[0.3em] text-primary">Expertise</h6>
            <ul className="flex flex-col gap-4 md:gap-5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-[14px] text-white/45 hover:text-primary transition-colors font-medium">{s.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/5">
              <div className="text-[11px] font-black text-white/60 mb-6 uppercase tracking-[0.3em]">Accreditations</div>
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-white/5 rounded-xl border border-primary/20 flex items-center justify-center text-[10px] font-black text-primary leading-none text-center shadow-[0_0_20px_rgba(248,155,52,0.1)]">
                  GOOGLE<br/>PARTNER
                </div>
                <div className="w-14 h-14 bg-white/5 rounded-xl border border-primary/20 flex items-center justify-center text-[10px] font-black text-primary leading-none text-center shadow-[0_0_20px_rgba(248,155,52,0.1)]">
                  META<br/>EXPERT
                </div>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-[14px] font-black text-white mb-8 md:mb-10 uppercase tracking-[0.3em] text-primary">Connect</h6>
            <ul className="flex flex-col gap-6 text-[14px] text-white/45 font-medium">
              <li className="flex items-start gap-4">
                <span className="text-xl">📍</span>
                <span>Ahmedabad • Surat • Mumbai<br />India's Digital Growth Hubs</span>
              </li>
              <li className="pt-2">
                <a href="tel:+919033131093" className="flex items-center gap-4 text-white hover:text-primary transition-all group">
                  <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all">📞</span> +91 90331 31093
                </a>
              </li>
              <li className="pt-2">
                <a href="mailto:growth@shyamaoverseas.com" className="flex items-center gap-4 text-primary hover:underline group">
                  <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">✉️</span> growth@shyamaoverseas.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 border-t border-white/5 text-[11px] md:text-[12px] text-white/30 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p>© 2005–2025 Shyama Overseas | <strong className="text-primary">Engineering Digital Dominance</strong></p>
          <div className="flex gap-6 md:gap-10 font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Growth</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
