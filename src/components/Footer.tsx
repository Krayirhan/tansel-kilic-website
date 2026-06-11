"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { useLang } from "@/context/LangContext";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import { LINKEDIN_URL, EMAIL } from "@/lib/config";

export default function Footer() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="border-t border-stone-200 bg-[var(--color-paper)] px-6 py-5 min-h-[80px]" />
    );
  }

  return (
    <footer className="border-t border-stone-200 bg-[var(--color-paper)] px-6 py-5 text-slate-900">
      <div className="section-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="text-left">
          <div className="text-[0.96rem] font-semibold tracking-[-0.02em] text-slate-900">
            {t.hero.name}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-500">{t.footer}</div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-500 transition-colors hover:border-stone-300 hover:text-slate-900"
            aria-label={t.ui.linkedin_profile_aria_label}
          >
            <LinkedInIcon size={15} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-500 transition-colors hover:border-stone-300 hover:text-slate-900"
            aria-label={t.ui.email_address_aria_label}
          >
            <Mail size={16} />
          </a>
          <ScrollTopButton
            ariaLabel={t.footer_scroll_top}
            className="rounded-full border-stone-200 bg-white text-slate-500 hover:bg-stone-50 hover:text-slate-900"
          />
        </div>
      </div>
    </footer>
  );
}
