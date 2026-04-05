
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    page: "#",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Mobile App Marketing", href: "/services/mobile-app-marketing" },
      { label: "E-Commerce Marketing", href: "/services/ecommerce-marketing" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Social Media SEO", href: "/services/seo" },
      { label: "CRO", href: "/services/cro" },
      { label: "Creative AI Productions", href: "/services/creative-ai-productions" },
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
          "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-4 md:px-6 lg:px-12 flex items-center justify-between",
          scrolled || pathname !== "/" ? "h-16 bg-[#0a0a0a]/95 backdrop-blur-md shadow-2xl border-b border-white/5" : "h-[100px] bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0 relative z-[1001]">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-primary/20 p-1">
            <Image 
              src="https://1234567890.sirv.com/Screenshot%202026-04-04%20211938.png" 
              alt="Shyama Overseas Logo" 
              width={48} 
              height={48} 
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] md:text-[15px] font-black text-white leading-tight uppercase tracking-tight">Shyama Overseas</span>
            <span className="text-[8px] md:text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Digital Growth Agency</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <ul className="flex items-center list-none h-auto bg-white/90 backdrop-blur-xl border border-black/5 rounded-full px-2 py-1.5 shadow-xl">
            {NAV.map((n) => (
              <li key={n.label} className="relative group h-full flex items-center">
                <Link
                  href={n.page}
                  className={cn(
                    "px-6 py-2.5 text-[13px] font-black transition-all rounded-full flex items-center gap-1.5",
                    pathname === n.page 
                      ? "bg-[#0a0a0a] text-white shadow-xl scale-105" 
                      : "text-secondary hover:text-primary"
                  )}
                  onClick={(e) => {
                    if (n.page === "#") e.preventDefault();
                  }}
                >
                  {n.label}
                  {n.children && <ChevronDown className={cn("w-3.5 h-3.5 transition-transform group-hover:rotate-180", pathname === n.page ? "text-white" : "text-primary")} />}
                </Link>
                {n.children && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white min-w-[260px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden py-3 border-t-4 border-primary">
                      {n.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block px-7 py-3.5 text-[13px] font-bold text-secondary hover:bg-primary/5 hover:text-primary transition-colors border-b border-black/5 last:border-0"
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

        <div className="flex items-center gap-4 md:gap-6 shrink-0 relative z-[1001] ml-auto">
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors border border-white/10 flex items-center justify-center" 
            onClick={() => setMob(!mob)}
            aria-label="Toggle Menu"
          >
            {mob ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mob && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-[#0a0a0a] z-[1002] lg:hidden overflow-y-auto flex flex-col"
          >
            <div className="p-8 pt-28 flex flex-col gap-10 h-full relative">
              <button 
                className="absolute top-8 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors border border-white/10" 
                onClick={() => setMob(false)}
              >
                <X className="w-7 h-7" />
              </button>
              
              <div className="flex flex-col gap-6">
                {NAV.map((n, idx) => (
                  <motion.div 
                    key={n.label} 
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={n.page}
                      className={cn(
                        "text-4xl md:text-5xl font-black uppercase tracking-tighter transition-colors",
                        pathname === n.page ? "text-primary" : "text-white hover:text-primary"
                      )}
                      onClick={(e) => {
                        if (n.page === "#") e.preventDefault();
                        else if (!n.children) setMob(false);
                      }}
                    >
                      {n.label}
                    </Link>
                    {n.children && (
                      <div className="flex flex-col gap-4 pl-6 border-l-2 border-primary/30 mt-1 mb-4">
                        {n.children.map(child => (
                          <Link 
                            key={child.label} 
                            href={child.href} 
                            className="text-white/40 hover:text-primary text-xl font-bold transition-colors"
                            onClick={() => setMob(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
