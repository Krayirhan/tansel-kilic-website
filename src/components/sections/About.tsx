"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="about" className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/80 px-6 min-h-[400px]" />
    );
  }

  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/80 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReduced ? 0 : 0.5 }}
        >
          {/* Section heading */}
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              {a.label}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {a.title}
            </h2>
          </div>

          {/* Grid Layout for bio text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {[a.p1, a.p2, a.p3, a.p4].map((p, i) => (
              <p key={`p${i}`} className="text-slate-500 leading-relaxed text-base">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
