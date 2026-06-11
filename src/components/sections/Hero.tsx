"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Globe, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { useLang } from "@/context/LangContext";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { LINKEDIN_URL } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

type HeroCopyKey = keyof Messages["hero"];
type HeroFocusKey = "focus_1" | "focus_2" | "focus_3";

type HeroSocialLink = {
  href: string;
  Icon: ComponentType<{ size?: number }> | LucideIcon;
  labelKey: HeroCopyKey;
  ariaLabelKey: HeroCopyKey;
};

const HERO_SOCIAL_LINKS = [
  {
    href: LINKEDIN_URL,
    Icon: LinkedInIcon,
    labelKey: "linkedin_label",
    ariaLabelKey: "linkedin_aria_label",
  },
] satisfies HeroSocialLink[];

const HERO_FOCUS = ["focus_1", "focus_2", "focus_3"] satisfies HeroFocusKey[];

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="hero"
        aria-label="Hero"
        className="executive-shell relative overflow-hidden px-6 pb-12 pt-24 md:pb-16 md:pt-30 min-h-[450px]"
      />
    );
  }

  return (
    <section
      id="hero"
      className="executive-shell relative overflow-hidden px-6 pb-12 pt-24 md:pb-16 md:pt-30"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />

      <div className="section-shell grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[1.28fr_0.44fr] lg:gap-8">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.05em] text-slate-950 sm:text-[4.6rem] md:text-[5.35rem]">
            {h.name}
          </h1>

          <div className="mb-3 max-w-3xl text-[1.7rem] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-800 sm:text-[2.25rem] md:text-[2.18rem]">
            {h.headline}
          </div>

          <p className="mb-7 max-w-[39rem] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.04rem] md:mb-6 md:text-[1rem] md:leading-8">
            {h.subtitle}
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)]"
            >
              {h.cta_primary} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href="#experience"
              className="rounded-xl border border-stone-300 bg-white/88 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-stone-400 hover:bg-white"
            >
              {h.cta_secondary}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5 border-t border-stone-200 pt-4">
            {HERO_SOCIAL_LINKS.map(({ href, Icon, labelKey, ariaLabelKey }) => (
              <a
                key={labelKey}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3.5 py-2 text-[0.74rem] font-semibold text-slate-500 transition-all duration-200 hover:border-stone-300 hover:text-slate-800"
                aria-label={h[ariaLabelKey]}
              >
                <span aria-hidden="true">
                  <Icon size={14} />
                </span>
                {h[labelKey]}
              </a>
            ))}

            <span className="hidden h-4 w-px bg-stone-200 sm:block" />

            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <MapPin size={13} className="text-slate-400" aria-hidden="true" />
              {h.card_location}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <Globe size={13} className="text-slate-400" aria-hidden="true" />
              {h.card_langs}
            </div>
          </div>
        </div>

        <aside className="hidden border-l border-stone-200 pl-5 pt-1 lg:block">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
            {h.focus_title}
          </div>

          <div className="space-y-2">
            {HERO_FOCUS.map((key) => (
              <div
                key={key}
                className="border-b border-stone-200 pb-2 last:border-b-0 last:pb-0"
              >
                <span className="block text-[0.92rem] font-semibold leading-snug tracking-[-0.01em] text-slate-800">
                  {h[key]}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
