
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
  { label: "About", page: "/about" },
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
  { label: "Success Stories", page: "/portfolio" },
  { label: "Insights", page: "/blog" },
  { label: "Contact", page: "/contact" },
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

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] bg-[#0a0a0a] transition-all duration-300 px-6 lg:px-12 flex items-center justify-between",
          scrolled || pathname !== "/" ? "h-16 shadow-2xl" : "h-[85px]"
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

        <ul className="hidden lg:flex items-center list-none h-full">
          {NAV.map((n) => (
            <li key={n.label} className="relative group h-full flex items-center">
              <Link
                href={n.page}
                className={cn(
                  "px-3.5 text-[13.5px] font-semibold transition-colors flex items-center gap-1",
                  pathname === n.page ? "text-primary" : "text-white/90 hover:text-primary"
                )}
              >
                {n.label}
                {n.children && <ChevronDown className="w-3 h-3 opacity-50" />}
              </Link>
              {n.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-white min-w-[240px] shadow-2xl rounded-md overflow-hidden py-2 border-t-4 border-primary">
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

        <Link
          href="/contact"
          className="hidden lg:block bg-primary border-2 border-primary text-secondary px-6 py-2 rounded-full text-[13px] font-bold hover:bg-transparent hover:text-primary transition-all"
        >
          Get Audit
        </Link>

        <button className="lg:hidden text-white p-2" onClick={() => setMob(!mob)}>
          {mob ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-[#0a0a0a] z-[1001] transition-transform duration-300 lg:hidden overflow-y-auto",
          mob ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-8 pt-24 gap-4">
          <button className="absolute top-6 right-6 text-white" onClick={() => setMob(false)}>
            <X className="w-8 h-8" />
          </button>
          {NAV.map((n) => (
            <div key={n.label} className="flex flex-col gap-2">
              <Link
                href={n.page}
                className="text-2xl font-bold text-white hover:text-primary"
                onClick={() => !n.children && setMob(false)}
              >
                {n.label}
              </Link>
              {n.children && (
                <div className="flex flex-col gap-2 pl-4 border-l border-white/10 mt-2 mb-4">
                  {n.children.map(child => (
                    <Link 
                      key={child.label} 
                      href={child.href} 
                      className="text-white/60 hover:text-primary text-lg"
                      onClick={() => setMob(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-8 w-full text-center bg-primary text-[#0a0a0a] py-5 rounded-full font-black text-lg uppercase tracking-widest"
            onClick={() => setMob(false)}
          >
            Get Free Audit
          </Link>
        </div>
      </div>
    </>
  );
}
