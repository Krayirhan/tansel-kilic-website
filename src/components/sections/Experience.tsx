"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { currentDuration, experiences } from "@/lib/data";

const FULL_COUNT = 6;

export default function Experience() {
  const { locale, t } = useLang();
  const isTr = locale === "tr";
  const e = t.experience;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="experience"
        className="bg-white px-6 py-14 md:py-20 min-h-[600px]"
      />
    );
  }

  const full = experiences.slice(0, FULL_COUNT);
  const featured = full[0];
  const selected = full.slice(1);
  const earlier = experiences.slice(FULL_COUNT);

  return (
    <section id="experience" className="bg-white px-6 py-14 md:py-20">
      <div className="section-shell">
        <Reveal duration={0.5}>
          <SectionHeader
            title={e.title}
            description={e.subtitle}
            descriptionClassName="mt-3 max-w-2xl text-sm leading-7 text-slate-500 md:text-base"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 border-t border-stone-200 pt-6 md:pt-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {featured ? (
            <Reveal duration={0.45}>
              <article className="border-l-[3px] border-[var(--color-accent)] pl-4 md:pl-6">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-500">
                  {featured.company}
                </div>

                <h3 className="max-w-xl text-[1.7rem] font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 md:text-[2rem]">
                  {isTr && featured.role_tr ? featured.role_tr : featured.role_en}
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  <span>{isTr ? featured.date_tr : featured.date_en}</span>
                  {featured.current && featured.start_date ? (
                    <span>{currentDuration(featured.start_date, isTr ? "tr" : "en")}</span>
                  ) : null}
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-[0.97rem]">
                  {isTr ? featured.desc_tr : featured.desc_en}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(isTr ? featured.tags_tr : featured.tags).slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ) : null}

          <div className="border-t border-stone-200 pt-6 lg:border-t-0 lg:border-l lg:border-stone-200 lg:pt-0 lg:pl-8">
            {selected.map((exp, i) => (
              <Reveal
                key={exp.company + exp.date_en}
                duration={0.35}
                delay={Math.min(i * 0.04, 0.2)}
                className="border-b border-stone-200 py-4 md:py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <article>
                  <div className="mb-2 flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-slate-950">
                      {isTr && exp.role_tr ? exp.role_tr : exp.role_en}
                    </h3>
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      {isTr ? exp.date_tr : exp.date_en}
                    </div>
                  </div>

                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    {exp.company}
                  </div>

                  {i < 2 ? (
                    <p className="max-w-2xl text-sm leading-6 text-slate-600">
                      {isTr ? exp.desc_tr : exp.desc_en}
                    </p>
                  ) : (
                    <p className="hidden max-w-2xl text-sm leading-6 text-slate-600 md:block">
                      {isTr ? exp.desc_tr : exp.desc_en}
                    </p>
                  )}

                  <div className={`mt-3 flex flex-wrap gap-2 ${i >= 2 ? "hidden md:flex" : ""}`}>
                    {(isTr ? exp.tags_tr : exp.tags).slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] font-bold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {earlier.length > 0 ? (
          <div className="mt-8 border-t border-stone-200 pt-5 md:mt-10 md:pt-6">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400 md:mb-5">
              {e.earlier}
            </h3>

            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
              {earlier.map((exp, i) => (
                <Reveal
                  key={exp.company + exp.date_en}
                  duration={0.3}
                  delay={Math.min(i * 0.03, 0.3)}
                  className="border-b border-stone-200 py-3 last:border-b-0 md:py-3.5 md:last:border-b md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm font-semibold text-slate-900">
                      {isTr && exp.role_tr ? exp.role_tr : exp.role_en}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {exp.company}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
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
