"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled ? "h-16 bg-background/95 backdrop-blur-md shadow-md" : "h-24 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xl text-primary-foreground shadow-lg shadow-primary/20">
            S
          </div>
          <div className="flex flex-col">
            <span className={cn("text-lg font-bold leading-none transition-colors", scrolled ? "text-foreground" : "text-white")}>
              Shyama Overseas
            </span>
            <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.2em]">
              Global Trade Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative px-3 py-2">
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors flex items-center gap-1 hover:text-primary",
                  scrolled ? "text-foreground" : "text-white/90"
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4 opacity-50" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-card border border-border rounded-xl shadow-2xl min-w-[220px] overflow-hidden p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child}
                        href="/services"
                        className="block px-4 py-2.5 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                      >
                        {child}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button asChild size="sm" className="ml-4 rounded-full font-bold">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Trigger */}
        <button
          className={cn("lg:hidden p-2 transition-colors", scrolled ? "text-foreground" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[64px] bg-background z-40 transition-transform duration-300 lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-semibold py-2 border-b border-border hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full py-6 text-lg font-bold mt-4" onClick={() => setMobileMenuOpen(false)}>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}