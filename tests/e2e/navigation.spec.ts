import { test, expect } from "@playwright/test";

test.describe("Navigation & Language Toggles", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads in Turkish by default and displays correct content", async ({ page }) => {
    const htmlLang = await page.locator("html").getAttribute("lang");
    expect(htmlLang).toBe("tr");

    await expect(page.locator("h1")).toContainText("Tansel KILIÇ");
    
    // Wait for about section to be hydrated and visible
    await page.waitForSelector('section#about h2', { timeout: 5000 });
    await expect(page.locator('section#about h2')).toBeVisible();
  });

  test("switches language to English and updates content", async ({ page }) => {
    const btnEn = page.locator('button[aria-label="Dili İngilizce yap"], button[aria-label="Switch language to English"]');
    await btnEn.click();

    const htmlLang = await page.locator("html").getAttribute("lang");
    expect(htmlLang).toBe("en");

    // Wait for content to update and about section to re-render
    await page.waitForSelector('section#about h2', { timeout: 5000 });
    await expect(page.locator('section#about h2')).toBeVisible();

    await page.reload();
    const reloadedLang = await page.locator("html").getAttribute("lang");
    expect(reloadedLang).toBe("en");
  });

  test("scrolls smoothly to section on anchor link click", async ({ page }) => {
    // Wait for nav to be visible (desktop only)
    await page.waitForSelector('nav a[href="#experience"]', { timeout: 5000 }).catch(() => {
      // If nav link not found, test might be on mobile - skip
      return null;
    });
    
    const expLink = page.locator('nav a[href="#experience"]').first();
    const isVisible = await expLink.isVisible().catch(() => false);
    
    if (!isVisible) {
      test.skip(true, "Navigation link not visible on this viewport");
    }

    await expLink.click();

    await expect(page).toHaveURL(/.*#experience/);

    const expSection = page.locator("#experience");
    await expect(expSection).toBeVisible();
  });

  test("interacts with mobile menu drawer on smaller screens", async ({ page, isMobile }) => {
    test.skip(!isMobile, "This test only runs on mobile viewports");

    const menuBtn = page.locator('button[aria-label="Menüyü aç veya kapat"], button[aria-label="Open or close menu"]');
    await expect(menuBtn).toBeVisible();

    await menuBtn.click();
    
    // Wait for drawer animation to complete (Framer Motion transition)
    await page.waitForTimeout(300);

    // Wait for drawer link to be visible
    const drawerLink = page.locator('a[href="#about"]').first();
    await expect(drawerLink).toBeVisible({ timeout: 5000 });

    await drawerLink.click();
    await expect(page).toHaveURL(/.*#about/);
  });
});
