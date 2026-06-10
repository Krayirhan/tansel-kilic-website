import type { Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
  ariaLabel: string;
  optionLabels: Record<Locale, string>;
};

const LOCALES: Locale[] = ["en", "tr"];

export default function LanguageSwitcher({
  locale,
  onChange,
  ariaLabel,
  optionLabels,
}: LanguageSwitcherProps) {
  return (
    <div
      className="flex items-center rounded-full border border-stone-200 bg-white/80 p-1"
      role="group"
      aria-label={ariaLabel}
    >
      {LOCALES.map((lang) => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
            locale === lang
              ? "bg-[var(--color-accent)] text-white"
              : "text-slate-500 hover:text-slate-900"
          }`}
          aria-label={optionLabels[lang]}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
