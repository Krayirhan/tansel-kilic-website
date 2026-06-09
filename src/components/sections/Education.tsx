"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { t } = useLang();
  const a = t.about;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="education" className="py-20 md:py-24 bg-white border-b border-slate-200/80 px-6 min-h-[400px]" />
    );
  }

  const cards = [
    { title: a.edu1_title, sub: a.edu1_sub, date: a.edu1_date, accent: "#2563eb" },
    { title: a.edu2_title, sub: a.edu2_sub, date: a.edu2_date, accent: "#7c3aed" },
    { title: a.edu3_title, sub: a.edu3_sub, date: a.edu3_date, accent: "#059669" },
  ];

  return (
    <section
      id="education"
      className="py-20 md:py-24 bg-white border-b border-slate-200/80 px-6"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
            {t.education.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.education.label}
          </h2>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex gap-4 items-start transition-all duration-300 hover:shadow-premium hover:bg-white hover:border-slate-300"
              style={{ borderTopWidth: "4px", borderTopColor: c.accent, willChange: "transform, opacity" }}
            >
              <div
                className="p-2 rounded-lg flex-shrink-0"
                style={{ backgroundColor: `${c.accent}10` }}
              >
                <GraduationCap size={20} style={{ color: c.accent }} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 mb-1 leading-snug">
                  {c.title}
                </h3>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {c.sub}
                </div>
                <div className="text-[10px] font-bold text-slate-400 mt-2 tracking-wider">
                  {c.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
