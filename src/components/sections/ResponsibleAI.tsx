"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useReducedMotion } from "framer-motion";

export default function ResponsibleAI() {
  const { t } = useLang();
  const r = t.responsibleai;
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <section id="responsible-ai" className="py-20 md:py-24 bg-white px-6 min-h-[500px]" />;
  }

  const projects = [
    { tag: r.project1_tag, title: r.project1_title, desc: r.project1_desc, accent: "#2563eb", tagBg: "#eff6ff", tagText: "#1d4ed8" },
    { tag: r.project2_tag, title: r.project2_title, desc: r.project2_desc, accent: "#7c3aed", tagBg: "#f5f3ff", tagText: "#6d28d9" },
  ];

  const principles = [
    { title: r.p1_title, desc: r.p1_desc },
    { title: r.p2_title, desc: r.p2_desc },
    { title: r.p3_title, desc: r.p3_desc },
  ];

  return (
    <section id="responsible-ai" className="py-20 md:py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReduced ? 0 : 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
            {r.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            {r.title}
          </h2>
          <p className="text-slate-500 leading-relaxed text-base max-w-2xl">
            {r.subtitle}
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: prefersReduced ? 0 : 0.4, delay: prefersReduced ? 0 : i * 0.08 }}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-premium hover:bg-white transition-all duration-300"
              style={{ borderLeftWidth: "4px", borderLeftColor: p.accent }}
            >
              <span
                className="inline-block text-[11px] font-bold px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: p.tagBg, color: p.tagText }}
              >
                {p.tag}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : i * 0.07 }}
              className="bg-slate-50 border border-slate-200/80 rounded-xl px-5 py-4"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-900">{p.title}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
