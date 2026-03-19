
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
    <div ref={ref} className="stat py-10 px-4 text-center">
      <div className="text-[14px] font-semibold text-white/55 uppercase tracking-wider mb-2">{label}</div>
      <div className="text-[46px] font-normal text-primary leading-none">
        {count.toLocaleString()}<span className="text-[24px]">{suffix}</span>
      </div>
    </div>
  );
}
