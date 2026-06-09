"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  margin?: string;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.4,
  margin = "-100px",
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{
        duration: prefersReduced ? 0 : duration,
        delay: prefersReduced ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
