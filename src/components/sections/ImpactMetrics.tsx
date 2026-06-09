"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useReducedMotion } from "framer-motion";

export default function ImpactMetrics() {
  const { t } = useLang();
  const m = t.impact;
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <section id="impact" className="py-16 md:py-20 bg-white px-6 min-h-[200px]" />;
  }

  const stats = [
    { value: m.stat1_value, label: m.stat1_label, sub: m.stat1_sub, color: "#2563eb" },
    { value: m.stat2_value, label: m.stat2_label, sub: m.stat2_sub, color: "#7c3aed" },
    { value: m.stat3_value, label: m.stat3_label, sub: m.stat3_sub, color: "#059669" },
  ];

  return (
    <section id="impact" aria-label={m.label} className="py-16 md:py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: prefersReduced ? 0 : 0.45, delay: prefersReduced ? 0 : i * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <span
                className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-2"
                style={{ color: s.color }}
              >
                {s.value}
              </span>
              <span className="text-base font-bold text-slate-900 mb-1">{s.label}</span>
              <span className="text-xs font-medium text-slate-400">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
