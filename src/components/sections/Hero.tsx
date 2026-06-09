"use client";

import { MapPin, Globe, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { useLang } from "@/context/LangContext";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { LINKEDIN_URL, EMAIL } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

type HeroCopyKey = keyof Messages["hero"];

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

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="pt-32 pb-20 md:pt-40 md:pb-28 flex items-center bg-gradient-to-b from-slate-50/50 via-white to-white px-6"
    >
      <div className="max-w-3xl mx-auto w-full">
        <div>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            {h.title_line}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[0.95] mb-6">
            <span className="block">Tansel</span>
            <span className="block text-blue-600">KILIÇ</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mb-8">
            {h.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-sm shadow-blue-600/10 hover:shadow-md hover:shadow-blue-600/20 transition-all duration-200"
            >
              {h.cta_primary}
            </a>
            <a
              href="#experience"
              className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all duration-200"
            >
              {h.cta_secondary}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {HERO_SOCIAL_LINKS.map(({ href, Icon, labelKey, ariaLabelKey }) => (
              <a
                key={labelKey}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-xs font-semibold text-slate-500 rounded-lg hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
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
      </div>
    </section>
  );
}
