
"use client";

import { cn } from "@/lib/utils";

const DEFAULT_LOGOS = [
  {
    src: "https://svgl.app/library/klm.svg",
    alt: "KLM Logo",
  },
  {
    src: "https://svgl.app/library/stripe.svg",
    alt: "Stripe Logo",
  },
  {
    src: "https://svgl.app/library/airbnb.svg",
    alt: "Airbnb Logo",
  },
  {
    src: "https://svgl.app/library/shopify.svg",
    alt: "Shopify Logo",
  },
  {
    src: "https://svgl.app/library/slack.svg",
    alt: "Slack Logo",
  },
  {
    src: "https://svgl.app/library/notion.svg",
    alt: "Notion Logo",
  },
  {
    src: "https://svgl.app/library/figma.svg",
    alt: "Figma Logo",
  },
  {
    src: "https://svgl.app/library/discord.svg",
    alt: "Discord Logo",
  },
];

interface LogoCloudProps extends React.ComponentProps<"div"> {
  logos?: { src: string; alt: string }[];
}

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  const displayLogos = logos || DEFAULT_LOGOS;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-12 gap-y-10 px-4",
        className
      )}
      {...props}
    >
      {displayLogos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="h-8 md:h-10 w-auto transition-all duration-300 hover:scale-110 drop-shadow-sm opacity-90 hover:opacity-100"
        />
      ))}
    </div>
  );
}
