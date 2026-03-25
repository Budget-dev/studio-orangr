
"use client";

import { Reveal, fadeInUp } from "./AnimationWrappers";
import * as Icons from "lucide-react";

interface OverviewProps {
  pullQuote: string;
  body: string[];
  inlineStats: Array<{ value: string; label: string; icon?: string }>;
}

export function ServiceOverview({ pullQuote, body, inlineStats }: OverviewProps) {
  return (
    <section className="py-24 bg-white border-b border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20 items-start">
          <Reveal variants={fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-black text-primary leading-[0.9] italic uppercase font-sora">
              {pullQuote}
            </h2>
          </Reveal>

          <div className="space-y-8">
            <Reveal variants={fadeInUp}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-inter italic">
                {body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
              {inlineStats.map((stat, i) => {
                const IconComp = stat.icon ? (Icons as any)[stat.icon] : Icons.Zap;
                return (
                  <Reveal key={i} variants={fadeInUp} delay={i * 0.1}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-secondary">{stat.value}</div>
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
