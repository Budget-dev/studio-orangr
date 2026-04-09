
"use client";

import { cn } from "@/lib/utils";

const DEFAULT_LOGOS = [
  { 
    src: "https://www.vectorlogo.zone/logos/klm/klm-ar21.svg", 
    alt: "KLM Logo",
    label: "KLM"
  },
  { 
    src: "https://svgl.app/library/stripe.svg", 
    alt: "Stripe Logo",
    label: "Stripe"
  },
  { 
    src: "https://svgl.app/library/airbnb.svg", 
    alt: "Airbnb Logo",
    label: "Airbnb"
  },
  { 
    src: "https://svgl.app/library/shopify.svg", 
    alt: "Shopify Logo",
    label: "Shopify"
  },
  { 
    src: "https://svgl.app/library/slack.svg", 
    alt: "Slack Logo",
    label: "Slack"
  },
  { 
    src: "https://svgl.app/library/notion.svg", 
    alt: "Notion Logo",
    label: "Notion"
  },
  { 
    src: "https://svgl.app/library/figma.svg", 
    alt: "Figma Logo",
    label: "Figma"
  },
  { 
    src: "https://svgl.app/library/discord.svg", 
    alt: "Discord Logo",
    label: "Discord"
  },
];

interface LogoCloudProps extends React.ComponentProps<"div"> {
  logos?: { src: string; alt: string; label?: string }[];
}

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  const displayLogos = logos || DEFAULT_LOGOS;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-12 gap-y-14 px-4",
        className
      )}
      {...props}
    >
      {displayLogos.map((logo, i) => (
        <div key={i} className="flex flex-col items-center gap-3 group transition-all duration-300 hover:scale-110">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-7 md:h-9 w-auto transition-all duration-300 drop-shadow-sm opacity-90 group-hover:opacity-100"
            onError={(e) => {
              // Fallback for broken SVGs - use a clean, brand-colored placeholder
              (e.target as HTMLImageElement).src = `https://placehold.co/200x80/f89b34/white?text=${logo.label || 'Logo'}`;
            }}
          />
          {logo.label && (
            <span className="text-[9px] font-black text-secondary/40 uppercase tracking-[0.25em] group-hover:text-primary transition-colors text-center">
              {logo.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
