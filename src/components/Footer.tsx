"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { Mail, ArrowUp } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { LINKEDIN_URL, EMAIL } from "@/lib/config";

export default function Footer() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="bg-white border-t border-slate-200/80 py-8 px-6 min-h-16" />
    );
  }

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
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={15} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="Email Address"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="Yukarı Çık"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
