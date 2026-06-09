"use client";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { LINKEDIN_URL, EMAIL } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

type ContactCopyKey = keyof Messages["contact"];

type ContactItem = {
  Icon: ComponentType<{ size?: number }> | LucideIcon;
  labelKey: ContactCopyKey;
  subKey: ContactCopyKey;
  href?: string;
  iconBorder: string;
  iconClass: string;
  iconBoxClass: string;
  cardHoverClass: string;
};

const CONTACT_ITEMS = [
  {
    Icon: LinkedInIcon,
    labelKey: "linkedin",
    subKey: "linkedin_sub",
    href: LINKEDIN_URL,
    iconBorder: "border-blue-200",
    iconClass: "text-blue-600",
    iconBoxClass: "bg-blue-50",
    cardHoverClass: "hover:border-blue-300 hover:bg-blue-50/30 hover:translate-x-1.5",
  },
  {
    Icon: Mail,
    labelKey: "email",
    subKey: "email_sub",
    href: `mailto:${EMAIL}`,
    iconBorder: "border-emerald-200",
    iconClass: "text-emerald-600",
    iconBoxClass: "bg-emerald-50",
    cardHoverClass: "hover:border-emerald-300 hover:bg-emerald-50/30 hover:translate-x-1.5",
  },
  {
    Icon: MapPin,
    labelKey: "location",
    subKey: "location_sub",
    iconBorder: "border-violet-200",
    iconClass: "text-violet-600",
    iconBoxClass: "bg-violet-50",
    cardHoverClass: "hover:border-violet-300 hover:bg-violet-50/30",
  },
] satisfies ContactItem[];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/80 px-6"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Column */}
        <Reveal duration={0.5}>
          <SectionHeader
            label={c.label}
            title={c.title}
            description={c.desc}
            className="mb-8"
            descriptionClassName="text-slate-500 leading-relaxed text-base mt-5"
          />

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 text-xs font-bold text-emerald-800">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-500 block" />
            </span>
            {c.avail_reply}
          </div>
        </Reveal>

        {/* Right Column */}
        <div className="flex flex-col gap-3.5">
          {CONTACT_ITEMS.map((item, i) => {
            const label = c[item.labelKey];
            const sub = c[item.subKey];
            const cardClass = `flex items-center gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-premium transition-all duration-300 ${item.cardHoverClass}`;
            const inner = (
              <>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0 ${item.iconBorder} ${item.iconBoxClass} ${item.iconClass}`}
                >
                  <item.Icon size={18} />
                </div>
                <span className="font-bold text-sm text-slate-900">{label}</span>
                <span className="ml-auto text-[11px] font-bold text-slate-400">{sub}</span>
              </>
            );

            return (
              <Reveal key={item.labelKey} duration={0.4} delay={Math.min(i * 0.05, 0.3)}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
