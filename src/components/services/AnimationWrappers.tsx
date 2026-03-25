
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Reveal({ children, variants = fadeInUp, delay = 0, className = "" }: { children: ReactNode, variants?: any, delay?: number, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}
