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

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("tr");

  useEffect(() => {
    document.documentElement.lang = locale;
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
