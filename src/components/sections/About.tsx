"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const ABOUT_PARAGRAPHS = ["p1", "p2"] as const;
const ABOUT_PRINCIPLES = ["principle_1", "principle_2", "principle_3", "principle_4"] as const;

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="about"
        aria-label="About"
        className="bg-[var(--color-paper)] px-6 py-14 md:py-20 min-h-[400px]"
      />
    );
  }

  return (
    <section id="about" className="bg-[var(--color-paper)] px-6 py-14 md:py-20">
      <div className="section-shell">
        <Reveal duration={0.5}>
          <SectionHeader
            title={a.title}
            description={a.subtitle}
            descriptionClassName="mt-4 max-w-2xl text-base leading-relaxed text-slate-500"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 border-t border-stone-200 pt-6 md:pt-7 lg:grid-cols-[0.72fr_0.28fr] lg:gap-8">
          <div className="space-y-3.5 md:space-y-4">
            <Reveal duration={0.4}>
              <div className="max-w-3xl text-lg font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[1.45rem]">
                {a.deck_title}
              </div>
            </Reveal>

            <Reveal duration={0.45}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7">
                {ABOUT_PARAGRAPHS.map((key) => (
                  <p key={key} className="text-[0.97rem] leading-6 text-slate-600 md:leading-7">
                    {a[key]}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="border-t border-stone-200 pt-6 lg:border-l lg:border-t-0 lg:border-stone-200 lg:pl-7 lg:pt-0">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1">
              {ABOUT_PRINCIPLES.map((key, index) => (
                <Reveal
                  key={key}
                  duration={0.35}
                  delay={Math.min(index * 0.05, 0.2)}
                  margin="-60px"
                  className="border-b border-stone-200 pb-3 md:last:border-b-0 md:last:pb-0 lg:last:border-b-0 lg:last:pb-0"
                >
                  <div className="text-sm font-semibold leading-5 text-slate-700">{a[key]}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
