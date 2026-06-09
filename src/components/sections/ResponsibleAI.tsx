"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Messages } from "@/lib/i18n";

type ResponsibleAICopyKey = keyof Messages["responsibleai"];

type ResponsibleAIProjectItem = {
  tagKey: ResponsibleAICopyKey;
  titleKey: ResponsibleAICopyKey;
  descKey: ResponsibleAICopyKey;
  cardClass: string;
  tagClass: string;
};

type ResponsibleAIPrincipleItem = {
  titleKey: ResponsibleAICopyKey;
  descKey: ResponsibleAICopyKey;
};

const RESPONSIBLE_AI_PROJECTS = [
  {
    tagKey: "project1_tag",
    titleKey: "project1_title",
    descKey: "project1_desc",
    cardClass: "border-t-4 border-t-blue-950",
    tagClass: "bg-blue-50 text-blue-900",
  },
  {
    tagKey: "project2_tag",
    titleKey: "project2_title",
    descKey: "project2_desc",
    cardClass: "border-t-4 border-t-teal-700",
    tagClass: "bg-teal-50 text-teal-700",
  },
] satisfies ResponsibleAIProjectItem[];

const RESPONSIBLE_AI_PRINCIPLES = [
  { titleKey: "p1_title", descKey: "p1_desc" },
  { titleKey: "p2_title", descKey: "p2_desc" },
  { titleKey: "p3_title", descKey: "p3_desc" },
] satisfies ResponsibleAIPrincipleItem[];

export default function ResponsibleAI() {
  const { t } = useLang();
  const r = t.responsibleai;

  return (
    <section id="responsible-ai" className="py-16 md:py-28 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <Reveal duration={0.5}>
            <SectionHeader
              label={r.label}
              title={r.title}
              description={r.subtitle}
              className="mb-8"
              descriptionClassName="text-slate-500 leading-relaxed text-base max-w-xl mt-4"
            />

            <div className="rounded-3xl bg-slate-950 text-white p-6 md:p-7">
              <div className="text-xs font-bold tracking-[0.22em] uppercase text-teal-200 mb-4">
                {r.operating_label}
              </div>
              <div className="space-y-3">
                {RESPONSIBLE_AI_PRINCIPLES.map((principle) => (
                  <div key={principle.titleKey} className="rounded-2xl bg-white/6 border border-white/10 px-4 py-3">
                    <div className="text-sm font-bold text-white mb-1">{r[principle.titleKey]}</div>
                    <p className="text-xs leading-relaxed text-slate-300">{r[principle.descKey]}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5">
            {RESPONSIBLE_AI_PROJECTS.map((project, i) => (
              <Reveal
                key={project.titleKey}
                duration={0.4}
                delay={Math.min(i * 0.08, 0.3)}
                margin="-80px"
                className={`bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 md:p-7 hover:shadow-premium-hover hover:bg-white transition-all duration-300 ${project.cardClass}`}
              >
                <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full mb-4 ${project.tagClass}`}>
                  {r[project.tagKey]}
                </span>
                <h3 className="text-xl font-bold text-slate-950 mb-3 leading-snug">{r[project.titleKey]}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{r[project.descKey]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
