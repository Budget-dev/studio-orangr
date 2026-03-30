
"use client";

import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-border/40 md:grid-cols-4",
        className
      )}
      {...props}
    >
      {/* Top Line */}
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border/40" />

      <LogoCard
        className="relative border-r border-b border-border/40 bg-muted/5 dark:bg-muted/10"
        logo={{
          src: "https://svgl.app/library/tata.svg",
          alt: "Tata Group",
        }}
      >
        <Plus
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-[#f89b34]"
          strokeWidth={1.5}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-r border-border/40 md:border-r"
        logo={{
          src: "https://svgl.app/library/reliance.svg",
          alt: "Reliance Industries",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-border/40 md:bg-muted/5 dark:md:bg-muted/10"
        logo={{
          src: "https://svgl.app/library/jio.svg",
          alt: "Jio",
        }}
      >
        <Plus
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-[#f89b34]"
          strokeWidth={1.5}
        />
        <Plus
          className="-bottom-[12px] -left-[12px] absolute z-10 hidden size-6 md:block text-[#f89b34]"
          strokeWidth={1.5}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-border/40 bg-muted/5 md:bg-background dark:bg-muted/10 md:dark:bg-background"
        logo={{
          src: "https://svgl.app/library/zomato.svg",
          alt: "Zomato",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-border/40 bg-muted/5 md:border-b-0 md:bg-background dark:bg-muted/10 md:dark:bg-background"
        logo={{
          src: "https://svgl.app/library/swiggy.svg",
          alt: "Swiggy",
        }}
      >
        <Plus
          className="-right-[12px] -bottom-[12px] md:-left-[12px] absolute z-10 size-6 md:hidden text-[#f89b34]"
          strokeWidth={1.5}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-border/40 bg-background md:border-r md:border-b-0 md:bg-muted/5 dark:md:bg-muted/10"
        logo={{
          src: "https://svgl.app/library/airtel.svg",
          alt: "Airtel",
        }}
      />

      <LogoCard
        className="border-r border-border/40"
        logo={{
          src: "https://svgl.app/library/infosys.svg",
          alt: "Infosys",
        }}
      />

      <LogoCard
        className="bg-muted/5 dark:bg-muted/10"
        logo={{
          src: "https://svgl.app/library/nykaa.svg",
          alt: "Nykaa",
        }}
      />

      {/* Bottom Line */}
      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border/40" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-12 md:p-14 transition-colors hover:bg-muted/30",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-8 select-none md:h-10 dark:brightness-0 dark:invert opacity-80"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
