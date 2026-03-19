
"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  target: number;
  suffix: string;
  label: string;
}

export function StatsCounter({ target, suffix, label }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center p-8 border-r last:border-none border-white/10 group">
      <div className="text-4xl lg:text-5xl font-black text-primary mb-2 transition-transform group-hover:scale-110">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
