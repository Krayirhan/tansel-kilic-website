"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import LanguageSwitcher from "@/components/nav/LanguageSwitcher";
import MobileDrawer, { type NavLinkItem } from "@/components/nav/MobileDrawer";
import MobileMenuButton from "@/components/nav/MobileMenuButton";

export default function Navbar() {
  const { locale, t, setLocale } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: NavLinkItem[] = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "expertise", label: t.nav.expertise },
    { id: "education", label: t.nav.education },
    { id: "responsible-ai", label: t.nav.responsible_ai },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-white/50 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap font-extrabold text-lg tracking-tight text-slate-900 transition-colors hover:text-blue-600"
          aria-label={t.ui.home_aria_label}
        >
          Tansel KILIÇ
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 lg:gap-4">
          <LanguageSwitcher
            locale={locale}
            onChange={setLocale}
            ariaLabel={t.ui.language_group_label}
            optionLabels={{
              en: t.ui.switch_language_to_en,
              tr: t.ui.switch_language_to_tr,
            }}
          />
          <MobileMenuButton
            isOpen={menuOpen}
            onToggle={() => setMenuOpen((prev) => !prev)}
            ariaLabel={t.ui.mobile_menu_toggle}
          />
        </div>
      </div>

      <MobileDrawer
        isOpen={menuOpen}
        links={links}
        onNavigate={() => setMenuOpen(false)}
      />
    </header>
  );
}
