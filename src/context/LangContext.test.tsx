import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { LangProvider, useLang } from "./LangContext";

function ConsumerComponent() {
  const { locale, t, setLocale } = useLang();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="title">{t.hero.name}</span>
      <button data-testid="btn-en" onClick={() => setLocale("en")}>
        EN
      </button>
      <button data-testid="btn-tr" onClick={() => setLocale("tr")}>
        TR
      </button>
    </div>
  );
}

describe("LangProvider & useLang", () => {
  beforeEach(() => {
    const store: Record<string, string> = {};
    vi.stubGlobal("localStorage", {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        for (const k in store) delete store[k];
      }
    });

    document.documentElement.lang = "tr";
    document.cookie = "";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("provides default language and translates copy", () => {
    render(
      <LangProvider initialLocale="tr">
        <ConsumerComponent />
      </LangProvider>
    );

    expect(screen.getByTestId("locale").textContent).toBe("tr");
    expect(screen.getByTestId("title").textContent).toBe("Tansel KILIÇ");
  });

  it("updates language and updates translations on user toggle", () => {
    render(
      <LangProvider initialLocale="tr">
        <ConsumerComponent />
      </LangProvider>
    );

    const btnEn = screen.getByTestId("btn-en");
    fireEvent.click(btnEn);

    expect(screen.getByTestId("locale").textContent).toBe("en");
    expect(localStorage.getItem("locale")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("restores locale from localStorage on mount", () => {
    localStorage.setItem("locale", "en");

    render(
      <LangProvider initialLocale="tr">
        <ConsumerComponent />
      </LangProvider>
    );

    expect(screen.getByTestId("locale").textContent).toBe("en");
  });
});
