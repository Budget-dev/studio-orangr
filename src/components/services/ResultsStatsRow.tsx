
"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Reveal, fadeInUp, Stagger } from "./AnimationWrappers";

interface StatsRowProps {
  stats: Array<{
    prefix?: string;
    metric?: string; // Fallback for simple metric display
    value?: number;
    suffix?: string;
    label: string;
    context?: string;
  }>;
}

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const ease = 1 - Math.pow(1 - percentage, 4);
      setCount(value * ease);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  const displayValue = count % 1 === 0 ? count : count.toFixed(1);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-black text-primary italic font-sora">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function ResultsStatsRow({ stats }: StatsRowProps) {
  return (
    <section id="results" className="py-24 bg-white border-b border-border/10">
      <div className="container mx-auto px-6">
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <Reveal key={i} variants={fadeInUp}>
              <div className="flex flex-col gap-4 text-center md:text-left relative h-full">
                {i > 0 && <div className="absolute left-0 top-0 bottom-0 w-px bg-border/20 hidden lg:block -ml-6" />}
                {stat.value !== undefined ? (
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  <span className="text-5xl md:text-6xl font-black text-primary italic font-sora uppercase">
                    {stat.metric}
                  </span>
                )}
                <div>
                  <div className="text-lg font-bold text-secondary uppercase tracking-tight">{stat.label}</div>
                  <div className="text-xs text-muted-foreground italic mt-1 leading-relaxed">{stat.context}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
