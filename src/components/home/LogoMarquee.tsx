
"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  logos: string[];
  direction?: "left" | "right";
}

export function LogoMarquee({ logos, direction = "left" }: LogoMarqueeProps) {
  // Triple the logos to ensure gap-less scrolling
  const items = [...logos, ...logos, ...logos];
  
  return (
    <div className="carousel-wrap relative">
      <div 
        className={cn(
          "carousel-track flex gap-6 min-w-full",
          direction === "left" ? "animate-marquee-ltr" : "animate-marquee-rtl"
        )}
      >
        {items.map((logo, idx) => (
          <div 
            key={idx} 
            className="c-slide flex-shrink-0 border border-primary/40 rounded-[12px] bg-white px-12 py-6 shadow-[0_5px_15px_rgba(248,155,52,0.05)] flex items-center justify-center min-h-[90px] transition-all hover:border-primary hover:scale-105"
          >
            <span className="text-[11px] font-black text-[#6b5247] whitespace-nowrap uppercase tracking-tighter">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
