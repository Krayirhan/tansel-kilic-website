"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="hero" className="min-h-screen pt-24 pb-12 flex items-center bg-white" />
    );
  }

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-gradient-to-b from-slate-50/50 via-white to-white px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-center">
        
        {/* Left Column (Content) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: "transform, opacity" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            {h.title_line}
          </div>

          {/* Heading H1 (Single H1 per page for SEO) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[0.95] mb-6">
            <span className="block">Tansel</span>
            <span className="block text-blue-600">KILIÇ</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mb-8">
            {h.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-750 text-white rounded-xl text-sm font-bold shadow-sm shadow-blue-600/10 hover:shadow-md hover:shadow-blue-600/20 transition-all duration-200"
              aria-label={h.cta_primary}
            >
              {h.cta_primary}
            </a>
            <a
              href="#experience"
              className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all duration-200"
              aria-label={h.cta_secondary}
            >
              {h.cta_secondary}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2">
            {[
              {
                href: "https://www.linkedin.com/in/tanselkilic/",
                icon: <LinkedInIcon size={14} />,
                label: "LinkedIn"
              },
              {
                href: "mailto:hello@tanselkilic.com",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                ),
                label: "Email"
              }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-xs font-semibold text-slate-500 rounded-lg hover:text-blue-650 hover:border-blue-200 transition-all duration-200"
                aria-label={social.label}
              >
                {social.icon} {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column (Avatar/Visual Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center gap-6"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Avatar Container */}
          <div className="relative">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-blue-100/30 rounded-full blur-2xl -z-10" />
            <div className="relative w-60 h-60 rounded-full bg-gradient-to-br from-blue-50 via-indigo-50 to-emerald-50 border border-slate-200 shadow-premium flex items-center justify-center overflow-hidden">
              {/* Initials fallback styled beautifully */}
              <div className="text-7xl font-extrabold text-blue-600/20 tracking-tighter select-none">
                TK
              </div>
              
              {/* Photo Note Overlay */}
              <div className="absolute bottom-4 bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-full px-4 py-1 text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                {h.photo_note}
              </div>
            </div>
          </div>

          {/* Quick Location & Language Badges */}
          <div className="flex flex-col gap-2.5 items-center">
            {[
              { icon: <MapPin size={14} className="text-blue-600" />, text: h.card_location },
              { icon: <Globe size={14} className="text-blue-600" />, text: h.card_langs }
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs font-medium text-slate-550"
              >
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
