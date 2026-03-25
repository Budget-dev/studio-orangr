"use client";

import { Reveal, fadeInUp, Stagger } from "./AnimationWrappers";
import * as Icons from "lucide-react";

interface BentoGridProps {
  heroBenefit: { title: string; description: string; metric?: string };
  benefits: Array<{ icon: string; title: string; description: string }>;
}

export function BenefitsBentoGrid({ heroBenefit, benefits }: BentoGridProps) {
  return (
    <section className="py-24 bg-[#FAFAF8] border-b border-border/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal variants={fadeInUp}>
            <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4">The Advantage</div>
            <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary">
              Why <span className="font-bold">Partner</span> With <span className="text-primary font-bold italic">Shyama</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
          {/* Hero Cell */}
          <Reveal variants={fadeInUp} className="md:col-span-8 md:row-span-2">
            <div className="h-full bg-secondary p-12 rounded-[40px] text-white flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute top-12 right-12 text-primary font-black text-6xl italic opacity-20 group-hover:opacity-100 transition-opacity">
                {heroBenefit.metric}
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-primary mb-6 uppercase leading-tight">{heroBenefit.title}</h3>
                <p className="text-xl text-white/70 font-light italic max-w-xl">{heroBenefit.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          </Reveal>

          {/* Benefit Cells */}
          <Stagger className="md:col-span-4 md:row-span-2 grid grid-rows-2 gap-6">
            {benefits.slice(0, 2).map((benefit, i) => {
              const IconComp = (Icons as any)[benefit.icon] || Icons.Zap;
              return (
                <Reveal key={i} variants={fadeInUp} className="h-full">
                  <div className="h-full bg-white p-8 rounded-[30px] border border-border/50 shadow-sm flex flex-col justify-center group hover:border-primary transition-all">
                    <IconComp className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-secondary mb-2 uppercase tracking-tight">{benefit.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed italic">{benefit.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
