"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { LINKEDIN_URL, EMAIL } from "@/lib/config";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="hero" className="pt-32 pb-20 bg-white" />
    );
  }

  return (
    <section
      id="hero"
      className="pt-32 pb-20 md:pt-40 md:pb-28 flex items-center bg-gradient-to-b from-slate-50/50 via-white to-white px-6"
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            {h.title_line}
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[0.95] mb-6">
            <span className="block">Tansel</span>
            <span className="block text-blue-600">KILIÇ</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mb-8">
            {h.subtitle}
          </p>

          {/* CTAs */}
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

          {/* Social + Location row */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              {
                href: LINKEDIN_URL,
                icon: <LinkedInIcon size={14} />,
                label: "LinkedIn",
              },
              {
                href: `mailto:${EMAIL}`,
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                ),
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-xs font-semibold text-slate-500 rounded-lg hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
                aria-label={social.label}
              >
                {social.icon} {social.label}
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
        </motion.div>
      </div>
    </section>
  );
}
