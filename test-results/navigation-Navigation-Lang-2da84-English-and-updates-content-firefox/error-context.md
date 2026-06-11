# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation & Language Toggles >> switches language to English and updates content
- Location: tests\e2e\navigation.spec.ts:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2').locator('text=About')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h2').locator('text=About')

```

```yaml
- banner:
  - link "Tansel KILIÇ homepage":
    - /url: /
    - text: Tansel KILIÇ
  - navigation:
    - link "About":
      - /url: "#about"
    - link "Experience":
      - /url: "#experience"
    - link "Expertise":
      - /url: "#expertise"
    - link "Education":
      - /url: "#education"
    - link "Responsible AI":
      - /url: "#responsible-ai"
    - link "Contact":
      - /url: "#contact"
  - group "Language":
    - button "Switch language to English": en
    - button "Switch language to Turkish": tr
- main:
  - heading "Tansel KILIÇ" [level=1]
  - text: Technology leadership for AI, fintech, and platform teams.
  - paragraph: 20+ years leading engineering teams, cloud-native platforms, and AI initiatives in production across fintech, e-commerce, and digital ecosystems.
  - link "Get in touch":
    - /url: "#contact"
  - link "View experience":
    - /url: "#experience"
  - link "LinkedIn profile":
    - /url: https://www.linkedin.com/in/tanselkilic/
    - text: LinkedIn
  - text: Istanbul, Turkey · Hybrid Turkish · English
  - complementary: From strategy to execution AI transformation Fintech platforms Engineering scale
  - region "Impact":
    - heading "Impact" [level=2]
    - text: 20+ Years of experience Since 2003 50+ Engineers led Distributed, cross-functional teams 10+ Companies led CTO · Director · Advisor
  - heading "Strategic Technology & Engineering Leadership" [level=2]
  - paragraph: Bridging business vision with engineering scale to transform AI initiatives into robust production systems.
  - text: Turning strategy into working systems.
  - paragraph: For 20+ years, I have led large-scale platforms and engineering organizations across fintech, e-commerce, and digital ecosystems. I have built and led distributed teams of 50+ engineers, delivering cloud-native microservices that support millions of users.
  - paragraph: In recent years, I have led AI and LLM initiatives not as experiments, but as production systems that improve decisions and streamline operations.
  - text: Business-first AI and platform decisions Engineering leadership across distributed teams Cloud-native systems designed for scale Pragmatic delivery from discovery to rollout
  - heading "Career Journey & Leadership Timeline" [level=2]
  - paragraph: Two decades of leadership across fintech, platforms, and e-commerce, defined by operational scale and measurable impact.
  - article:
    - text: Self-Employed — İstanbul
    - heading "AI & Digital Transformation Executive · Ex-CTO · Fractional CTO" [level=3]
    - text: Jan 2026 — Present 5 months
    - paragraph: Advising companies on AI adoption strategies with focus on practical implementation and measurable business impact. Designing AI-native workflows with strong accuracy standards and human oversight models. Delivering blockchain and digital asset custody projects with enterprise-grade security — HSM integrations (Thales, SafeNet), mTLS, and PKI.
    - text: AI Strategy LLM Blockchain HSM
  - article:
    - heading "Chief Technology Officer" [level=3]
    - text: Dec 2024 — Dec 2025 · 1 year 1 month Ozan — İstanbul (Fintech)
    - paragraph: Directed end-to-end technology operations and strategy. Led multidisciplinary engineering teams across BE, FE, QA, DevOps and Infrastructure. Oversaw core payment products — Physical POS, Virtual POS (Gateway), and digital wallet. Built LLM-based Document Intelligence Platform for high-volume financial documents and FraudInsight — an AI-powered fraud detection system using NLP & LLM, designed for cross-domain scalability.
    - text: Fintech LLM Fraud Detection
  - article:
    - heading "Chief Technology Officer" [level=3]
    - text: Mar 2024 — Sep 2024 · 7 months Saran Group — İstanbul
    - paragraph: "Led digital transformation across Saran Group's diverse portfolio: Tuttur.com (betting), Sonduzluk.com (TJK Betting), Ajansspor.com, SDS (Saran Digital Studios), RadyoSpor, and RadyoTrafik. Managed multi-team engineering, defined IT strategy across verticals, and oversaw third-party vendor relationships."
    - text: Digital Transformation Media Tech Betting Systems
  - article:
    - heading "Chief Technology Officer" [level=3]
    - text: Apr 2023 — Feb 2024 · 11 months Huudle.io — Türkiye
    - paragraph: Led development of Huudle, an innovative meeting platform focused on smooth user experience. Recruited and managed skilled engineering teams, shaped software and system architecture, and ensured security and compliance with data privacy standards.
    - text: Startup GCP System Architecture
  - article:
    - heading "Director of Software Engineering" [level=3]
    - text: Feb 2022 — Feb 2023 · 1 year 1 month · London, UK Pisano — London
    - paragraph: Responsible for IT roadmap, budget, and strategy. Managed the full engineering department — Development, DevOps, QA, Integration, PO, and BA teams. Expanded the engineering team 3x in one year. Developed partnerships with Microsoft, Salesforce, and Azure Marketplace. Oversaw delivery of multiple applications.
    - text: Azure Salesforce Team Scaling
  - article:
    - heading "Director of Software Engineering" [level=3]
    - text: Jul 2021 — Feb 2022 · 8 months Demirören Teknoloji / Azerloterya — İstanbul
    - paragraph: Led Azerbaijan Sports Betting and Virtual Sports web platforms and mobile apps. Deployed 100+ microservices on Azure. Managed 30-35 person engineering teams with Scrum and Kanban. Oversaw Azure DevOps, cloud deployments, and third-party integrations.
    - text: Azure Microservices DevOps
  - heading "Earlier roles" [level=3]
  - text: E-commerce Senior Manager Odeon Software & Technology / OTI Holding — İstanbul Feb 2020 — Jul 2021 · 1 year 6 months E-commerce Software Development Manager LC Waikiki — İstanbul Apr 2019 — Feb 2020 · 11 months Project & Software Development Manager Demirören Gazetecilik — İstanbul Sep 2017 — Apr 2019 · 1 year 8 months Software Development Manager Hürriyet — İstanbul May 2015 — Sep 2017 · 2 years 5 months Software Development Assistant Manager Hürriyet — İstanbul Jul 2014 — May 2015 · 11 months Chief Software Engineer Hürriyet — İstanbul Sep 2011 — Jul 2014 · 2 years 11 months Senior Software Developer SFS Şirketler Grubu — İstanbul Mar 2011 — Sep 2011 · 7 months Software Developer BİLİN Yazılım — İstanbul Jan 2009 — Mar 2011 · 2 years 3 months Software Developer NETİSİS Bilgi Teknolojileri — İstanbul Jan 2003 — Nov 2008 · 5 years 11 months
  - heading "Core Expertise & Capabilities" [level=2]
  - paragraph: Strategic focus areas spanning AI integration, cloud-native platforms, regulated fintech ecosystems, and engineering management.
  - text: Core
  - article:
    - heading "AI & LLM Transformation" [level=3]
    - paragraph: Production-grade LLM systems for document intelligence, fraud detection, and decision automation.
  - article:
    - heading "Fintech & Payment Systems" [level=3]
    - paragraph: Strong hands-on experience across POS, virtual POS, digital wallets, AML, and financial compliance.
  - text: Systems
  - article:
    - heading "Cloud-Native Architecture" [level=3]
    - paragraph: High-traffic microservice architectures on Azure and GCP, with 100+ services in operation.
  - article:
    - heading "Security & Cryptography" [level=3]
    - paragraph: Experience with HSM integrations, mTLS, PKI, and enterprise security architecture.
  - text: Leadership
  - article:
    - heading "Engineering Leadership" [level=3]
    - paragraph: 3x team growth, leadership of 50+ engineers, and Agile operations at scale.
  - article:
    - heading "Digital Transformation" [level=3]
    - paragraph: Experience modernizing legacy systems into scalable digital platforms.
  - heading "Responsible & Production-Grade AI Framework" [level=2]
  - paragraph: Ensuring precision, compliance, data privacy, and human-in-the-loop oversight in enterprise AI systems.
  - text: Operating principles
  - heading "Production-first" [level=3]
  - paragraph: No deployment without validated business impact. Every system is designed for real operational load.
  - heading "Human oversight" [level=3]
  - paragraph: Human oversight is the default for critical decisions. Automation expands gradually as trust increases.
  - heading "Privacy by design" [level=3]
  - paragraph: On-premise architecture is used for financial and sensitive data. Data stays within the boundary, and compliance is handled in the architecture.
  - text: Ozan · 2024–2025
  - heading "Document Intelligence Platform" [level=3]
  - paragraph: Local LLM-based system for high-volume financial documents. On-premise architecture protected data privacy while reducing manual review time and operational overhead.
  - text: Ozan · 2024–2025
  - heading "FraudInsight — AI-Powered Fraud Detection" [level=3]
  - paragraph: Fraud detection system using NLP and LLM to analyze transaction data and text signals. It identifies suspicious patterns in real time and scales across fintech, e-commerce, and telecom use cases.
  - heading "Academic Background & Education" [level=2]
  - paragraph: An academic foundation combining big data analytics, information systems, and core computer science.
  - article:
    - heading "Istanbul Technical University" [level=3]
    - text: MSc, Big Data & Business Analytics Aug 2024 — Ongoing
  - article:
    - heading "Ahmet Yesevi University" [level=3]
    - text: Management Information Systems 2005 — 2009
  - article:
    - heading "Ondokuz Mayıs University" [level=3]
    - text: Computer Programming, Associate's Degree 1999 — 2001
  - heading "Let's Connect & Collaborate" [level=2]
  - paragraph: Reach out directly to discuss enterprise AI strategies, fintech architecture, or engineering organization design.
  - text: "Typical response time: within 24 hours"
  - link "LinkedIn tanselkilic":
    - /url: https://www.linkedin.com/in/tanselkilic/
  - link "Email Send a message":
    - /url: mailto:tanselkilic@gmail.com
  - text: Istanbul, Turkey Open to remote
