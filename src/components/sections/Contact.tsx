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
};

const CONTACT_ITEMS = [
  {
    Icon: LinkedInIcon,
    labelKey: "linkedin",
    subKey: "linkedin_sub",
    href: LINKEDIN_URL,
  },
  {
    Icon: Mail,
    labelKey: "email",
    subKey: "email_sub",
    href: `mailto:${EMAIL}`,
  },
  {
    Icon: MapPin,
    labelKey: "location",
    subKey: "location_sub",
  },
] satisfies ContactItem[];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="bg-white px-6 py-14 md:py-24">
      <div className="section-shell">
        <div className="border-t border-stone-200 pt-8 md:pt-10">
          <Reveal duration={0.5} className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-[0.64fr_0.36fr] lg:gap-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.7rem] md:leading-[1.04]">
                {c.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{c.desc}</p>
            </div>

            <div className="flex items-start lg:justify-end">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-bold tracking-[0.08em] text-slate-600">
                <span className="block h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                {c.avail_reply}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-0 border-t border-stone-200">
            {CONTACT_ITEMS.map((item, i) => {
              const label = c[item.labelKey];
              const sub = c[item.subKey];
              const content = (
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-slate-700">
                    <item.Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900">{label}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {sub}
                    </div>
                  </div>
                  {item.href ? (
                    <ArrowUpRight
                      size={16}
                      className="text-slate-300 transition-colors group-hover:text-slate-700"
                    />
                  ) : null}
                </div>
              );

              return (
                <Reveal
                  key={item.labelKey}
                  duration={0.35}
                  delay={Math.min(i * 0.05, 0.2)}
                  className="border-b border-stone-200 last:border-b-0"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group block transition-colors hover:text-slate-950"
                    >
                      {content}
                    </a>
                  ) : (
                    <div>{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
