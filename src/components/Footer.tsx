"use client";

import { Mail } from "lucide-react";
import { useLang } from "@/context/LangContext";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import { LINKEDIN_URL, EMAIL } from "@/lib/config";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-white border-t border-slate-200/80 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <div className="font-extrabold text-sm text-slate-900 tracking-tight">
            Tansel KILIÇ
          </div>
          <div className="text-xs text-slate-400 mt-1">{t.footer}</div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label={t.ui.linkedin_profile_aria_label}
          >
            <LinkedInIcon size={15} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label={t.ui.email_address_aria_label}
          >
            <Mail size={16} />
          </a>
          <ScrollTopButton ariaLabel={t.footer_scroll_top} />
        </div>
      </div>
    </footer>
  );
}
