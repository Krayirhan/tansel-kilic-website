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
+ Received  + 37

- Array []
+ Array [
+   Object {
+     "description": "Ensure the complementary landmark or aside is at top level",
+     "help": "Aside should not be contained in another landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright",
+     "id": "landmark-complementary-is-top-level",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "role": null,
+             },
+             "id": "landmark-is-top-level",
+             "impact": "moderate",
+             "message": "The null landmark is contained in another landmark.",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   The null landmark is contained in another landmark.",
+         "html": "<aside class=\"hidden border-l border-stone-200 pl-5 pt-1 lg:block\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "aside",
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
      - link "Tansel KILIÇ anasayfa" [ref=e4] [cursor=pointer]:
        - /url: /
        - text: Tansel KILIÇ
      - navigation [ref=e5]:
        - link "Hakkımda" [ref=e6] [cursor=pointer]:
          - /url: "#about"
        - link "Deneyim" [ref=e7] [cursor=pointer]:
          - /url: "#experience"
        - link "Uzmanlık" [ref=e8] [cursor=pointer]:
          - /url: "#expertise"
        - link "Eğitim" [ref=e9] [cursor=pointer]:
          - /url: "#education"
        - link "Sorumlu AI" [ref=e10] [cursor=pointer]:
          - /url: "#responsible-ai"
        - link "İletişim" [ref=e11] [cursor=pointer]:
          - /url: "#contact"
      - group "Dil" [ref=e13]:
        - button "Dili İngilizce yap" [ref=e14] [cursor=pointer]: en
        - button "Dili Türkçe yap" [ref=e15] [cursor=pointer]: tr
  - main [ref=e16]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - heading "Tansel KILIÇ" [level=1] [ref=e21]
        - generic [ref=e22]: AI, fintech ve platform ekipleri için teknoloji liderliği.
        - paragraph [ref=e23]: Fintech, e-ticaret ve dijital ekosistemlerde 20+ yıldır mühendislik ekipleri, cloud-native platformlar ve üretime alınan AI girişimleri yönetiyorum.
        - generic [ref=e24]:
          - link "İletişime geç" [ref=e25] [cursor=pointer]:
            - /url: "#contact"
            - text: İletişime geç
            - img [ref=e26]
          - link "Deneyimi gör" [ref=e29] [cursor=pointer]:
            - /url: "#experience"
        - generic [ref=e30]:
          - link "LinkedIn profili" [ref=e31] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/tanselkilic/
            - img [ref=e33]
            - text: LinkedIn
          - generic [ref=e36]:
            - img [ref=e37]
            - text: İstanbul, Türkiye · Hibrit
          - generic [ref=e40]:
            - img [ref=e41]
            - text: Türkçe · İngilizce
      - complementary [ref=e45]:
        - generic [ref=e46]: Stratejiden uygulamaya
        - generic [ref=e47]:
          - generic [ref=e49]: AI dönüşümü
          - generic [ref=e51]: Fintech platformları
          - generic [ref=e53]: Mühendislik ölçeği
    - region "Etki" [ref=e54]:
      - generic [ref=e55]:
        - heading "Etki" [level=2] [ref=e56]
        - generic [ref=e57]:
          - generic [ref=e59]:
            - generic [ref=e60]: 20+
            - generic [ref=e61]:
              - generic [ref=e62]: Yıl deneyim
              - generic [ref=e63]: 2003'ten bu yana
          - generic [ref=e65]:
            - generic [ref=e66]: 50+
            - generic [ref=e67]:
              - generic [ref=e68]: Mühendis yönetimi
              - generic [ref=e69]: Dağıtık, çok disiplinli ekipler
          - generic [ref=e71]:
            - generic [ref=e72]: 10+
            - generic [ref=e73]:
              - generic [ref=e74]: Şirkette liderlik
              - generic [ref=e75]: CTO · Direktör · Danışman
    - generic [ref=e77]:
      - generic [ref=e79]:
        - heading "Stratejik Teknoloji ve Mühendislik Yönetimi" [level=2] [ref=e80]
        - paragraph [ref=e81]: İş hedeflerini mühendislik ölçeğiyle birleştiren, yapay zekâ çözümlerini deneysel aşamadan üretim sistemlerine taşıyan liderlik yaklaşımı.
      - generic [ref=e82]:
        - generic [ref=e83]:
          - generic [ref=e85]: Stratejiyi çalışan sistemlere dönüştürmek.
          - generic [ref=e87]:
            - paragraph [ref=e88]: 20+ yıldır fintech, e-ticaret ve dijital ekosistemlerde büyük ölçekli platformlar ve mühendislik organizasyonları yönetiyorum. 50+'lik dağıtık ekiplerle, milyonlarca kullanıcıyı destekleyen cloud-native mikroservis mimarileri kurdum.
            - paragraph [ref=e89]: Son yıllarda AI ve LLM girişimlerini deney değil, karar almayı güçlendiren ve operasyonu hızlandıran üretim sistemleri olarak hayata geçirdim.
        - generic [ref=e91]:
          - generic [ref=e93]: İş öncelikli AI ve platform kararları
          - generic [ref=e95]: Dağıtık ekiplerde mühendislik liderliği
          - generic [ref=e97]: Ölçek için tasarlanmış cloud-native sistemler
          - generic [ref=e99]: Keşiften devreye almaya pragmatik teslimat
    - generic [ref=e101]:
      - generic [ref=e103]:
        - heading "Kariyer Yolculuğu & Liderlik Kronolojisi" [level=2] [ref=e104]
        - paragraph [ref=e105]: Fintech, e-ticaret ve platform odaklı liderlik rolleri; unvanlardan ziyade yaratılan etki ve üstlenilen operasyonel sorumluluklar.
      - generic [ref=e106]:
        - article [ref=e108]:
          - generic [ref=e109]: Self-Employed — İstanbul
          - heading "AI & Dijital Dönüşüm Yöneticisi · Ex-CTO · Fractional CTO" [level=3] [ref=e110]
          - generic [ref=e111]:
            - generic [ref=e112]: Oca 2026 — Devam ediyor
            - generic [ref=e113]: 5 ay
          - paragraph [ref=e114]: Şirketlere ölçülebilir iş etkisi odaklı AI benimseme stratejisi danışmanlığı. Güçlü doğruluk standartları ve insan denetim modelleriyle AI-native iş akışları tasarımı. Kurumsal güvenlikte blockchain ve dijital varlık saklama projeleri — HSM (Thales, SafeNet), mTLS ve PKI.
          - generic [ref=e115]:
            - generic [ref=e116]: AI Stratejisi
            - generic [ref=e117]: LLM
            - generic [ref=e118]: Blockchain
            - generic [ref=e119]: HSM
        - generic [ref=e120]:
          - article [ref=e122]:
            - generic [ref=e123]:
              - heading "Chief Technology Officer" [level=3] [ref=e124]
              - generic [ref=e125]: Ara 2024 — Ara 2025 · 1 yıl 1 ay
            - generic [ref=e126]: Ozan — İstanbul (Fintech)
            - paragraph [ref=e127]: Uçtan uca teknoloji operasyonları ve strateji yönetimi. BE, FE, QA, DevOps ekiplerini yönetti. POS, Sanal POS ve dijital cüzdan ürünlerini geliştirdi. Yüksek hacimli finansal belgeler için LLM tabanlı Belge Zekası Platformu ve çok alanlı kullanım için tasarlanmış AI destekli dolandırıcılık tespit sistemi FraudInsight (NLP & LLM) kurdu.
            - generic [ref=e128]:
              - generic [ref=e129]: Fintech
              - generic [ref=e130]: LLM
              - generic [ref=e131]: Dolandırıcılık Tespiti
          - article [ref=e133]:
            - generic [ref=e134]:
              - heading "Chief Technology Officer" [level=3] [ref=e135]
              - generic [ref=e136]: Mar 2024 — Eyl 2024 · 7 ay
            - generic [ref=e137]: Saran Group — İstanbul
            - paragraph [ref=e138]: "Saran Group portföyünde dijital dönüşüm liderliği: Tuttur.com, Sonduzluk.com (TJK), Ajansspor.com, SDS, RadyoSpor, RadyoTrafik. Çok ekipli mühendislik yönetimi ve üçüncü taraf tedarikçi ilişkileri."
            - generic [ref=e139]:
              - generic [ref=e140]: Dijital Dönüşüm
              - generic [ref=e141]: Medya Teknolojisi
              - generic [ref=e142]: Bahis Sistemleri
          - article [ref=e144]:
            - generic [ref=e145]:
              - heading "Chief Technology Officer" [level=3] [ref=e146]
              - generic [ref=e147]: Nis 2023 — Şub 2024 · 11 ay
            - generic [ref=e148]: Huudle.io — Türkiye
            - paragraph [ref=e149]: Kullanıcı deneyimi odaklı yenilikçi toplantı platformu Huudle'ın geliştirilmesini yönetti. Mühendis işe alımı, ekip yönetimi, sistem mimarisi ve veri gizliliği standartlarına uyum.
            - generic [ref=e150]:
              - generic [ref=e151]: Startup
              - generic [ref=e152]: GCP
              - generic [ref=e153]: Sistem Mimarisi
          - article [ref=e155]:
            - generic [ref=e156]:
              - heading "Yazılım Mühendisliği Direktörü" [level=3] [ref=e157]
              - generic [ref=e158]: Şub 2022 — Şub 2023 · 1 yıl 1 ay · Londra, İngiltere
            - generic [ref=e159]: Pisano — London
            - paragraph [ref=e160]: IT yol haritası, bütçesi ve strateji sorumluluğu. Geliştirme, DevOps, QA, Entegrasyon, PO ve BA ekiplerini yönetti. Mühendislik ekibini 1 yılda 3 katına çıkardı. Microsoft, Salesforce ve Azure Marketplace ortaklıkları geliştirdi.
            - generic [ref=e161]:
              - generic [ref=e162]: Azure
              - generic [ref=e163]: Salesforce
              - generic [ref=e164]: Ekip Büyütme
          - article [ref=e166]:
            - generic [ref=e167]:
              - heading "Yazılım Mühendisliği Direktörü" [level=3] [ref=e168]
              - generic [ref=e169]: Tem 2021 — Şub 2022 · 8 ay
            - generic [ref=e170]: Demirören Teknoloji / Azerloterya — İstanbul
            - paragraph [ref=e171]: Azerbaycan Spor Bahis ve Sanal Spor platformları ve mobil uygulamaları. Azure üzerinde 100+ mikroservis. 30-35 kişilik mühendislik ekibi yönetimi (Scrum/Kanban). Azure DevOps ve üçüncü taraf entegrasyonlar.
            - generic [ref=e172]:
              - generic [ref=e173]: Azure
              - generic [ref=e174]: Mikroservisler
              - generic [ref=e175]: DevOps
      - generic [ref=e176]:
        - heading "Önceki roller" [level=3] [ref=e177]
        - generic [ref=e178]:
          - generic [ref=e180]:
            - generic [ref=e181]: E-Ticaret Kıdemli Yöneticisi
            - generic [ref=e182]: Odeon Software & Technology / OTI Holding — İstanbul
            - generic [ref=e183]: Şub 2020 — Tem 2021 · 1 yıl 6 ay
          - generic [ref=e185]:
            - generic [ref=e186]: E-Ticaret Yazılım Geliştirme Müdürü
            - generic [ref=e187]: LC Waikiki — İstanbul
            - generic [ref=e188]: Nis 2019 — Şub 2020 · 11 ay
          - generic [ref=e190]:
            - generic [ref=e191]: Proje ve Yazılım Geliştirme Müdürü
            - generic [ref=e192]: Demirören Gazetecilik — İstanbul
            - generic [ref=e193]: Eyl 2017 — Nis 2019 · 1 yıl 8 ay
          - generic [ref=e195]:
            - generic [ref=e196]: Yazılım Geliştirme Müdürü
            - generic [ref=e197]: Hürriyet — İstanbul
            - generic [ref=e198]: May 2015 — Eyl 2017 · 2 yıl 5 ay
          - generic [ref=e200]:
            - generic [ref=e201]: Yazılım Geliştirme Müdür Yardımcısı
            - generic [ref=e202]: Hürriyet — İstanbul
            - generic [ref=e203]: Tem 2014 — May 2015 · 11 ay
          - generic [ref=e205]:
            - generic [ref=e206]: Baş Yazılım Mühendisi
            - generic [ref=e207]: Hürriyet — İstanbul
            - generic [ref=e208]: Eyl 2011 — Tem 2014 · 2 yıl 11 ay
          - generic [ref=e210]:
            - generic [ref=e211]: Kıdemli Yazılım Geliştirici
            - generic [ref=e212]: SFS Şirketler Grubu — İstanbul
            - generic [ref=e213]: Mar 2011 — Eyl 2011 · 7 ay
          - generic [ref=e215]:
            - generic [ref=e216]: Yazılım Geliştirici
            - generic [ref=e217]: BİLİN Yazılım — İstanbul
            - generic [ref=e218]: Oca 2009 — Mar 2011 · 2 yıl 3 ay
          - generic [ref=e220]:
            - generic [ref=e221]: Yazılım Geliştirici
            - generic [ref=e222]: NETİSİS Bilgi Teknolojileri — İstanbul
            - generic [ref=e223]: Oca 2003 — Kas 2008 · 5 yıl 11 ay
    - generic [ref=e225]:
      - generic [ref=e227]:
        - heading "Temel Uzmanlık Alanları" [level=2] [ref=e228]
        - paragraph [ref=e229]: Fintech altyapıları, bulut tabanlı mikroservisler ve yapay zekâ entegrasyonlarına yön veren teknik ve yönetsel yetkinlikler.
      - generic [ref=e231]:
        - generic [ref=e233]:
          - generic [ref=e234]: Temel Alanlar
          - generic [ref=e235]:
            - article [ref=e236]:
              - heading "AI & LLM Dönüşümü" [level=3] [ref=e237]
              - paragraph [ref=e238]: Belge zekası, dolandırıcılık tespiti ve karar otomasyonu için üretim kalitesinde LLM sistemleri.
            - article [ref=e239]:
              - heading "Fintech & Ödeme Sistemleri" [level=3] [ref=e240]
              - paragraph [ref=e241]: POS, Sanal POS, dijital cüzdan, AML ve finansal uyumluluk tarafında güçlü uygulama deneyimi.
        - generic [ref=e243]:
          - generic [ref=e244]: Sistemler
          - generic [ref=e245]:
            - article [ref=e246]:
              - heading "Cloud-Native Mimari" [level=3] [ref=e247]
              - paragraph [ref=e248]: Azure ve GCP üzerinde 100+ servislik, yüksek trafikli mikroservis mimarileri.
            - article [ref=e249]:
              - heading "Güvenlik & Kriptografi" [level=3] [ref=e250]
              - paragraph [ref=e251]: HSM entegrasyonları, mTLS, PKI ve kurumsal güvenlik mimarisi deneyimi.
        - generic [ref=e253]:
          - generic [ref=e254]: Liderlik
          - generic [ref=e255]:
            - article [ref=e256]:
              - heading "Mühendislik Liderliği" [level=3] [ref=e257]
              - paragraph [ref=e258]: 3x ekip büyütme, 50+ mühendis yönetimi ve ölçekli Agile operasyonu.
            - article [ref=e259]:
              - heading "Dijital Dönüşüm" [level=3] [ref=e260]
              - paragraph [ref=e261]: Eski sistemleri modern ve ölçeklenebilir dijital platformlara dönüştürme deneyimi.
    - generic [ref=e263]:
      - generic [ref=e265]:
        - heading "Sorumlu ve Güvenilir Yapay Zekâ Yaklaşımı" [level=2] [ref=e266]
        - paragraph [ref=e267]: Üretim seviyesindeki yapay zekâ uygulamalarında doğruluk, veri gizliliği ve insan denetimini esas alan mimari prensipler.
      - generic [ref=e268]:
        - generic [ref=e269]:
          - generic [ref=e271]: Çalışma prensipleri
          - generic [ref=e272]:
            - generic [ref=e273]:
              - heading "Üretim öncelikli" [level=3] [ref=e274]
              - paragraph [ref=e275]: Doğrulanmış iş etkisi olmadan devreye alma yapılmaz. Her sistem gerçek operasyon yükü için tasarlanır.
            - generic [ref=e276]:
              - heading "İnsan denetimi" [level=3] [ref=e277]
              - paragraph [ref=e278]: Kritik kararlarda insan denetimi varsayılandır. Otomasyon, güven arttıkça kademeli genişler.
            - generic [ref=e279]:
              - heading "Gizlilik tasarımı" [level=3] [ref=e280]
              - paragraph [ref=e281]: Finansal ve hassas veriler için on-premise mimari kurulur. Veri sınır dışına çıkmaz; uyumluluk mimaride çözülür.
        - generic [ref=e282]:
          - generic [ref=e283]:
            - generic [ref=e284]: Ozan · 2024–2025
            - heading "Belge Zekası Platformu" [level=3] [ref=e285]
            - paragraph [ref=e286]: Yüksek hacimli finansal belgeleri analiz eden yerel LLM tabanlı sistem. On-premise mimariyle veri gizliliği korundu, manuel inceleme süresi ve operasyonel yük azaltıldı.
          - generic [ref=e287]:
            - generic [ref=e288]: Ozan · 2024–2025
            - heading "FraudInsight — AI Tabanlı Dolandırıcılık Tespiti" [level=3] [ref=e289]
            - paragraph [ref=e290]: İşlem verileri ve metinsel sinyalleri NLP ve LLM ile analiz eden fraud tespit sistemi. Kural tabanlı yaklaşımın ötesinde şüpheli desenleri gerçek zamanlı tespit eder; fintech, e-ticaret ve telekom için ölçeklenebilir yapıdadır.
    - generic [ref=e292]:
      - generic [ref=e294]:
        - heading "Akademik Geçmiş & Sürekli Gelişim" [level=2] [ref=e295]
        - paragraph [ref=e296]: İş analitiği, yönetim bilişim sistemleri ve yazılım temellerini birleştiren akademik altyapı.
      - generic [ref=e297]:
        - article [ref=e299]:
          - generic [ref=e300]:
            - img [ref=e302]
            - generic [ref=e306]:
              - heading "İstanbul Teknik Üniversitesi" [level=3] [ref=e307]
              - generic [ref=e308]: Büyük Veri & İş Analitiği, YL
          - generic [ref=e309]: Ağu 2024 — Devam ediyor
        - article [ref=e311]:
          - generic [ref=e312]:
            - img [ref=e314]
            - generic [ref=e318]:
              - heading "Ahmet Yesevi Üniversitesi" [level=3] [ref=e319]
              - generic [ref=e320]: Yönetim Bilişim Sistemleri
          - generic [ref=e321]: 2005 — 2009
        - article [ref=e323]:
          - generic [ref=e324]:
            - img [ref=e326]
            - generic [ref=e330]:
              - heading "Ondokuz Mayıs Üniversitesi" [level=3] [ref=e331]
              - generic [ref=e332]: Bilgisayar Programcılığı, Ön Lisans
          - generic [ref=e333]: 1999 — 2001
    - generic [ref=e335]:
      - generic [ref=e336]:
        - generic [ref=e338]:
          - heading "İletişim & İş Birliği" [level=2] [ref=e339]
          - paragraph [ref=e340]: AI dönüşümü, fintech platformları veya yüksek ölçekli organizasyonel yapılanmalar için doğrudan temas kurabilirsiniz.
        - generic [ref=e342]: "Yanıt süresi: 24 saat içinde"
      - generic [ref=e345]:
        - link "LinkedIn tanselkilic" [ref=e347] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - generic [ref=e348]:
            - img [ref=e350]
            - generic [ref=e352]:
              - generic [ref=e353]: LinkedIn
              - generic [ref=e354]: tanselkilic
            - img [ref=e355]
        - link "E-posta Mesaj gönder" [ref=e359] [cursor=pointer]:
          - /url: mailto:tanselkilic@gmail.com
          - generic [ref=e360]:
            - img [ref=e362]
            - generic [ref=e365]:
              - generic [ref=e366]: E-posta
              - generic [ref=e367]: Mesaj gönder
            - img [ref=e368]
        - generic [ref=e373]:
          - img [ref=e375]
          - generic [ref=e378]:
            - generic [ref=e379]: İstanbul, Türkiye
            - generic [ref=e380]: Uzaktan çalışmaya açık
  - contentinfo [ref=e381]:
    - generic [ref=e382]:
      - generic [ref=e383]:
        - generic [ref=e384]: Tansel KILIÇ
        - generic [ref=e385]: © 2026 Tansel KILIÇ · Teknoloji Lideri & AI Yöneticisi
      - generic [ref=e386]:
        - link "LinkedIn profili" [ref=e387] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/tanselkilic/
          - img [ref=e388]
        - link "E-posta adresi" [ref=e390] [cursor=pointer]:
          - /url: mailto:tanselkilic@gmail.com
          - img [ref=e391]
        - button "Yukarı Çık" [ref=e394] [cursor=pointer]:
          - img [ref=e395]
  - button "Open Next.js Dev Tools" [ref=e403] [cursor=pointer]:
    - img [ref=e404]
  - alert [ref=e408]
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