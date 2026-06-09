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
  cardClass: string;
};

const EXPERTISE_ITEMS = [
  {
    titleKey: "ai_title",
    descKey: "ai_desc",
    Icon: BrainCircuit,
    barClass: "bg-blue-950",
    iconBoxClass: "bg-blue-50",
    iconClass: "text-blue-900",
    cardClass: "hover:border-blue-200",
  },
  {
    titleKey: "fintech_title",
    descKey: "fintech_desc",
    Icon: Landmark,
    barClass: "bg-teal-700",
    iconBoxClass: "bg-teal-50",
    iconClass: "text-teal-700",
    cardClass: "hover:border-teal-200",
  },
  {
    titleKey: "cloud_title",
    descKey: "cloud_desc",
    Icon: Cloud,
    barClass: "bg-sky-700",
    iconBoxClass: "bg-sky-50",
    iconClass: "text-sky-700",
    cardClass: "hover:border-sky-200",
  },
  {
    titleKey: "security_title",
    descKey: "security_desc",
    Icon: ShieldCheck,
    barClass: "bg-slate-800",
    iconBoxClass: "bg-slate-100",
    iconClass: "text-slate-800",
    cardClass: "hover:border-slate-300",
  },
  {
    titleKey: "leadership_title",
    descKey: "leadership_desc",
    Icon: Users,
    barClass: "bg-amber-700",
    iconBoxClass: "bg-amber-50",
    iconClass: "text-amber-700",
    cardClass: "hover:border-amber-200",
  },
  {
    titleKey: "digital_title",
    descKey: "digital_desc",
    Icon: Rocket,
    barClass: "bg-blue-700",
    iconBoxClass: "bg-blue-50",
    iconClass: "text-blue-700",
    cardClass: "hover:border-blue-200",
  },
] satisfies ExpertiseItem[];

export default function Expertise() {
  const { t } = useLang();
  const e = t.expertise;

  return (
    <section
      id="expertise"
      className="py-16 md:py-28 bg-white px-6"
    >
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_ITEMS.map(({ titleKey, descKey, Icon, barClass, iconBoxClass, iconClass, cardClass }, i) => {
            const title = e[titleKey];
            const desc = e[descKey];

            return (
              <Reveal
                key={titleKey}
                duration={0.4}
                delay={Math.min(i * 0.05, 0.3)}
                margin="-50px"
                className={`bg-slate-50/70 border border-slate-200 rounded-3xl p-6 relative overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-premium-hover hover:-translate-y-1 ${cardClass}`}
              >
                <div className={`absolute top-0 inset-x-0 h-1.5 ${barClass}`} />

                <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 mt-2 ${iconBoxClass}`}>
                  <Icon size={22} className={iconClass} />
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-3 tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
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
