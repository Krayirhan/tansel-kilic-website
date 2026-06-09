"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/lib/data";

const FULL_COUNT = 6;

const PALETTE = [
  { dot: "#2563eb", tagBg: "#eff6ff", tagText: "#1d4ed8", tagBorder: "#bfdbfe" },
  { dot: "#7c3aed", tagBg: "#f5f3ff", tagText: "#6d28d9", tagBorder: "#ddd6fe" },
  { dot: "#0891b2", tagBg: "#ecfeff", tagText: "#0e7490", tagBorder: "#a5f3fc" },
  { dot: "#059669", tagBg: "#ecfdf5", tagText: "#047857", tagBorder: "#a7f3d0" },
  { dot: "#d97706", tagBg: "#fffbeb", tagText: "#b45309", tagBorder: "#fde68a" },
  { dot: "#dc2626", tagBg: "#fef2f2", tagText: "#b91c1c", tagBorder: "#fecaca" },
];

export default function Experience() {
  const { locale, t } = useLang();
  const isTr = locale === "tr";
  const e = t.experience;
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="experience" className="py-20 md:py-24 bg-white px-6 min-h-[600px]" />
    );
  }

  const full    = experiences.slice(0, FULL_COUNT);
  const earlier = experiences.slice(FULL_COUNT);

  return (
    <section id="experience" className="py-20 md:py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReduced ? 0 : 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
            {e.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {e.title}
          </h2>
        </motion.div>

        {/* Timeline content */}
        <div className="relative pl-8 md:pl-10">
          {/* Vertical line indicator */}
          <div className="absolute left-1.5 top-4 bottom-0 w-[1px] bg-slate-200" />

          {full.map((exp, i) => {
            const c = PALETTE[i % PALETTE.length];
            return (
              <motion.div
                key={exp.company + exp.date_en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : i * 0.05 }}
                className="relative pb-10 last:pb-0"
              >
                {/* Timeline node dot */}
                <div
                  className="absolute -left-[2.35rem] top-5 w-3 h-3 rounded-full z-10 border-2"
                  style={{
                    backgroundColor: exp.current ? c.dot : "#ffffff",
                    borderColor: c.dot,
                    boxShadow: exp.current ? `0 0 0 3px ${c.tagBg}` : "none"
                  }}
                />

                {/* Card Container */}
                <div
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-premium hover:border-slate-300"
                  style={{ borderLeftWidth: "4px", borderLeftColor: c.dot }}
                >
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        {isTr && exp.role_tr ? exp.role_tr : exp.role_en}
                      </h3>
                      <div
                        className="text-sm font-bold mt-1"
                        style={{ color: c.dot }}
                      >
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-slate-400 sm:pt-1 whitespace-nowrap">
                      {isTr ? exp.date_tr : exp.date_en}
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {isTr ? exp.desc_tr : exp.desc_en}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {(isTr ? exp.tags_tr : exp.tags).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-[11px] font-bold border transition-colors"
                        style={{
                          backgroundColor: c.tagBg,
                          color: c.tagText,
                          borderColor: c.tagBorder
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Earlier Experiences compact list */}
        {earlier.length > 0 && (
          <div className="mt-14">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-6 pl-8 md:pl-10">
              {e.earlier}
            </h3>
            
            <div className="relative pl-8 md:pl-10">
              {/* Compact timeline line */}
              <div className="absolute left-1.5 top-0 bottom-4 w-[1px] bg-slate-200" />
              
              {earlier.map((exp, i) => (
                <motion.div
                  key={exp.company + exp.date_en}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: prefersReduced ? 0 : 0.3, delay: prefersReduced ? 0 : i * 0.03 }}
                  className="relative pb-6 last:pb-0"
                >
                  {/* Compact list bullet */}
                  <div className="absolute -left-[2.18rem] top-2.5 w-2 h-2 rounded-full bg-white border border-slate-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 pb-4">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-bold text-slate-900">
                        {isTr && exp.role_tr ? exp.role_tr : exp.role_en}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">
                        · {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-400 whitespace-nowrap">
                      {isTr ? exp.date_tr : exp.date_en}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
