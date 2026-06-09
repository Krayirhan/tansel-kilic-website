"use client";

import { ArrowUpRight, CheckCircle2, Globe, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { useLang } from "@/context/LangContext";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { EMAIL, LINKEDIN_URL } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

type HeroCopyKey = keyof Messages["hero"];
type HeroProofKey = "proof_1" | "proof_2" | "proof_3";
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
  {
    href: `mailto:${EMAIL}`,
    Icon: Mail,
    labelKey: "email_label",
    ariaLabelKey: "email_aria_label",
  },
] satisfies HeroSocialLink[];

const HERO_PROOFS = ["proof_1", "proof_2", "proof_3"] satisfies HeroProofKey[];
const HERO_FOCUS = ["focus_1", "focus_2", "focus_3"] satisfies HeroFocusKey[];

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="executive-shell relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-24 px-6"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.75fr] gap-10 lg:gap-16 items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 text-[11px] font-bold text-slate-600 tracking-[0.22em] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-700" />
            {h.title_line}
          </div>

          <div className="text-sm font-bold text-blue-900 mb-4 tracking-wide">
            {h.name}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-slate-950 leading-[0.94] mb-6">
            {h.headline}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            {h.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-950 hover:bg-slate-950 text-white rounded-xl text-sm font-bold shadow-sm shadow-blue-950/10 hover:shadow-md hover:shadow-blue-950/20 transition-all duration-200"
            >
              {h.cta_primary} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href="#experience"
              className="px-6 py-3.5 bg-white/85 hover:bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all duration-200"
            >
              {h.cta_secondary}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {HERO_PROOFS.map((key) => (
              <div key={key} className="signal-card rounded-2xl px-4 py-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="text-teal-700 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold leading-snug text-slate-800">
                    {h[key]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {HERO_SOCIAL_LINKS.map(({ href, Icon, labelKey, ariaLabelKey }) => (
              <a
                key={labelKey}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-xs font-semibold text-slate-500 rounded-lg hover:text-blue-900 hover:border-blue-200 transition-all duration-200"
                aria-label={h[ariaLabelKey]}
              >
                <span aria-hidden="true">
                  <Icon size={14} />
                </span>
                {h[labelKey]}
              </a>
            ))}

            <span className="hidden sm:block w-px h-4 bg-slate-200" />

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

        <aside className="signal-card hidden lg:block rounded-[2rem] p-6 md:p-7 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-950 via-teal-700 to-amber-700" />

          <div className="flex items-start justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-bold tracking-[0.24em] uppercase text-slate-400 mb-2">
                {h.focus_label}
              </div>
              <div className="text-2xl font-semibold text-slate-950 leading-tight">
                {h.focus_title}
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-950 text-white flex items-center justify-center shadow-sm">
              <Globe size={21} aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {HERO_FOCUS.map((key) => (
              <div
                key={key}
                className="flex items-center justify-between gap-5 rounded-2xl bg-slate-50 border border-slate-200/80 px-4 py-3"
              >
                <span className="text-sm font-semibold text-slate-700">{h[key]}</span>
                <span className="w-2 h-2 rounded-full bg-teal-700 flex-shrink-0" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-blue-950 text-white p-4">
              <div className="text-3xl font-bold leading-none">20+</div>
              <div className="text-[11px] font-semibold text-blue-100 mt-2 leading-snug">
                {h.card_experience}
              </div>
            </div>
            <div className="rounded-2xl bg-teal-700 text-white p-4">
              <div className="text-3xl font-bold leading-none">50+</div>
              <div className="text-[11px] font-semibold text-teal-50 mt-2 leading-snug">
                {h.card_engineers}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
