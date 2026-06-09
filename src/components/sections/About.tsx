"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const [mounted, setMounted] = useState(false);

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ willChange: "transform, opacity" }}
        >
          {/* Label Indicator next to a decorative line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-5 bg-gradient-to-b from-blue-600 to-indigo-650 rounded-full" />
            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-600">
              {a.label}
            </h2>
          </div>

          {/* Grid Layout for bio text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {[a.p1, a.p2].map((p, i) => (
              <p key={i} className="text-slate-500 leading-relaxed text-base">
                {p}
              </p>
            ))}
            {[a.p3, a.p4].map((p, i) => (
              <p key={i + 2} className="text-slate-500 leading-relaxed text-base">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
