# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation & Language Toggles >> loads in Turkish by default and displays correct content
- Location: tests\e2e\navigation.spec.ts:8:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2').locator('text=Hakkımda')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h2').locator('text=Hakkımda')

```

```yaml
- banner:
  - link "Tansel KILIÇ anasayfa":
    - /url: /
    - text: Tansel KILIÇ
  - group "Dil":
    - button "Dili İngilizce yap": en
    - button "Dili Türkçe yap": tr
  - button "Menüyü aç veya kapat"
- main:
  - heading "Tansel KILIÇ" [level=1]
  - text: AI, fintech ve platform ekipleri için teknoloji liderliği.
  - paragraph: Fintech, e-ticaret ve dijital ekosistemlerde 20+ yıldır mühendislik ekipleri, cloud-native platformlar ve üretime alınan AI girişimleri yönetiyorum.
  - link "İletişime geç":
    - /url: "#contact"
  - link "Deneyimi gör":
    - /url: "#experience"
  - link "LinkedIn profili":
    - /url: https://www.linkedin.com/in/tanselkilic/
    - text: LinkedIn
  - text: İstanbul, Türkiye · Hibrit Türkçe · İngilizce
  - region "Etki":
    - heading "Etki" [level=2]
    - text: 20+ Yıl deneyim 2003'ten bu yana 50+ Mühendis yönetimi Dağıtık, çok disiplinli ekipler 10+ Şirkette liderlik CTO · Direktör · Danışman
  - heading "Stratejik Teknoloji ve Mühendislik Yönetimi" [level=2]
  - paragraph: İş hedeflerini mühendislik ölçeğiyle birleştiren, yapay zekâ çözümlerini deneysel aşamadan üretim sistemlerine taşıyan liderlik yaklaşımı.
  - text: Stratejiyi çalışan sistemlere dönüştürmek.
  - paragraph: 20+ yıldır fintech, e-ticaret ve dijital ekosistemlerde büyük ölçekli platformlar ve mühendislik organizasyonları yönetiyorum. 50+'lik dağıtık ekiplerle, milyonlarca kullanıcıyı destekleyen cloud-native mikroservis mimarileri kurdum.
  - paragraph: Son yıllarda AI ve LLM girişimlerini deney değil, karar almayı güçlendiren ve operasyonu hızlandıran üretim sistemleri olarak hayata geçirdim.
  - text: İş öncelikli AI ve platform kararları Dağıtık ekiplerde mühendislik liderliği Ölçek için tasarlanmış cloud-native sistemler Keşiften devreye almaya pragmatik teslimat
  - heading "Kariyer Yolculuğu & Liderlik Kronolojisi" [level=2]
  - paragraph: Fintech, e-ticaret ve platform odaklı liderlik rolleri; unvanlardan ziyade yaratılan etki ve üstlenilen operasyonel sorumluluklar.
  - article:
    - text: Self-Employed — İstanbul
    - heading "AI & Dijital Dönüşüm Yöneticisi · Ex-CTO · Fractional CTO" [level=3]
    - text: Oca 2026 — Devam ediyor 5 ay
    - paragraph: Şirketlere ölçülebilir iş etkisi odaklı AI benimseme stratejisi danışmanlığı. Güçlü doğruluk standartları ve insan denetim modelleriyle AI-native iş akışları tasarımı. Kurumsal güvenlikte blockchain ve dijital varlık saklama projeleri — HSM (Thales, SafeNet), mTLS ve PKI.
    - text: AI Stratejisi LLM Blockchain HSM
  - article:
    - heading "Chief Technology Officer" [level=3]
    - text: Ara 2024 — Ara 2025 · 1 yıl 1 ay Ozan — İstanbul (Fintech)
    - paragraph: Uçtan uca teknoloji operasyonları ve strateji yönetimi. BE, FE, QA, DevOps ekiplerini yönetti. POS, Sanal POS ve dijital cüzdan ürünlerini geliştirdi. Yüksek hacimli finansal belgeler için LLM tabanlı Belge Zekası Platformu ve çok alanlı kullanım için tasarlanmış AI destekli dolandırıcılık tespit sistemi FraudInsight (NLP & LLM) kurdu.
    - text: Fintech LLM Dolandırıcılık Tespiti
  - article:
    - heading "Chief Technology Officer" [level=3]
    - text: Mar 2024 — Eyl 2024 · 7 ay Saran Group — İstanbul
    - paragraph: "Saran Group portföyünde dijital dönüşüm liderliği: Tuttur.com, Sonduzluk.com (TJK), Ajansspor.com, SDS, RadyoSpor, RadyoTrafik. Çok ekipli mühendislik yönetimi ve üçüncü taraf tedarikçi ilişkileri."
    - text: Dijital Dönüşüm Medya Teknolojisi Bahis Sistemleri
  - article:
    - heading "Chief Technology Officer" [level=3]
    - text: Nis 2023 — Şub 2024 · 11 ay Huudle.io — Türkiye
  - article:
    - heading "Yazılım Mühendisliği Direktörü" [level=3]
    - text: Şub 2022 — Şub 2023 · 1 yıl 1 ay · Londra, İngiltere Pisano — London
  - article:
    - heading "Yazılım Mühendisliği Direktörü" [level=3]
    - text: Tem 2021 — Şub 2022 · 8 ay Demirören Teknoloji / Azerloterya — İstanbul
  - heading "Önceki roller" [level=3]
  - text: E-Ticaret Kıdemli Yöneticisi Odeon Software & Technology / OTI Holding — İstanbul Şub 2020 — Tem 2021 · 1 yıl 6 ay E-Ticaret Yazılım Geliştirme Müdürü LC Waikiki — İstanbul Nis 2019 — Şub 2020 · 11 ay Proje ve Yazılım Geliştirme Müdürü Demirören Gazetecilik — İstanbul Eyl 2017 — Nis 2019 · 1 yıl 8 ay Yazılım Geliştirme Müdürü Hürriyet — İstanbul May 2015 — Eyl 2017 · 2 yıl 5 ay Yazılım Geliştirme Müdür Yardımcısı Hürriyet — İstanbul Tem 2014 — May 2015 · 11 ay Baş Yazılım Mühendisi Hürriyet — İstanbul Eyl 2011 — Tem 2014 · 2 yıl 11 ay Kıdemli Yazılım Geliştirici SFS Şirketler Grubu — İstanbul Mar 2011 — Eyl 2011 · 7 ay Yazılım Geliştirici BİLİN Yazılım — İstanbul Oca 2009 — Mar 2011 · 2 yıl 3 ay Yazılım Geliştirici NETİSİS Bilgi Teknolojileri — İstanbul Oca 2003 — Kas 2008 · 5 yıl 11 ay
  - heading "Temel Uzmanlık Alanları" [level=2]
  - paragraph: Fintech altyapıları, bulut tabanlı mikroservisler ve yapay zekâ entegrasyonlarına yön veren teknik ve yönetsel yetkinlikler.
  - text: Temel Alanlar
  - article:
    - heading "AI & LLM Dönüşümü" [level=3]
    - paragraph: Belge zekası, dolandırıcılık tespiti ve karar otomasyonu için üretim kalitesinde LLM sistemleri.
  - article:
    - heading "Fintech & Ödeme Sistemleri" [level=3]
  - text: Sistemler
  - article:
    - heading "Cloud-Native Mimari" [level=3]
    - paragraph: Azure ve GCP üzerinde 100+ servislik, yüksek trafikli mikroservis mimarileri.
  - article:
    - heading "Güvenlik & Kriptografi" [level=3]
  - text: Liderlik
  - article:
    - heading "Mühendislik Liderliği" [level=3]
    - paragraph: 3x ekip büyütme, 50+ mühendis yönetimi ve ölçekli Agile operasyonu.
  - article:
    - heading "Dijital Dönüşüm" [level=3]
  - heading "Sorumlu ve Güvenilir Yapay Zekâ Yaklaşımı" [level=2]
  - paragraph: Üretim seviyesindeki yapay zekâ uygulamalarında doğruluk, veri gizliliği ve insan denetimini esas alan mimari prensipler.
  - text: Çalışma prensipleri
  - heading "Üretim öncelikli" [level=3]
  - paragraph: Doğrulanmış iş etkisi olmadan devreye alma yapılmaz. Her sistem gerçek operasyon yükü için tasarlanır.
  - heading "İnsan denetimi" [level=3]
  - heading "Gizlilik tasarımı" [level=3]
  - text: Ozan · 2024–2025
  - heading "Belge Zekası Platformu" [level=3]
  - paragraph: Yüksek hacimli finansal belgeleri analiz eden yerel LLM tabanlı sistem. On-premise mimariyle veri gizliliği korundu, manuel inceleme süresi ve operasyonel yük azaltıldı.
  - text: Ozan · 2024–2025
  - heading "FraudInsight — AI Tabanlı Dolandırıcılık Tespiti" [level=3]
  - heading "Akademik Geçmiş & Sürekli Gelişim" [level=2]
  - paragraph: İş analitiği, yönetim bilişim sistemleri ve yazılım temellerini birleştiren akademik altyapı.
  - article:
    - heading "İstanbul Teknik Üniversitesi" [level=3]
    - text: Büyük Veri & İş Analitiği, YL Ağu 2024 — Devam ediyor
  - article:
    - heading "Ahmet Yesevi Üniversitesi" [level=3]
    - text: Yönetim Bilişim Sistemleri 2005 — 2009
  - article:
    - heading "Ondokuz Mayıs Üniversitesi" [level=3]
    - text: Bilgisayar Programcılığı, Ön Lisans 1999 — 2001
  - heading "İletişim & İş Birliği" [level=2]
  - paragraph: AI dönüşümü, fintech platformları veya yüksek ölçekli organizasyonel yapılanmalar için doğrudan temas kurabilirsiniz.
  - text: "Yanıt süresi: 24 saat içinde"
  - link "LinkedIn tanselkilic":
    - /url: https://www.linkedin.com/in/tanselkilic/
  - link "E-posta Mesaj gönder":
    - /url: mailto:tanselkilic@gmail.com
  - text: İstanbul, Türkiye Uzaktan çalışmaya açık
- contentinfo:
  - text: Tansel KILIÇ © 2026 Tansel KILIÇ · Teknoloji Lideri & AI Yöneticisi
  - link "LinkedIn profili":
    - /url: https://www.linkedin.com/in/tanselkilic/
  - link "E-posta adresi":
    - /url: mailto:tanselkilic@gmail.com
  - button "Yukarı Çık"
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
> 13 |     await expect(page.locator("h2 >> text=Hakkımda")).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  14 |   });
  15 | 
  16 |   test("switches language to English and updates content", async ({ page }) => {
  17 |     const btnEn = page.locator('button[aria-label="Dili İngilizce yap"], button[aria-label="Switch language to English"]');
  18 |     await btnEn.click();
  19 | 
  20 |     const htmlLang = await page.locator("html").getAttribute("lang");
  21 |     expect(htmlLang).toBe("en");
  22 | 
  23 |     await expect(page.locator("h2 >> text=About")).toBeVisible();
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