- contentinfo:
  - text: Tansel KILIÇ © 2026 Tansel KILIÇ · Technology Leader & AI Executive
  - link "LinkedIn profile":
    - /url: https://www.linkedin.com/in/tanselkilic/
  - link "Email address":
    - /url: mailto:tanselkilic@gmail.com
  - button "Back to top"
- alert
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Navigation & Language Toggles", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto("/");
  6  |   });
  7  | 
  8  |   test("loads in Turkish by default and displays correct content", async ({ page }) => {
  9  |     const htmlLang = await page.locator("html").getAttribute("lang");
  10 |     expect(htmlLang).toBe("tr");
  11 | 
  12 |     await expect(page.locator("h1")).toContainText("Tansel KILIÇ");
  13 |     await expect(page.locator("h2 >> text=Hakkımda")).toBeVisible();
  14 |   });
  15 | 
  16 |   test("switches language to English and updates content", async ({ page }) => {
  17 |     const btnEn = page.locator('button[aria-label="Dili İngilizce yap"], button[aria-label="Switch language to English"]');
  18 |     await btnEn.click();
  19 | 
  20 |     const htmlLang = await page.locator("html").getAttribute("lang");
  21 |     expect(htmlLang).toBe("en");
  22 | 
> 23 |     await expect(page.locator("h2 >> text=About")).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  24 | 
  25 |     await page.reload();
  26 |     const reloadedLang = await page.locator("html").getAttribute("lang");
  27 |     expect(reloadedLang).toBe("en");
  28 |   });
  29 | 
  30 |   test("scrolls smoothly to section on anchor link click", async ({ page }) => {
  31 |     const expLink = page.locator('nav a[href="#experience"]').first();
  32 |     await expLink.click();
  33 | 
  34 |     await expect(page).toHaveURL(/.*#experience/);
  35 | 
  36 |     const expSection = page.locator("#experience");
  37 |     await expect(expSection).toBeVisible();
  38 |   });
  39 | 
  40 |   test("interacts with mobile menu drawer on smaller screens", async ({ page, isMobile }) => {
  41 |     test.skip(!isMobile, "This test only runs on mobile viewports");
  42 | 
  43 |     const menuBtn = page.locator('button[aria-label="Menüyü aç veya kapat"], button[aria-label="Open or close menu"]');
  44 |     await expect(menuBtn).toBeVisible();
  45 | 
  46 |     const drawerLink = page.locator('a[href="#about"]').first();
  47 |     await menuBtn.click();
  48 | 
  49 |     await expect(drawerLink).toBeVisible();
  50 | 
  51 |     await drawerLink.click();
  52 |     await expect(page).toHaveURL(/.*#about/);
  53 |   });
  54 | });
  55 | 
```