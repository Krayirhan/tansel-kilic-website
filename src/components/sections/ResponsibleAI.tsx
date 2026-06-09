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
    cardClass: "border-l-4 border-l-blue-600",
    tagClass: "bg-blue-50 text-blue-700",
  },
  {
    tagKey: "project2_tag",
    titleKey: "project2_title",
    descKey: "project2_desc",
    cardClass: "border-l-4 border-l-violet-600",
    tagClass: "bg-violet-50 text-violet-700",
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
    <section id="responsible-ai" className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/80 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <Reveal duration={0.5} className="mb-12">
          <SectionHeader
            label={r.label}
            title={r.title}
            description={r.subtitle}
            className="mb-0"
            descriptionClassName="text-slate-500 leading-relaxed text-base max-w-2xl mt-4"
          />
        </Reveal>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {RESPONSIBLE_AI_PROJECTS.map((project, i) => (
            <Reveal
              key={project.titleKey}
              duration={0.4}
              delay={Math.min(i * 0.08, 0.3)}
              margin="-80px"
              className={`bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-premium hover:bg-white transition-all duration-300 ${project.cardClass}`}
            >
              <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full mb-4 ${project.tagClass}`}>
                {r[project.tagKey]}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{r[project.titleKey]}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{r[project.descKey]}</p>
            </Reveal>
          ))}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {RESPONSIBLE_AI_PRINCIPLES.map((principle, i) => (
            <Reveal
              key={principle.titleKey}
              duration={0.35}
              delay={Math.min(i * 0.07, 0.3)}
              margin="-60px"
              className="bg-slate-50 border border-slate-200/80 rounded-xl px-5 py-4"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-900">{r[principle.titleKey]}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{r[principle.descKey]}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
