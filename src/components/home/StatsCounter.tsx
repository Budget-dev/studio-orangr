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
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center py-20 px-10 border-r last:border-none border-white/10 group hover:bg-primary/5 transition-colors duration-500">
      <div className="text-6xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-500">
        {count.toLocaleString()}<span className="text-3xl font-light opacity-60 ml-1">{suffix}</span>
      </div>
      <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] group-hover:text-primary transition-colors">
        {label}
      </div>
    </div>
  );
}