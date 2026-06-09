"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { Mail, ArrowUp } from "lucide-react";

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
            href="https://www.linkedin.com/in/tanselkilic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href="mailto:hello@tanselkilic.com"
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
