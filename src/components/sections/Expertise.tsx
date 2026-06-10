"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Messages } from "@/lib/i18n";

type ExpertiseCopyKey = keyof Messages["expertise"];

type ExpertiseItem = {
  titleKey: ExpertiseCopyKey;
  descKey: ExpertiseCopyKey;
};

type ExpertiseGroupKey = "group_core" | "group_systems" | "group_leadership";

type ExpertiseGroup = {
  titleKey: ExpertiseGroupKey;
  items: [ExpertiseItem, ExpertiseItem];
};

const EXPERTISE_ITEMS = [
  { titleKey: "ai_title", descKey: "ai_desc" },
  { titleKey: "fintech_title", descKey: "fintech_desc" },
  { titleKey: "cloud_title", descKey: "cloud_desc" },
  { titleKey: "security_title", descKey: "security_desc" },
  { titleKey: "leadership_title", descKey: "leadership_desc" },
  { titleKey: "digital_title", descKey: "digital_desc" },
] satisfies ExpertiseItem[];

const EXPERTISE_GROUPS: ExpertiseGroup[] = [
  { titleKey: "group_core", items: [EXPERTISE_ITEMS[0], EXPERTISE_ITEMS[1]] },
  { titleKey: "group_systems", items: [EXPERTISE_ITEMS[2], EXPERTISE_ITEMS[3]] },
  { titleKey: "group_leadership", items: [EXPERTISE_ITEMS[4], EXPERTISE_ITEMS[5]] },
];

export default function Expertise() {
  const { t } = useLang();
  const e = t.expertise;
  const expertiseCopy = e as Record<string, string>;

  return (
    <section id="expertise" className="bg-[var(--color-paper)] px-6 py-14 md:py-24">
      <div className="section-shell">
        <Reveal duration={0.5} className="mb-10">
          <SectionHeader
            title={e.title}
            description={e.subtitle}
            className="mb-0"
            descriptionClassName="mt-4 max-w-2xl text-base leading-relaxed text-slate-500"
          />
        </Reveal>

        <div className="border-t border-stone-200">
          <div className="grid grid-cols-1 gap-0">
            {EXPERTISE_GROUPS.map((group, i) => (
              <Reveal
                key={group.titleKey}
                duration={0.35}
                delay={Math.min(i * 0.05, 0.2)}
                className="border-b border-stone-200 py-5 last:border-b-0 last:pb-0 first:pt-0"
              >
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.18fr_0.82fr] lg:gap-8">
                  <div className="pt-1 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400">
                    {expertiseCopy[group.titleKey]}
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {group.items.map((item) => (
                      <article key={item.titleKey}>
                        <h3 className="mb-2 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                          {e[item.titleKey]}
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">{e[item.descKey]}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
