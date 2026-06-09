"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import type { Locale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { locale, t, setLocale } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about",      label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "expertise",  label: t.nav.expertise },
    { id: "contact",    label: t.nav.contact },
  ];

  if (!mounted) {
    // Return a matching skeleton to prevent SSR Hydration Mismatch
    return (
      <header className="fixed top-0 inset-x-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/80" />
    );
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-white/50 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-extrabold text-lg tracking-tight text-slate-900 transition-colors hover:text-blue-600"
          aria-label="Tansel Kılıç Anasayfa"
        >
          Tansel KILIÇ
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Language Select & Mobile Trigger */}
        <div className="flex items-center gap-4">
          {/* Lang Selector */}
          <div className="flex items-center bg-slate-100 border border-slate-200/60 rounded-full p-1">
            {(["en", "tr"] as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`rounded-full px-4 py-1 text-xs font-bold tracking-wider transition-all duration-200 uppercase ${
                  locale === lang
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                aria-label={`Switch language to ${lang.toUpperCase()}`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mobile Drawer Trigger (Hamburger) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex md:hidden flex-col justify-center gap-1.5 w-10 h-10 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-lg p-2.5 transition-colors"
            aria-label="Menüyü Aç/Kapat"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-full bg-slate-800 rounded-full transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-slate-800 rounded-full transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-slate-800 rounded-full transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden w-full bg-white border-b border-slate-200 shadow-lg"
          >
            <nav className="flex flex-col px-6 py-4 gap-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-base font-semibold text-slate-800 border-b border-slate-100 last:border-b-0 hover:text-blue-600 transition-colors"
                    >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
