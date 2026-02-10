"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  // If user prefers reduced motion, we remove movement and keep a simple fade (or no animation).
  const initial = reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 };
  const animate = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}