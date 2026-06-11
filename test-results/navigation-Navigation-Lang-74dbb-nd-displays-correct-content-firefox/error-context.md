# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation & Language Toggles >> loads in Turkish by default and displays correct content
- Location: tests\e2e\navigation.spec.ts:8:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:3002/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Navigation & Language Toggles", () => {
  4  |   test.beforeEach(async ({ page }) => {
> 5  |     await page.goto("/");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  |   });
  7  | 
  8  |   test("loads in Turkish by default and displays correct content", async ({ page }) => {
  9  |     const htmlLang = await page.locator("html").getAttribute("lang");
  10 |     expect(htmlLang).toBe("tr");
  11 | 
  12 |     await expect(page.locator("h1")).toContainText("Tansel KILIÇ");
  13 |     
  14 |     // Wait for about section to be hydrated and visible
  15 |     await page.waitForSelector('section#about h2', { timeout: 5000 });
  16 |     await expect(page.locator('section#about h2')).toBeVisible();
  17 |   });
  18 | 
  19 |   test("switches language to English and updates content", async ({ page }) => {
  20 |     const btnEn = page.locator('button[aria-label="Dili İngilizce yap"], button[aria-label="Switch language to English"]');
  21 |     await btnEn.click();
  22 | 
  23 |     const htmlLang = await page.locator("html").getAttribute("lang");
  24 |     expect(htmlLang).toBe("en");
  25 | 
  26 |     // Wait for content to update and about section to re-render
  27 |     await page.waitForSelector('section#about h2', { timeout: 5000 });
  28 |     await expect(page.locator('section#about h2')).toBeVisible();
  29 | 
  30 |     await page.reload();
  31 |     const reloadedLang = await page.locator("html").getAttribute("lang");
  32 |     expect(reloadedLang).toBe("en");
  33 |   });
  34 | 
  35 |   test("scrolls smoothly to section on anchor link click", async ({ page }) => {
  36 |     // Wait for nav to be visible (desktop only)
  37 |     await page.waitForSelector('nav a[href="#experience"]', { timeout: 5000 }).catch(() => {
  38 |       // If nav link not found, test might be on mobile - skip
  39 |       return null;
  40 |     });
  41 |     
  42 |     const expLink = page.locator('nav a[href="#experience"]').first();
  43 |     const isVisible = await expLink.isVisible().catch(() => false);
  44 |     
  45 |     if (!isVisible) {
  46 |       test.skip(true, "Navigation link not visible on this viewport");
  47 |     }
  48 | 
  49 |     await expLink.click();
  50 | 
  51 |     await expect(page).toHaveURL(/.*#experience/);
  52 | 
  53 |     const expSection = page.locator("#experience");
  54 |     await expect(expSection).toBeVisible();
  55 |   });
  56 | 
  57 |   test("interacts with mobile menu drawer on smaller screens", async ({ page, isMobile }) => {
  58 |     test.skip(!isMobile, "This test only runs on mobile viewports");
  59 | 
  60 |     const menuBtn = page.locator('button[aria-label="Menüyü aç veya kapat"], button[aria-label="Open or close menu"]');
  61 |     await expect(menuBtn).toBeVisible();
  62 | 
  63 |     await menuBtn.click();
  64 |     
  65 |     // Wait for drawer animation to complete (Framer Motion transition)
  66 |     await page.waitForTimeout(300);
  67 | 
  68 |     // Wait for drawer link to be visible
  69 |     const drawerLink = page.locator('a[href="#about"]').first();
  70 |     await expect(drawerLink).toBeVisible({ timeout: 5000 });
  71 | 
  72 |     await drawerLink.click();
  73 |     await expect(page).toHaveURL(/.*#about/);
  74 |   });
  75 | });
  76 | 
```