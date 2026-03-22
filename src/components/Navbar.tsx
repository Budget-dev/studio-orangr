
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV = [
  { label: "Home", page: "/" },
  { label: "Our Story", page: "/about", children: ["Our Squad"] },
  {
    label: "Services", page: "/services",
    children: ["Freight Forwarding", "Sea Freight", "Warehousing", "Customs Clearance", "Supply Chain", "Export Consulting", "Packaging & Labeling"]
  },
  { label: "Clients", page: "/portfolio" },
  {
    label: "Sectors", page: "/sectors",
    children: ["Agriculture", "Textiles", "Pharma", "Manufacturing", "Chemicals", "Food & Beverages", "Gems & Jewellery", "Engineering"]
  },
  { label: "Blogs", page: "/blog" },
  { label: "Careers", page: "/careers" },
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
            <span className="text-[9px] font-semibold text-primary uppercase tracking-[0.2em]">Global Trade Solutions</span>
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
                  <div className="bg-[#f2f2f2] min-width-[200px] shadow-2xl rounded-sm overflow-hidden py-1 border-t-2 border-primary">
                    {n.children.map((c) => (
                      <Link
                        key={c}
                        href={n.page}
                        className="block px-5 py-2.5 text-[12.5px] font-medium text-[#5f5f5f] hover:bg-[#ebebeb] hover:text-[#2e2e2e] transition-colors border-b border-black/5 last:border-0"
                      >
                        {c}
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
          className="hidden lg:block bg-transparent border-2 border-primary text-primary px-5 py-2 text-[13px] font-bold hover:bg-primary hover:text-[#0a0a0a] transition-all"
        >
          Our Profile
        </Link>

        <button className="lg:hidden text-white p-2" onClick={() => setMob(!mob)}>
          {mob ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-[#0a0a0a] z-[999] transition-transform duration-300 lg:hidden overflow-y-auto border-t border-white/5",
          mob ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 gap-1">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.page}
              className="text-[14px] font-medium py-3.5 border-b border-white/5 text-white/80 hover:text-primary"
              onClick={() => setMob(false)}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 w-full text-center bg-primary text-[#0a0a0a] py-4 rounded-md font-bold"
            onClick={() => setMob(false)}
          >
            Our Profile
          </Link>
        </div>
      </div>
    </>
  );
}
