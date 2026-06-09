"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import { BrainCircuit, Landmark, Cloud, ShieldCheck, Users, Rocket } from "lucide-react";

const ACCENTS = ["#2563eb", "#7c3aed", "#0891b2", "#059669", "#d97706", "#dc2626"];
const ICONS = [BrainCircuit, Landmark, Cloud, ShieldCheck, Users, Rocket];

export default function Expertise() {
  const { t } = useLang();
  const e = t.expertise;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="expertise" className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/80 px-6 min-h-[500px]" />
    );
  }

  const cards = [
    { title: e.ai_title, desc: e.ai_desc },
    { title: e.fintech_title, desc: e.fintech_desc },
    { title: e.cloud_title, desc: e.cloud_desc },
    { title: e.security_title, desc: e.security_desc },
    { title: e.leadership_title, desc: e.leadership_desc },
    { title: e.digital_title, desc: e.digital_desc },
  ];

  return (
    <section
      id="expertise"
      className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/80 px-6"
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
            {e.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {e.title}
          </h2>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = ICONS[i];
            const accentColor = ACCENTS[i % ACCENTS.length];

            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Border-top decoration */}
                <div
                  className="absolute top-0 inset-x-0 h-1.5"
                  style={{ backgroundColor: accentColor }}
                />

                {/* Icon Box */}
                <div
                  className="inline-flex items-center justify-center p-3 rounded-xl mb-4 mt-2"
                  style={{ backgroundColor: `${accentColor}10` }}
                >
                  <Icon size={22} style={{ color: accentColor }} />
                </div>

                {/* Titles & Description */}
                <h3 className="text-base font-bold text-slate-900 mb-2.5 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
