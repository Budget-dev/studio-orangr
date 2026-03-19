"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/services", 
    children: ["Freight Forwarding", "Sea Freight", "Warehousing", "Customs Clearance", "Supply Chain", "Export Consulting"] 
  },
  { label: "Sectors", href: "/sectors" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolledOrNotHome = scrolled || pathname !== "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolledOrNotHome ? "h-16 bg-[#0a0a0a]/95 backdrop-blur-md shadow-2xl" : "h-[85px] bg-[#0a0a0a]"
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xl text-[#0a0a0a] shadow-lg shadow-primary/20">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-extrabold text-white leading-tight">
              Shyama Overseas
            </span>
            <span className="text-[9px] font-semibold text-primary uppercase tracking-[0.2em]">
              Global Trade Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative px-1 py-2">
              <Link
                href={item.href}
                className={cn(
                  "px-3 py-2 text-[13.5px] font-semibold transition-all relative flex items-center gap-1 hover:text-white",
                  pathname === item.href ? "text-white" : "text-white/80"
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full" />
                )}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-[#f2f2f2] border border-border/20 rounded-lg shadow-2xl min-w-[200px] overflow-hidden p-0">
                    {item.children.map((child) => (
                      <Link
                        key={child}
                        href="/services"
                        className="block px-5 py-3 text-[13px] font-medium text-[#5f5f5f] hover:bg-[#ebebeb] hover:text-[#2e2e2e] transition-colors border-b border-white/10 last:border-0"
                      >
                        {child}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button asChild size="sm" className="ml-6 rounded-full font-bold px-6 bg-primary text-[#0a0a0a] hover:bg-[#b8896e] hover:text-white transition-all">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Trigger */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-[#0a0a0a] z-40 transition-transform duration-300 lg:hidden border-t border-primary/20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium py-3 border-b border-white/5 text-white/80 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full py-6 text-[15px] font-bold mt-4 rounded-xl" onClick={() => setMobileMenuOpen(false)}>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}