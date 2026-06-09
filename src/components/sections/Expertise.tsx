"use client";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { BrainCircuit, Landmark, Cloud, ShieldCheck, Users, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Messages } from "@/lib/i18n";

type ExpertiseCopyKey = keyof Messages["expertise"];

type ExpertiseItem = {
  titleKey: ExpertiseCopyKey;
  descKey: ExpertiseCopyKey;
  Icon: LucideIcon;
  barClass: string;
  iconBoxClass: string;
  iconClass: string;
};

const EXPERTISE_ITEMS = [
  {
    titleKey: "ai_title",
    descKey: "ai_desc",
    Icon: BrainCircuit,
    barClass: "bg-blue-600",
    iconBoxClass: "bg-blue-50",
    iconClass: "text-blue-600",
  },
  {
    titleKey: "fintech_title",
    descKey: "fintech_desc",
    Icon: Landmark,
    barClass: "bg-violet-600",
    iconBoxClass: "bg-violet-50",
    iconClass: "text-violet-600",
  },
  {
    titleKey: "cloud_title",
    descKey: "cloud_desc",
    Icon: Cloud,
    barClass: "bg-cyan-600",
    iconBoxClass: "bg-cyan-50",
    iconClass: "text-cyan-600",
  },
  {
    titleKey: "security_title",
    descKey: "security_desc",
    Icon: ShieldCheck,
    barClass: "bg-emerald-600",
    iconBoxClass: "bg-emerald-50",
    iconClass: "text-emerald-600",
  },
  {
    titleKey: "leadership_title",
    descKey: "leadership_desc",
    Icon: Users,
    barClass: "bg-amber-600",
    iconBoxClass: "bg-amber-50",
    iconClass: "text-amber-600",
  },
  {
    titleKey: "digital_title",
    descKey: "digital_desc",
    Icon: Rocket,
    barClass: "bg-red-600",
    iconBoxClass: "bg-red-50",
    iconClass: "text-red-600",
  },
] satisfies ExpertiseItem[];

export default function Expertise() {
  const { t } = useLang();
  const e = t.expertise;

  return (
    <section
      id="expertise"
      className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/80 px-6"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <Reveal duration={0.5} className="mb-12">
          <SectionHeader label={e.label} title={e.title} className="mb-0" />
        </Reveal>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_ITEMS.map(({ titleKey, descKey, Icon, barClass, iconBoxClass, iconClass }, i) => {
            const title = e[titleKey];
            const desc = e[descKey];

            return (
              <Reveal
                key={titleKey}
                duration={0.4}
                delay={Math.min(i * 0.05, 0.3)}
                margin="-50px"
                className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
              >
                {/* Border-top decoration */}
                <div className={`absolute top-0 inset-x-0 h-1.5 ${barClass}`} />

                {/* Icon Box */}
                <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 mt-2 ${iconBoxClass}`}>
                  <Icon size={22} className={iconClass} />
                </div>

                {/* Titles & Description */}
                <h3 className="text-base font-bold text-slate-900 mb-2.5 tracking-tight">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
