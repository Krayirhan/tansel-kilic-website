"use client";

import { Mail } from "lucide-react";
import { useLang } from "@/context/LangContext";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import { LINKEDIN_URL, EMAIL } from "@/lib/config";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <div className="font-extrabold text-sm tracking-tight">
            {t.hero.name}
          </div>
          <div className="text-xs text-slate-400 mt-1">{t.footer}</div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={t.ui.linkedin_profile_aria_label}
          >
            <LinkedInIcon size={15} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={t.ui.email_address_aria_label}
          >
            <Mail size={16} />
          </a>
          <ScrollTopButton
            ariaLabel={t.footer_scroll_top}
            className="bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
          />
        </div>
      </div>
    </footer>
  );
}
