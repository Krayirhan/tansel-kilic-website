"use client";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const ABOUT_PARAGRAPHS = ["p1", "p2"] as const;
const ABOUT_PRINCIPLES = ["principle_1", "principle_2", "principle_3", "principle_4"] as const;

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section
      id="about"
      className="py-16 md:py-28 bg-slate-50 border-y border-slate-200/80 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <Reveal duration={0.5}>
            <SectionHeader
              label={a.label}
              title={a.title}
              description={a.subtitle}
              className="mb-8"
              descriptionClassName="text-slate-500 leading-relaxed text-base mt-5 max-w-xl"
            />

            <div className="rounded-3xl bg-blue-950 text-white p-6 md:p-7 shadow-premium">
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-blue-200 mb-4">
                {a.deck_label}
              </div>
              <div className="text-2xl md:text-3xl font-semibold leading-tight mb-5">
                {a.deck_title}
              </div>
              <p className="text-sm leading-relaxed text-blue-100">
                {a.deck_desc}
              </p>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal duration={0.45} className="rounded-3xl bg-white border border-slate-200 p-6 md:p-7 shadow-premium">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                {ABOUT_PARAGRAPHS.map((key) => (
                  <p key={key} className="text-slate-600 leading-relaxed text-base">
                    {a[key]}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_PRINCIPLES.map((key, index) => (
                <Reveal
                  key={key}
                  duration={0.35}
                  delay={Math.min(index * 0.05, 0.2)}
                  margin="-60px"
                  className="rounded-2xl bg-white border border-slate-200 p-5 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-teal-700 flex-shrink-0" />
                    <div className="text-sm font-bold leading-snug text-slate-900">
                      {a[key]}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
