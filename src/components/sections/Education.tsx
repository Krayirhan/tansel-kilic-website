"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap } from "lucide-react";
import type { Messages } from "@/lib/i18n";

type EducationCopyKey = keyof Messages["education"];

type EducationItem = {
  titleKey: EducationCopyKey;
  subKey: EducationCopyKey;
  dateKey: EducationCopyKey;
};

const EDUCATION_ITEMS = [
  {
    titleKey: "edu1_title",
    subKey: "edu1_sub",
    dateKey: "edu1_date",
  },
  {
    titleKey: "edu2_title",
    subKey: "edu2_sub",
    dateKey: "edu2_date",
  },
  {
    titleKey: "edu3_title",
    subKey: "edu3_sub",
    dateKey: "edu3_date",
  },
] satisfies EducationItem[];

export default function Education() {
  const { t } = useLang();
  const e = t.education;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="education"
        className="bg-[var(--color-paper)] px-6 py-14 md:py-20 min-h-[300px]"
      />
    );
  }

  return (
    <section id="education" className="bg-[var(--color-paper)] px-6 py-14 md:py-20">
      <div className="section-shell">
        <Reveal duration={0.5}>
          <SectionHeader
            title={e.title}
            description={e.subtitle}
            descriptionClassName="mt-4 max-w-2xl text-base leading-relaxed text-slate-500"
          />
        </Reveal>

        <div className="border-t border-stone-200">
          {EDUCATION_ITEMS.map(({ titleKey, subKey, dateKey }, i) => (
            <Reveal
              key={titleKey}
              duration={0.35}
              delay={Math.min(i * 0.05, 0.2)}
              margin="-50px"
              className="border-b border-stone-200 py-5 last:border-b-0 last:pb-0 first:pt-0"
            >
              <article className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-[var(--color-accent)]">
                    <GraduationCap size={17} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-1 text-base font-semibold leading-snug text-slate-900">
                      {e[titleKey]}
                    </h3>
                    <div className="text-sm leading-6 text-slate-600">{e[subKey]}</div>
                  </div>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 md:pt-1">
                  {e[dateKey]}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
