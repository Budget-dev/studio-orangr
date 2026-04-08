
"use client";

import { motion } from "framer-motion";
import { slideInLeft, fadeInUp, Stagger, Reveal } from "./AnimationWrappers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "../WhatsAppButton";

interface HeroProps {
  badge: string;
  headline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  image?: string;
}

export function HeroSplitLeft({ badge, headline, subheadline, primaryCTA, secondaryCTA, image }: HeroProps) {
  const words = headline.split(' ');
  const firstHalf = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const secondHalf = words.slice(Math.ceil(words.length / 2)).join(' ');

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-12 items-center">
          <Stagger className="max-w-4xl">
            <Reveal variants={fadeInUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 border border-primary/20">
                {badge}
              </span>
            </Reveal>
            
            <Reveal variants={slideInLeft}>
              <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-secondary leading-[1] md:leading-[0.9] uppercase font-sora mb-6 md:mb-8 tracking-tighter">
                {firstHalf}<br className="hidden md:block" />
                <span className="text-primary italic">{secondHalf}</span>
              </h1>
            </Reveal>

            <Reveal variants={fadeInUp}>
              <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed mb-8 md:mb-12 max-w-2xl border-l-4 border-primary pl-6 md:pl-8 italic">
                {subheadline}
              </p>
            </Reveal>

            <Reveal variants={fadeInUp}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <WhatsAppButton className="h-14 hover:w-[220px]" message={`Hi, I'm interested in ${badge} services.`} />
                {secondaryCTA && (
                  <Button asChild variant="outline" size="lg" className="h-12 md:h-14 px-8 md:px-10 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm border-secondary/20 hover:bg-secondary hover:text-white transition-all">
                    <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                  </Button>
                )}
              </div>
            </Reveal>
          </Stagger>

          <Reveal variants={fadeInUp} className="h-full">
            <div className="aspect-square bg-primary/5 rounded-[32px] md:rounded-[40px] border border-primary/10 relative flex items-center justify-center overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
              {image ? (
                <Image 
                  src={image} 
                  alt={headline} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  unoptimized
                />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-[120px] md:text-[200px] opacity-20 grayscale select-none"
                  >
                    🌀
                  </motion.div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
