"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { currentDuration, experiences } from "@/lib/data";

const FULL_COUNT = 6;

const PALETTE = [
  { dot: "#1e3a8a", tagBg: "#eff6ff", tagText: "#1e3a8a", tagBorder: "#bfdbfe" },
  { dot: "#0f766e", tagBg: "#f0fdfa", tagText: "#0f766e", tagBorder: "#99f6e4" },
  { dot: "#0369a1", tagBg: "#f0f9ff", tagText: "#0369a1", tagBorder: "#bae6fd" },
  { dot: "#334155", tagBg: "#f8fafc", tagText: "#334155", tagBorder: "#cbd5e1" },
  { dot: "#b45309", tagBg: "#fffbeb", tagText: "#b45309", tagBorder: "#fde68a" },
  { dot: "#1d4ed8", tagBg: "#eff6ff", tagText: "#1d4ed8", tagBorder: "#bfdbfe" },
];

export default function Experience() {
  const { locale, t } = useLang();
  const isTr = locale === "tr";
  const e = t.experience;

  const full = experiences.slice(0, FULL_COUNT);
  const earlier = experiences.slice(FULL_COUNT);

  return (
    <section id="experience" className="py-16 md:py-28 bg-slate-50 border-y border-slate-200/80 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal duration={0.5} className="mb-12">
          <SectionHeader
            label={e.label}
            title={e.title}
            description={e.subtitle}
            className="mb-0"
            descriptionClassName="text-slate-500 leading-relaxed text-base max-w-2xl mt-4"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {full.map((exp, i) => {
            const c = PALETTE[i % PALETTE.length];
            return (
              <Reveal
                key={exp.company + exp.date_en}
                duration={0.4}
                delay={Math.min(i * 0.05, 0.3)}
                className="h-full"
              >
                <article
                  className="h-full bg-white border border-slate-200/90 rounded-3xl p-6 md:p-7 transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1"
                  style={{ borderTopWidth: "4px", borderTopColor: c.dot }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <div
                        className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
                        style={{ color: c.dot }}
                      >
                        {exp.company}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-950 tracking-tight leading-snug">
                        {isTr && exp.role_tr ? exp.role_tr : exp.role_en}
                      </h3>
                    </div>
                    <div className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-500 whitespace-nowrap">
                      {isTr ? exp.date_tr : exp.date_en}
                    </div>
                  </div>

                  {exp.current && exp.start_date ? (
                    <div className="inline-flex items-center rounded-full bg-teal-50 border border-teal-100 px-3 py-1 text-[11px] font-bold text-teal-700 mb-4">
                      {currentDuration(exp.start_date, isTr ? "tr" : "en")}
                    </div>
                  ) : null}

                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {isTr ? exp.desc_tr : exp.desc_en}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {(isTr ? exp.tags_tr : exp.tags).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-[11px] font-bold border transition-colors"
                        style={{
                          backgroundColor: c.tagBg,
                          color: c.tagText,
                          borderColor: c.tagBorder,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {earlier.length > 0 ? (
          <div className="mt-12 rounded-3xl bg-white border border-slate-200 p-5 md:p-6">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-5">
              {e.earlier}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {earlier.map((exp, i) => (
                <Reveal
                  key={exp.company + exp.date_en}
                  duration={0.3}
                  delay={Math.min(i * 0.03, 0.3)}
                  className="border-b border-slate-200 py-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
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
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
