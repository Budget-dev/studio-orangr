
"use client";

import { cn } from "@/lib/utils";

const DEFAULT_LOGOS = [
  {
    src: "https://svgl.app/library/nvidia.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk.svg",
    alt: "Clerk Logo",
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
        "flex flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4",
        className
      )}
      {...props}
    >
      {displayLogos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="h-7 w-auto transition-all duration-300 hover:scale-110 drop-shadow-sm grayscale-0 opacity-100"
        />
      ))}
    </div>
  );
}
