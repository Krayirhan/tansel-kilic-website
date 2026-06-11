import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LangProvider, useLang } from "@/context/LangContext";

function TestComponent() {
  const { locale, t, setLocale } = useLang();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="title">{t.hero.title_line}</span>
      <button onClick={() => setLocale("en")}>Switch to EN</button>
      <button onClick={() => setLocale("tr")}>Switch to TR</button>
    </div>
  );
}

describe("LangContext & LangProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders with initialLocale", () => {
    render(
      <LangProvider initialLocale="tr">
        <TestComponent />
      </LangProvider>
    );

    expect(screen.getByTestId("locale").textContent).toBe("tr");
    expect(screen.getByTestId("title").textContent).toBe("Teknoloji Yöneticisi");
  });

  it("switches locale and translates content correctly", () => {
    render(
      <LangProvider initialLocale="tr">
        <TestComponent />
      </LangProvider>
    );

    fireEvent.click(screen.getByText("Switch to EN"));
    expect(screen.getByTestId("locale").textContent).toBe("en");
    expect(screen.getByTestId("title").textContent).toBe("Technology Executive");
  });
});
