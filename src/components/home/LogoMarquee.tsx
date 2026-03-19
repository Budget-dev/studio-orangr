
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
    <div className="carousel-wrap relative py-4">
      <div 
        className={cn(
          "carousel-track flex gap-5 min-w-full",
          direction === "left" ? "animate-marquee-l" : "animate-marquee-r"
        )}
      >
        {items.map((logo, idx) => (
          <div 
            key={idx} 
            className="c-slide flex-shrink-0 border border-primary rounded-[15px] bg-white px-12 py-5 shadow-[0_0_10px_rgba(224,189,166,0.3)] flex items-center justify-center min-h-[80px]"
          >
            <span className="text-xs font-bold text-[#6b5247] whitespace-nowrap">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
