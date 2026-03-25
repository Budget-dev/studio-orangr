"use client";

import { Reveal, fadeInScale, Stagger } from "./AnimationWrappers";
import * as Icons from "lucide-react";

interface FeatureGridProps {
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="py-24 bg-white border-b border-border/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal variants={fadeInScale}>
            <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4">Core Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary">
              How we <span className="text-primary font-bold italic">Drive Performance</span>
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const IconComp = (Icons as any)[feature.icon] || Icons.Zap;
            return (
              <Reveal key={i} variants={fadeInScale}>
                <div className="group h-full bg-[#FAFAF8] p-10 rounded-3xl border border-border/40 hover:border-primary hover:bg-white hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-300">
                    <IconComp className="w-7 h-7 text-primary group-hover:text-secondary group-hover:translate-x-[2px] transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed italic line-clamp-2">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
