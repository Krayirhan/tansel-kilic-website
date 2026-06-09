"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { messages, type Locale, type Messages } from "@/lib/i18n";

type LangContextType = {
  locale: Locale;
  t: Messages;
  setLocale: (l: Locale) => void;
};

const LangContext = createContext<LangContextType>({
  locale: "tr",
  t: messages.tr,
  setLocale: () => {},
});

type LangProviderProps = {
  children: React.ReactNode;
  initialLocale: Locale;
};

export function LangProvider({ children, initialLocale }: LangProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    if ((storedLocale === "en" || storedLocale === "tr") && storedLocale !== locale) {
      setLocale(storedLocale);
    }
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
    document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  return (
    <LangContext.Provider value={{ locale, t: messages[locale], setLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
