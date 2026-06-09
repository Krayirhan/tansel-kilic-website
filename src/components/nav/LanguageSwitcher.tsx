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
      className="flex items-center bg-slate-100 border border-slate-200/60 rounded-full p-1"
      role="group"
      aria-label={ariaLabel}
    >
      {LOCALES.map((lang) => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`rounded-full px-4 py-1 text-xs font-bold tracking-wider transition-all duration-200 uppercase ${
            locale === lang
              ? "bg-blue-600 text-white shadow-sm"
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
