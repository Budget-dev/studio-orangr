"use client";

import { Reveal, fadeInUp, Stagger } from "./AnimationWrappers";

interface TimelineProps {
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}

export function ApproachTimeline({ steps }: TimelineProps) {
  return (
    <section className="py-24 bg-[#FAFAF8] border-b border-border/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal variants={fadeInUp}>
            <div className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4">Our Methodology</div>
            <h2 className="text-4xl md:text-5xl font-sora font-light text-secondary">
              The <span className="font-bold">Growth</span> <span className="text-primary font-bold italic">Blueprint</span>
            </h2>
          </Reveal>
        </div>

        <Stagger className="relative max-w-4xl mx-auto">
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-primary/20 border-l border-dashed border-primary/40 hidden md:block" />
          
          <div className="space-y-16">
            {steps.map((step, i) => (
              <Reveal key={i} variants={fadeInUp} className={`flex items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 hidden md:block" />
                
                <div className="w-16 h-16 rounded-full bg-primary text-secondary flex items-center justify-center font-black text-2xl shrink-0 z-10 shadow-lg shadow-primary/20">
                  {step.number}
                </div>
                
                <div className={`flex-1 bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl font-bold text-secondary mb-3 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
