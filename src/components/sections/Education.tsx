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
    cardClass: "border-t-4 border-t-blue-950 md:col-span-3 lg:col-span-1",
    iconBoxClass: "bg-blue-50",
    iconClass: "text-blue-950",
  },
  {
    titleKey: "edu2_title",
    subKey: "edu2_sub",
    dateKey: "edu2_date",
    cardClass: "border-t-4 border-t-teal-700 md:col-span-3 lg:col-span-1",
    iconBoxClass: "bg-teal-50",
    iconClass: "text-teal-700",
  },
  {
    titleKey: "edu3_title",
    subKey: "edu3_sub",
    dateKey: "edu3_date",
    cardClass: "border-t-4 border-t-amber-700 md:col-span-3 lg:col-span-1",
    iconBoxClass: "bg-amber-50",
    iconClass: "text-amber-700",
  },
] satisfies EducationItem[];

export default function Education() {
  const { t } = useLang();
  const e = t.education;

  return (
    <section
      id="education"
      className="py-16 md:py-28 bg-slate-50 border-y border-slate-200/80 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal duration={0.5} className="mb-10 md:mb-12">
          <SectionHeader
            label={e.label}
            title={e.title}
            description={e.subtitle}
            className="mb-0"
            descriptionClassName="text-slate-500 leading-relaxed text-base mt-5 max-w-2xl"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {EDUCATION_ITEMS.map(({ titleKey, subKey, dateKey, cardClass, iconBoxClass, iconClass }, i) => (
            <Reveal
              key={titleKey}
              duration={0.4}
              delay={Math.min(i * 0.05, 0.3)}
              margin="-50px"
              className={`bg-white border border-slate-200/90 rounded-3xl p-6 md:p-7 flex gap-4 items-start transition-all duration-300 shadow-sm hover:shadow-premium hover:-translate-y-1 hover:border-slate-300 ${cardClass}`}
            >
              <div className={`p-3 rounded-2xl flex-shrink-0 ${iconBoxClass}`}>
                <GraduationCap size={21} className={iconClass} />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-1 leading-snug">
                  {e[titleKey]}
                </h3>
                <div className="text-sm text-slate-500 leading-relaxed">
                  {e[subKey]}
                </div>
                <div className="text-[11px] font-bold text-slate-400 mt-4 tracking-wider uppercase">
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
