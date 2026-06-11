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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return (
      <header
        className="fixed top-0 inset-x-0 z-50 h-16 border-b border-transparent bg-[rgba(247,244,238,0.82)] backdrop-blur-md"
      />
    );
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "border-b border-stone-200/80 bg-[rgba(247,244,238,0.96)] backdrop-blur-md"
          : "border-b border-transparent bg-[rgba(247,244,238,0.82)] backdrop-blur-md"
      }`}
    >
      <div className="section-shell flex h-full items-center justify-between px-6">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap text-[1rem] font-semibold tracking-[-0.02em] text-slate-950 transition-colors hover:text-[var(--color-accent)]"
          aria-label={t.ui.home_aria_label}
        >
          {t.hero.name}
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="whitespace-nowrap text-[0.9rem] font-medium tracking-[0.01em] text-slate-500 transition-colors duration-200 hover:text-slate-900"
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
