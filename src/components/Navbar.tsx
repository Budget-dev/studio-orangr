
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  page: string;
  children?: NavChild[];
}

const NAV: NavItem[] = [
  { label: "Home", page: "/" },
  {
    label: "Services", 
    page: "/services",
    children: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Mobile App Marketing", href: "/services/mobile-app-marketing" },
      { label: "E-Commerce Marketing", href: "/services/ecommerce-marketing" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "SEO", href: "/services/seo" },
      { label: "CRO", href: "/services/cro" },
    ]
  },
  { label: "About Us", page: "/about" },
  { label: "Contact Us", page: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mob]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-6 lg:px-12 flex items-center justify-between",
          scrolled || pathname !== "/" ? "h-16 bg-[#0a0a0a] shadow-2xl" : "h-[100px] bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center font-black text-lg text-[#0a0a0a] flex-shrink-0 transition-transform group-hover:scale-105">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-extrabold text-white leading-tight uppercase tracking-tight">Shyama Overseas</span>
            <span className="text-[9px] font-semibold text-primary uppercase tracking-[0.2em]">Digital Growth Agency</span>
          </div>
        </Link>

        {/* Central White Pill Menu */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex items-center list-none h-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1.5 shadow-xl">
            {NAV.map((n) => (
              <li key={n.label} className="relative group h-full flex items-center">
                <Link
                  href={n.page}
                  className={cn(
                    "px-5 py-2 text-[13px] font-bold transition-all rounded-full flex items-center gap-1",
                    pathname === n.page ? "bg-white text-secondary shadow-sm" : "text-white hover:text-primary"
                  )}
                >
                  {n.label}
                  {n.children && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>
                {n.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="bg-white min-w-[240px] shadow-2xl rounded-2xl overflow-hidden py-2 border-t-4 border-primary mt-2">
                      {n.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block px-6 py-3 text-[13px] font-semibold text-secondary hover:bg-primary/5 hover:text-primary transition-colors border-b border-black/5 last:border-0"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <Link
            href="/contact"
            className="hidden sm:block bg-white text-secondary px-7 py-2.5 rounded-full text-[13px] font-black hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
          >
            Get Audit
          </Link>

          <button className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setMob(!mob)}>
            {mob ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#0a0a0a] z-[1001] transition-all duration-500 lg:hidden overflow-y-auto flex flex-col",
          mob ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="p-8 pt-24 flex flex-col gap-8 h-full">
          <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full" onClick={() => setMob(false)}>
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col gap-6">
            {NAV.map((n) => (
              <div key={n.label} className="flex flex-col gap-4">
                <Link
                  href={n.page}
                  className="text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={() => !n.children && setMob(false)}
                >
                  {n.label}
                </Link>
                {n.children && (
                  <div className="flex flex-col gap-4 pl-6 border-l-2 border-primary/20 mt-2 mb-4">
                    {n.children.map(child => (
                      <Link 
                        key={child.label} 
                        href={child.href} 
                        className="text-white/60 hover:text-primary text-xl font-medium"
                        onClick={() => setMob(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pb-12">
            <Link
              href="/contact"
              className="w-full text-center bg-primary text-[#0a0a0a] py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl shadow-primary/20"
              onClick={() => setMob(false)}
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
