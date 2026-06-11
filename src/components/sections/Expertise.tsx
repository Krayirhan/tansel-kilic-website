"use client";

import { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="expertise"
        aria-label="Expertise"
        className="bg-[var(--color-paper)] px-6 py-14 md:py-20 min-h-[500px]"
      />
    );
  }

  return (
    <section id="expertise" className="bg-[var(--color-paper)] px-6 py-14 md:py-20">
      <div className="section-shell">
        <Reveal duration={0.5}>
          <SectionHeader
            title={e.title}
            description={e.subtitle}
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
                className="border-b border-stone-200 py-4 last:border-b-0 last:pb-0 md:py-5 first:pt-0"
              >
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-[0.18fr_0.82fr] lg:gap-8">
                  <div className="pt-0.5 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400">
                    {expertiseCopy[group.titleKey]}
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                    {group.items.map((item, itemIndex) => (
                      <article key={item.titleKey}>
                        <h3 className="mb-1.5 text-base font-semibold tracking-[-0.02em] text-slate-950 md:mb-2 md:text-lg">
                          {e[item.titleKey]}
                        </h3>
                        <p
                          className={`text-sm text-slate-600 ${itemIndex > 0 ? "hidden md:block md:leading-6" : "leading-5 md:leading-6"}`}
                        >
                          {e[item.descKey]}
                        </p>
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
