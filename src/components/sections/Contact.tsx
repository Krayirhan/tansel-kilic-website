"use client";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
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
    cardHoverClass: "hover:border-blue-300 hover:bg-blue-50/40",
  },
  {
    Icon: Mail,
    labelKey: "email",
    subKey: "email_sub",
    href: `mailto:${EMAIL}`,
    iconBorder: "border-teal-200",
    iconClass: "text-teal-700",
    iconBoxClass: "bg-teal-50",
    cardHoverClass: "hover:border-teal-300 hover:bg-teal-50/40",
  },
  {
    Icon: MapPin,
    labelKey: "location",
    subKey: "location_sub",
    iconBorder: "border-amber-200",
    iconClass: "text-amber-700",
    iconBoxClass: "bg-amber-50",
    cardHoverClass: "hover:border-amber-300 hover:bg-amber-50/40",
  },
] satisfies ContactItem[];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="py-16 md:py-28 bg-white px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-16 items-stretch">
        <Reveal duration={0.5}>
          <div className="h-full rounded-[2rem] bg-slate-950 p-7 md:p-9 text-white shadow-premium">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-teal-300 block mb-2">
                {c.label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {c.title}
              </h2>
              <p className="text-slate-300 leading-relaxed text-base mt-5 max-w-xl">
                {c.desc}
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-xs font-bold text-white">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-teal-300 opacity-60 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-teal-300 block" />
              </span>
              {c.avail_reply}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-extrabold text-white">{c.signal_1_title}</div>
                <div className="mt-1">{c.signal_1_sub}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-extrabold text-white">{c.signal_2_title}</div>
                <div className="mt-1">{c.signal_2_sub}</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-3.5">
          {CONTACT_ITEMS.map((item, i) => {
            const label = c[item.labelKey];
            const sub = c[item.subKey];
            const cardClass = `group flex items-center gap-4 bg-slate-50 border border-slate-200/90 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 ${item.cardHoverClass}`;
            const inner = (
              <>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border flex-shrink-0 ${item.iconBorder} ${item.iconBoxClass} ${item.iconClass}`}
                >
                  <item.Icon size={18} />
                </div>
                <div className="min-w-0">
                  <span className="block font-bold text-sm text-slate-900">{label}</span>
                  <span className="block text-xs font-semibold text-slate-400 mt-1">{sub}</span>
                </div>
                {item.href ? (
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-slate-300 transition-colors group-hover:text-slate-700"
                  />
                ) : null}
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
