"use client";
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
  cardClass: string;
  iconBoxClass: string;
  iconClass: string;
};

const EDUCATION_ITEMS = [
  {
    titleKey: "edu1_title",
    subKey: "edu1_sub",
    dateKey: "edu1_date",
    cardClass: "border-t-4 border-t-blue-600",
    iconBoxClass: "bg-blue-50",
    iconClass: "text-blue-600",
  },
  {
    titleKey: "edu2_title",
    subKey: "edu2_sub",
    dateKey: "edu2_date",
    cardClass: "border-t-4 border-t-violet-600",
    iconBoxClass: "bg-violet-50",
    iconClass: "text-violet-600",
  },
  {
    titleKey: "edu3_title",
    subKey: "edu3_sub",
    dateKey: "edu3_date",
    cardClass: "border-t-4 border-t-emerald-600",
    iconBoxClass: "bg-emerald-50",
    iconClass: "text-emerald-600",
  },
] satisfies EducationItem[];

export default function Education() {
  const { t } = useLang();
  const e = t.education;

  return (
    <section
      id="education"
      className="py-20 md:py-24 bg-white border-b border-slate-200/80 px-6"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <Reveal duration={0.5} className="mb-12">
          <SectionHeader label={e.label} title={e.title} className="mb-0" />
        </Reveal>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_ITEMS.map(({ titleKey, subKey, dateKey, cardClass, iconBoxClass, iconClass }, i) => (
            <Reveal
              key={titleKey}
              duration={0.4}
              delay={Math.min(i * 0.05, 0.3)}
              margin="-50px"
              className={`bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex gap-4 items-start transition-all duration-300 hover:shadow-premium hover:bg-white hover:border-slate-300 ${cardClass}`}
            >
              <div className={`p-2 rounded-lg flex-shrink-0 ${iconBoxClass}`}>
                <GraduationCap size={20} className={iconClass} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 mb-1 leading-snug">
                  {e[titleKey]}
                </h3>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {e[subKey]}
                </div>
                <div className="text-[10px] font-bold text-slate-400 mt-2 tracking-wider">
                  {e[dateKey]}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
