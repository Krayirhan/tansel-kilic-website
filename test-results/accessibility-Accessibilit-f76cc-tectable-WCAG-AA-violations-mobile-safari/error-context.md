# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility Audits >> homepage should not have any automatically detectable WCAG AA violations
- Location: tests\e2e\accessibility.spec.ts:5:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 35

- Array []
+ Array [
+   Object {
+     "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
+     "help": "Page should contain a level-one heading",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright",
+     "id": "page-has-heading-one",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-heading-one",
+             "impact": "moderate",
+             "message": "Page must have a level-one heading",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Page must have a level-one heading",
+         "html": "<html lang=\"tr\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Tansel KILIÇ anasayfa" [ref=e4]:
        - /url: /
        - text: Tansel KILIÇ
      - generic [ref=e5]:
        - group "Dil" [ref=e6]:
          - button "Dili İngilizce yap" [ref=e7] [cursor=pointer]: en
          - button "Dili Türkçe yap" [ref=e8] [cursor=pointer]: tr
        - button "Menüyü aç veya kapat" [ref=e9] [cursor=pointer]
  - main [ref=e13]:
    - generic [ref=e17]:
      - heading "Tansel KILIÇ" [level=1] [ref=e18]
      - generic [ref=e19]: AI, fintech ve platform ekipleri için teknoloji liderliği.
      - paragraph [ref=e20]: Fintech, e-ticaret ve dijital ekosistemlerde 20+ yıldır mühendislik ekipleri, cloud-native platformlar ve üretime alınan AI girişimleri yönetiyorum.
      - generic [ref=e21]:
        - link "İletişime geç" [ref=e22]:
          - /url: "#contact"
          - text: İletişime geç
          - img [ref=e23]
        - link "Deneyimi gör" [ref=e26]:
          - /url: "#experience"
      - generic [ref=e27]:
        - link "LinkedIn profili" [ref=e28]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - img [ref=e30]
          - text: LinkedIn
        - generic [ref=e32]:
          - img [ref=e33]
          - text: İstanbul, Türkiye · Hibrit
        - generic [ref=e36]:
          - img [ref=e37]
          - text: Türkçe · İngilizce
    - region "Etki" [ref=e40]:
      - generic [ref=e41]:
        - heading "Etki" [level=2] [ref=e42]
        - generic [ref=e43]:
          - generic [ref=e45]:
            - generic [ref=e46]: 20+
            - generic [ref=e47]:
              - generic [ref=e48]: Yıl deneyim
              - generic [ref=e49]: 2003'ten bu yana
          - generic [ref=e51]:
            - generic [ref=e52]: 50+
            - generic [ref=e53]:
              - generic [ref=e54]: Mühendis yönetimi
              - generic [ref=e55]: Dağıtık, çok disiplinli ekipler
          - generic [ref=e57]:
            - generic [ref=e58]: 10+
            - generic [ref=e59]:
              - generic [ref=e60]: Şirkette liderlik
              - generic [ref=e61]: CTO · Direktör · Danışman
    - generic [ref=e63]:
      - generic [ref=e65]:
        - heading "Stratejik Teknoloji ve Mühendislik Yönetimi" [level=2] [ref=e66]
        - paragraph [ref=e67]: İş hedeflerini mühendislik ölçeğiyle birleştiren, yapay zekâ çözümlerini deneysel aşamadan üretim sistemlerine taşıyan liderlik yaklaşımı.
      - generic [ref=e68]:
        - generic [ref=e69]:
          - generic [ref=e71]: Stratejiyi çalışan sistemlere dönüştürmek.
          - generic [ref=e73]:
            - paragraph [ref=e74]: 20+ yıldır fintech, e-ticaret ve dijital ekosistemlerde büyük ölçekli platformlar ve mühendislik organizasyonları yönetiyorum. 50+'lik dağıtık ekiplerle, milyonlarca kullanıcıyı destekleyen cloud-native mikroservis mimarileri kurdum.
            - paragraph [ref=e75]: Son yıllarda AI ve LLM girişimlerini deney değil, karar almayı güçlendiren ve operasyonu hızlandıran üretim sistemleri olarak hayata geçirdim.
        - generic [ref=e77]:
          - generic [ref=e79]: İş öncelikli AI ve platform kararları
          - generic [ref=e81]: Dağıtık ekiplerde mühendislik liderliği
          - generic [ref=e83]: Ölçek için tasarlanmış cloud-native sistemler
          - generic [ref=e85]: Keşiften devreye almaya pragmatik teslimat
    - generic [ref=e87]:
      - generic [ref=e89]:
        - heading "Kariyer Yolculuğu & Liderlik Kronolojisi" [level=2] [ref=e90]
        - paragraph [ref=e91]: Fintech, e-ticaret ve platform odaklı liderlik rolleri; unvanlardan ziyade yaratılan etki ve üstlenilen operasyonel sorumluluklar.
      - generic [ref=e92]:
        - article [ref=e94]:
          - generic [ref=e95]: Self-Employed — İstanbul
          - heading "AI & Dijital Dönüşüm Yöneticisi · Ex-CTO · Fractional CTO" [level=3] [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]: Oca 2026 — Devam ediyor
            - generic [ref=e99]: 5 ay
          - paragraph [ref=e100]: Şirketlere ölçülebilir iş etkisi odaklı AI benimseme stratejisi danışmanlığı. Güçlü doğruluk standartları ve insan denetim modelleriyle AI-native iş akışları tasarımı. Kurumsal güvenlikte blockchain ve dijital varlık saklama projeleri — HSM (Thales, SafeNet), mTLS ve PKI.
          - generic [ref=e101]:
            - generic [ref=e102]: AI Stratejisi
            - generic [ref=e103]: LLM
            - generic [ref=e104]: Blockchain
            - generic [ref=e105]: HSM
        - generic [ref=e106]:
          - article [ref=e108]:
            - generic [ref=e109]:
              - heading "Chief Technology Officer" [level=3] [ref=e110]
              - generic [ref=e111]: Ara 2024 — Ara 2025 · 1 yıl 1 ay
            - generic [ref=e112]: Ozan — İstanbul (Fintech)
            - paragraph [ref=e113]: Uçtan uca teknoloji operasyonları ve strateji yönetimi. BE, FE, QA, DevOps ekiplerini yönetti. POS, Sanal POS ve dijital cüzdan ürünlerini geliştirdi. Yüksek hacimli finansal belgeler için LLM tabanlı Belge Zekası Platformu ve çok alanlı kullanım için tasarlanmış AI destekli dolandırıcılık tespit sistemi FraudInsight (NLP & LLM) kurdu.
            - generic [ref=e114]:
              - generic [ref=e115]: Fintech
              - generic [ref=e116]: LLM
              - generic [ref=e117]: Dolandırıcılık Tespiti
          - article [ref=e119]:
            - generic [ref=e120]:
              - heading "Chief Technology Officer" [level=3] [ref=e121]
              - generic [ref=e122]: Mar 2024 — Eyl 2024 · 7 ay
            - generic [ref=e123]: Saran Group — İstanbul
            - paragraph [ref=e124]: "Saran Group portföyünde dijital dönüşüm liderliği: Tuttur.com, Sonduzluk.com (TJK), Ajansspor.com, SDS, RadyoSpor, RadyoTrafik. Çok ekipli mühendislik yönetimi ve üçüncü taraf tedarikçi ilişkileri."
            - generic [ref=e125]:
              - generic [ref=e126]: Dijital Dönüşüm
              - generic [ref=e127]: Medya Teknolojisi
              - generic [ref=e128]: Bahis Sistemleri
          - article [ref=e130]:
            - generic [ref=e131]:
              - heading "Chief Technology Officer" [level=3] [ref=e132]
              - generic [ref=e133]: Nis 2023 — Şub 2024 · 11 ay
            - generic [ref=e134]: Huudle.io — Türkiye
          - article [ref=e136]:
            - generic [ref=e137]:
              - heading "Yazılım Mühendisliği Direktörü" [level=3] [ref=e138]
              - generic [ref=e139]: Şub 2022 — Şub 2023 · 1 yıl 1 ay · Londra, İngiltere
            - generic [ref=e140]: Pisano — London
          - article [ref=e142]:
            - generic [ref=e143]:
              - heading "Yazılım Mühendisliği Direktörü" [level=3] [ref=e144]
              - generic [ref=e145]: Tem 2021 — Şub 2022 · 8 ay
            - generic [ref=e146]: Demirören Teknoloji / Azerloterya — İstanbul
      - generic [ref=e147]:
        - heading "Önceki roller" [level=3] [ref=e148]
        - generic [ref=e149]:
          - generic [ref=e151]:
            - generic [ref=e152]: E-Ticaret Kıdemli Yöneticisi
            - generic [ref=e153]: Odeon Software & Technology / OTI Holding — İstanbul
            - generic [ref=e154]: Şub 2020 — Tem 2021 · 1 yıl 6 ay
          - generic [ref=e156]:
            - generic [ref=e157]: E-Ticaret Yazılım Geliştirme Müdürü
            - generic [ref=e158]: LC Waikiki — İstanbul
            - generic [ref=e159]: Nis 2019 — Şub 2020 · 11 ay
          - generic [ref=e161]:
            - generic [ref=e162]: Proje ve Yazılım Geliştirme Müdürü
            - generic [ref=e163]: Demirören Gazetecilik — İstanbul
            - generic [ref=e164]: Eyl 2017 — Nis 2019 · 1 yıl 8 ay
          - generic [ref=e166]:
            - generic [ref=e167]: Yazılım Geliştirme Müdürü
            - generic [ref=e168]: Hürriyet — İstanbul
            - generic [ref=e169]: May 2015 — Eyl 2017 · 2 yıl 5 ay
          - generic [ref=e171]:
            - generic [ref=e172]: Yazılım Geliştirme Müdür Yardımcısı
            - generic [ref=e173]: Hürriyet — İstanbul
            - generic [ref=e174]: Tem 2014 — May 2015 · 11 ay
          - generic [ref=e176]:
            - generic [ref=e177]: Baş Yazılım Mühendisi
            - generic [ref=e178]: Hürriyet — İstanbul
            - generic [ref=e179]: Eyl 2011 — Tem 2014 · 2 yıl 11 ay
          - generic [ref=e181]:
            - generic [ref=e182]: Kıdemli Yazılım Geliştirici
            - generic [ref=e183]: SFS Şirketler Grubu — İstanbul
            - generic [ref=e184]: Mar 2011 — Eyl 2011 · 7 ay
          - generic [ref=e186]:
            - generic [ref=e187]: Yazılım Geliştirici
            - generic [ref=e188]: BİLİN Yazılım — İstanbul
            - generic [ref=e189]: Oca 2009 — Mar 2011 · 2 yıl 3 ay
          - generic [ref=e191]:
            - generic [ref=e192]: Yazılım Geliştirici
            - generic [ref=e193]: NETİSİS Bilgi Teknolojileri — İstanbul
            - generic [ref=e194]: Oca 2003 — Kas 2008 · 5 yıl 11 ay
    - generic [ref=e196]:
      - generic [ref=e198]:
        - heading "Temel Uzmanlık Alanları" [level=2] [ref=e199]
        - paragraph [ref=e200]: Fintech altyapıları, bulut tabanlı mikroservisler ve yapay zekâ entegrasyonlarına yön veren teknik ve yönetsel yetkinlikler.
      - generic [ref=e202]:
        - generic [ref=e204]:
          - generic [ref=e205]: Temel Alanlar
          - generic [ref=e206]:
            - article [ref=e207]:
              - heading "AI & LLM Dönüşümü" [level=3] [ref=e208]
              - paragraph [ref=e209]: Belge zekası, dolandırıcılık tespiti ve karar otomasyonu için üretim kalitesinde LLM sistemleri.
            - article [ref=e210]:
              - heading "Fintech & Ödeme Sistemleri" [level=3] [ref=e211]
        - generic [ref=e213]:
          - generic [ref=e214]: Sistemler
          - generic [ref=e215]:
            - article [ref=e216]:
              - heading "Cloud-Native Mimari" [level=3] [ref=e217]
              - paragraph [ref=e218]: Azure ve GCP üzerinde 100+ servislik, yüksek trafikli mikroservis mimarileri.
            - article [ref=e219]:
              - heading "Güvenlik & Kriptografi" [level=3] [ref=e220]
        - generic [ref=e222]:
          - generic [ref=e223]: Liderlik
          - generic [ref=e224]:
            - article [ref=e225]:
              - heading "Mühendislik Liderliği" [level=3] [ref=e226]
              - paragraph [ref=e227]: 3x ekip büyütme, 50+ mühendis yönetimi ve ölçekli Agile operasyonu.
            - article [ref=e228]:
              - heading "Dijital Dönüşüm" [level=3] [ref=e229]
    - generic [ref=e231]:
      - generic [ref=e233]:
        - heading "Sorumlu ve Güvenilir Yapay Zekâ Yaklaşımı" [level=2] [ref=e234]
        - paragraph [ref=e235]: Üretim seviyesindeki yapay zekâ uygulamalarında doğruluk, veri gizliliği ve insan denetimini esas alan mimari prensipler.
      - generic [ref=e236]:
        - generic [ref=e237]:
          - generic [ref=e239]: Çalışma prensipleri
          - generic [ref=e240]:
            - generic [ref=e241]:
              - heading "Üretim öncelikli" [level=3] [ref=e242]
              - paragraph [ref=e243]: Doğrulanmış iş etkisi olmadan devreye alma yapılmaz. Her sistem gerçek operasyon yükü için tasarlanır.
            - heading "İnsan denetimi" [level=3] [ref=e245]
            - heading "Gizlilik tasarımı" [level=3] [ref=e247]
        - generic [ref=e248]:
          - generic [ref=e249]:
            - generic [ref=e250]: Ozan · 2024–2025
            - heading "Belge Zekası Platformu" [level=3] [ref=e251]
            - paragraph [ref=e252]: Yüksek hacimli finansal belgeleri analiz eden yerel LLM tabanlı sistem. On-premise mimariyle veri gizliliği korundu, manuel inceleme süresi ve operasyonel yük azaltıldı.
          - generic [ref=e253]:
            - generic [ref=e254]: Ozan · 2024–2025
            - heading "FraudInsight — AI Tabanlı Dolandırıcılık Tespiti" [level=3] [ref=e255]
    - generic [ref=e257]:
      - generic [ref=e259]:
        - heading "Akademik Geçmiş & Sürekli Gelişim" [level=2] [ref=e260]
        - paragraph [ref=e261]: İş analitiği, yönetim bilişim sistemleri ve yazılım temellerini birleştiren akademik altyapı.
      - generic [ref=e262]:
        - article [ref=e264]:
          - generic [ref=e265]:
            - img [ref=e267]
            - generic [ref=e270]:
              - heading "İstanbul Teknik Üniversitesi" [level=3] [ref=e271]
              - generic [ref=e272]: Büyük Veri & İş Analitiği, YL
          - generic [ref=e273]: Ağu 2024 — Devam ediyor
        - article [ref=e275]:
          - generic [ref=e276]:
            - img [ref=e278]
            - generic [ref=e281]:
              - heading "Ahmet Yesevi Üniversitesi" [level=3] [ref=e282]
              - generic [ref=e283]: Yönetim Bilişim Sistemleri
          - generic [ref=e284]: 2005 — 2009
        - article [ref=e286]:
          - generic [ref=e287]:
            - img [ref=e289]
            - generic [ref=e292]:
              - heading "Ondokuz Mayıs Üniversitesi" [level=3] [ref=e293]
              - generic [ref=e294]: Bilgisayar Programcılığı, Ön Lisans
          - generic [ref=e295]: 1999 — 2001
    - generic [ref=e297]:
      - generic [ref=e298]:
        - generic [ref=e300]:
          - heading "İletişim & İş Birliği" [level=2] [ref=e301]
          - paragraph [ref=e302]: AI dönüşümü, fintech platformları veya yüksek ölçekli organizasyonel yapılanmalar için doğrudan temas kurabilirsiniz.
        - generic [ref=e304]: "Yanıt süresi: 24 saat içinde"
      - generic [ref=e307]:
        - link "LinkedIn tanselkilic" [ref=e309]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - generic [ref=e310]:
            - img [ref=e312]
            - generic [ref=e314]:
              - generic [ref=e315]: LinkedIn
              - generic [ref=e316]: tanselkilic
            - img [ref=e317]
        - link "E-posta Mesaj gönder" [ref=e321]:
          - /url: mailto:tanselkilic@gmail.com
          - generic [ref=e322]:
            - img [ref=e324]
            - generic [ref=e327]:
              - generic [ref=e328]: E-posta
              - generic [ref=e329]: Mesaj gönder
            - img [ref=e330]
        - generic [ref=e335]:
          - img [ref=e337]
          - generic [ref=e340]:
            - generic [ref=e341]: İstanbul, Türkiye
            - generic [ref=e342]: Uzaktan çalışmaya açık
  - contentinfo [ref=e343]:
    - generic [ref=e344]:
      - generic [ref=e345]:
        - generic [ref=e346]: Tansel KILIÇ
        - generic [ref=e347]: © 2026 Tansel KILIÇ · Teknoloji Lideri & AI Yöneticisi
      - generic [ref=e348]:
        - link "LinkedIn profili" [ref=e349]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - img [ref=e350]
        - link "E-posta adresi" [ref=e352]:
          - /url: mailto:tanselkilic@gmail.com
          - img [ref=e353]
        - button "Yukarı Çık" [ref=e356] [cursor=pointer]:
          - img [ref=e357]
  - button "Open Next.js Dev Tools" [ref=e364] [cursor=pointer]:
    - img [ref=e365]
  - alert [ref=e370]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import AxeBuilder from "@axe-core/playwright";
  3  | 
  4  | test.describe("Accessibility Audits", () => {
  5  |   test("homepage should not have any automatically detectable WCAG AA violations", async ({ page }) => {
  6  |     await page.goto("/");
  7  |     await page.waitForTimeout(500);
  8  | 
  9  |     const accessibilityScanResults = await new AxeBuilder({ page })
  10 |       .withTags(["wcag2a", "wcag2aa", "best-practice"])
  11 |       .analyze();
  12 | 
> 13 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  14 |   });
  15 | 
  16 |   test("homepage in English should not have accessibility violations", async ({ page }) => {
  17 |     await page.goto("/");
  18 |     const btnEn = page.locator('button[aria-label="Dili İngilizce yap"], button[aria-label="Switch language to English"]');
  19 |     await btnEn.click();
  20 |     await page.waitForTimeout(500);
  21 | 
  22 |     const accessibilityScanResults = await new AxeBuilder({ page })
  23 |       .withTags(["wcag2a", "wcag2aa"])
  24 |       .analyze();
  25 | 
  26 |     expect(accessibilityScanResults.violations).toEqual([]);
  27 |   });
  28 | });
  29 | 
```