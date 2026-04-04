
"use client";

import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const BRANDS = [
  "Nexus Retail Hub",
  "UrbanCart",
  "BlueWave Technologies",
  "PrimeSquare Developments",
  "Zenith Lifestyle",
  "Elevate Dining",
  "NovaEdge Solutions",
  "Apex Mart",
];

export function LogoCloud({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-border/40 md:grid-cols-4 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Top Grid Line */}
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border/40" />

      {BRANDS.map((brand, i) => (
        <div
          key={brand}
          className={cn(
            "flex items-center justify-center bg-background px-6 py-14 md:p-16 transition-all hover:bg-muted/30 border-r border-b border-border/40 relative group cursor-default"
          )}
        >
          <span className="text-[10px] md:text-[12px] font-black text-secondary/60 uppercase tracking-[0.2em] text-center group-hover:text-primary group-hover:scale-105 transition-all duration-300">
            {brand}
          </span>
          
          {/* Intersectional Plus Icons for the 'Network' aesthetic */}
          {(i === 0 || i === 2 || i === 5) && (
            <Plus
              className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-primary pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
              strokeWidth={1.5}
            />
          )}
        </div>
      ))}

      {/* Bottom Grid Line */}
      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border/40" />
    </div>
  );
}
