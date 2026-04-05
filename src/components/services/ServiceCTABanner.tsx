
"use client";

import { Reveal, fadeInUp } from "./AnimationWrappers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WhatsAppButton } from "../WhatsAppButton";

interface CTABannerProps {
  headline: string;
  supporting: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function ServiceCTABanner({ headline, supporting, primaryCTA, secondaryCTA }: CTABannerProps) {
  return (
    <section className="py-24 bg-primary overflow-hidden relative">
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <Reveal variants={fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-secondary leading-[0.9] uppercase font-sora mb-8 tracking-tighter">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl text-secondary/80 font-light italic mb-12 max-w-2xl mx-auto">
            {supporting}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <WhatsAppButton className="h-16 hover:w-[220px] bg-secondary" />
            {secondaryCTA && (
              <Button asChild variant="outline" size="lg" className="h-16 px-12 rounded-full border-secondary/20 text-secondary font-bold uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-all">
                <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
