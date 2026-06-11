"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Messages } from "@/lib/i18n";

type ResponsibleAICopyKey = keyof Messages["responsibleai"];

type ResponsibleAIProjectItem = {
  tagKey: ResponsibleAICopyKey;
  titleKey: ResponsibleAICopyKey;
  descKey: ResponsibleAICopyKey;
};

type ResponsibleAIPrincipleItem = {
  titleKey: ResponsibleAICopyKey;
  descKey: ResponsibleAICopyKey;
};

const RESPONSIBLE_AI_PROJECTS = [
  { tagKey: "project1_tag", titleKey: "project1_title", descKey: "project1_desc" },
  { tagKey: "project2_tag", titleKey: "project2_title", descKey: "project2_desc" },
] satisfies ResponsibleAIProjectItem[];

const RESPONSIBLE_AI_PRINCIPLES = [
  { titleKey: "p1_title", descKey: "p1_desc" },
  { titleKey: "p2_title", descKey: "p2_desc" },
  { titleKey: "p3_title", descKey: "p3_desc" },
] satisfies ResponsibleAIPrincipleItem[];

export default function ResponsibleAI() {
  const { t } = useLang();
  const r = t.responsibleai;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="responsible-ai"
        className="bg-white px-6 py-14 md:py-20 min-h-[450px]"
      />
    );
  }

  return (
    <section id="responsible-ai" className="bg-white px-6 py-14 md:py-20">
      <div className="section-shell">
        <Reveal duration={0.5}>
          <SectionHeader
            title={r.title}
            description={r.subtitle}
            descriptionClassName="mt-4 max-w-2xl text-base leading-relaxed text-slate-500"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 border-t border-stone-200 pt-6 md:pt-7 lg:grid-cols-[0.34fr_0.66fr] lg:gap-9">
          <div>
            <Reveal duration={0.4} className="mb-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400">
                {r.operating_label}
              </div>
            </Reveal>

            <div className="space-y-3.5 md:space-y-4">
              {RESPONSIBLE_AI_PRINCIPLES.map((principle, i) => (
                <Reveal
                  key={principle.titleKey}
                  duration={0.35}
                  delay={Math.min(i * 0.05, 0.2)}
                  className="border-b border-stone-200 pb-3.5 last:border-b-0 last:pb-0 md:pb-4"
                >
                  <h3 className="mb-1 text-base font-semibold tracking-[-0.02em] text-slate-950 md:mb-1.5 md:text-lg">
                    {r[principle.titleKey]}
                  </h3>
                  <p className={`text-sm leading-6 text-slate-600 ${i > 0 ? "hidden md:block" : ""}`}>
                    {r[principle.descKey]}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-4 border-t border-stone-200 pt-6 lg:border-l lg:border-t-0 lg:border-stone-200 lg:space-y-5 lg:pt-0 lg:pl-8">
              {RESPONSIBLE_AI_PROJECTS.map((project, i) => (
                <Reveal
                  key={project.titleKey}
                  duration={0.4}
                  delay={Math.min(i * 0.06, 0.2)}
                  className="border-b border-stone-200 pb-4 last:border-b-0 last:pb-0 md:pb-6"
                >
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    {r[project.tagKey]}
                  </div>
                  <h3 className="mb-2 text-[1.15rem] font-semibold leading-snug tracking-[-0.03em] text-slate-950 md:text-[1.35rem]">
                    {r[project.titleKey]}
                  </h3>
                  <p className={`max-w-2xl text-sm text-slate-600 ${i > 0 ? "hidden md:block md:leading-7" : "leading-6 md:leading-7"}`}>
                    {r[project.descKey]}
                  </p>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
