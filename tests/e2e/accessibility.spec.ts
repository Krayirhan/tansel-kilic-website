import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Audits", () => {
  test("homepage should not have any automatically detectable WCAG AA violations", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "best-practice"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("homepage in English should not have accessibility violations", async ({ page }) => {
    await page.goto("/");
    const btnEn = page.locator('button[aria-label="Dili İngilizce yap"], button[aria-label="Switch language to English"]');
    await btnEn.click();
    await page.waitForTimeout(500);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
