import { test, expect } from "@playwright/test";

test.describe("Navigation & Language Toggles", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads in Turkish by default and displays correct content", async ({ page }) => {
    const htmlLang = await page.locator("html").getAttribute("lang");
    expect(htmlLang).toBe("tr");

    await expect(page.locator("h1")).toContainText("Tansel KILIÇ");
    await expect(page.locator("h2 >> text=Hakkımda")).toBeVisible();
  });

  test("switches language to English and updates content", async ({ page }) => {
    const btnEn = page.locator('button[aria-label="Dili İngilizce yap"], button[aria-label="Switch language to English"]');
    await btnEn.click();

    const htmlLang = await page.locator("html").getAttribute("lang");
    expect(htmlLang).toBe("en");

    await expect(page.locator("h2 >> text=About")).toBeVisible();

    await page.reload();
    const reloadedLang = await page.locator("html").getAttribute("lang");
    expect(reloadedLang).toBe("en");
  });

  test("scrolls smoothly to section on anchor link click", async ({ page }) => {
    const expLink = page.locator('nav a[href="#experience"]').first();
    await expLink.click();

    await expect(page).toHaveURL(/.*#experience/);

    const expSection = page.locator("#experience");
    await expect(expSection).toBeVisible();
  });

  test("interacts with mobile menu drawer on smaller screens", async ({ page, isMobile }) => {
    test.skip(!isMobile, "This test only runs on mobile viewports");

    const menuBtn = page.locator('button[aria-label="Menüyü aç veya kapat"], button[aria-label="Open or close menu"]');
    await expect(menuBtn).toBeVisible();

    const drawerLink = page.locator('a[href="#about"]').first();
    await menuBtn.click();

    await expect(drawerLink).toBeVisible();

    await drawerLink.click();
    await expect(page).toHaveURL(/.*#about/);
  });
});
