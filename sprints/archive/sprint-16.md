# Sprint-16 — Playwright E2E & Erişilebilirlik Otomasyonu

---

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 16 |
| **Başlık** | Playwright E2E & A11y Testleri |
| **Başlangıç** | 2026-06-12 |
| **Bitiş (hedef)** | 2026-06-14 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Test altyapısı |

---

## Hedef (Goal)

Portföy için Playwright ve axe-core ile uçtan uca (E2E) navigasyon, dil geçiş ve erişilebilirlik testlerini kurmak.

---

## Görevler

- [x] [P2] Playwright ve `@axe-core/playwright` kütüphanelerini kurmak, `package.json` içerisine `test:e2e` komutunu entegre etmek.
- [x] [P3] Mobil navigasyon (drawer), dil seçimi (TR/EN) ve çapa linki yönlendirmeleri için uçtan uca (E2E) test senaryolarını yazmak.
- [x] [P3] Kritik sayfalarda renk kontrastı ve ARIA standartlarını otomatik doğrulayan `axe-core` taramalarını E2E testlerine dahil etmek.
- [-] [P3] Playwright yapılandırmasını lokalde çalıştırıp yeşil rapor üretmesini doğrulamak. ← Sprint-17'ye taşındı.
- [x] [P4] GitHub Actions üzerinde koşacak temel bir CI iş akışı (.github/workflows/ci.yml) oluşturmak.

---

## Etkilenen dosyalar

- `package.json` — `test:e2e` betiği eklendi
- `playwright.config.ts` — 5 tarayıcı profili, webServer config (port 3002)
- `tests/e2e/navigation.spec.ts` — 4 test senaryosu yazıldı
- `tests/e2e/accessibility.spec.ts` — 2 axe-core tarama testi yazıldı
- `.github/workflows/ci.yml` — lint → unit test → E2E → build pipeline

---

## Notlar

- Playwright yüklendi; Chromium, Firefox, WebKit, Pixel 5 (mobile-chrome), iPhone 12 (mobile-safari) profilleri aktif.
- Port çakışması nedeniyle `playwright.config.ts` `baseURL` 3000 → 3002 güncellendi.
- `pnpm test:e2e` koşturuldu: **4 geçen / 23 başarısız / 3 atlanan**.

---

## Retrospektif

**Neler iyi gitti?**
Playwright ve axe-core altyapısı sıfırdan kuruldu; 5 tarayıcı profili, CI pipeline ve port yönetimi sorunsuz çalışıyor. Testleri çalıştırmak için gereken tüm iskelet tamamlandı.

**Neler zorlandı / engelledi?**
Test selector'ları gerçek DOM yapısıyla uyuşmadı: `h2 >> text=Hakkımda` bulgu üretemedi çünkü hydration beklenmeden selector çalıştırıldı. Axe testi `--color-muted-text` (#667085) kontrast ihlali nedeniyle tüm tarayıcılarda başarısız oldu. Mobil navbar linkleri `hidden md:flex` nedeniyle görünmüyor — selector stratejisi masaüstü odaklıydı.

**Bir sonraki sprinte taşınan:**
- [ ] [P1] `navigation.spec.ts` selector'larını SectionHeader DOM yapısına ve hydration bekleme süresine göre düzelt
- [ ] [P1] `accessibility.spec.ts` — `--color-muted-text` kontrast değerini WCAG AA uyumlu yap ve axe geçmesini sağla
- [ ] [P1] Skeleton `<section />` elemanlarına `aria-label` ekle (axe ihlali)
- [ ] [P3] Mobile viewport testlerinde `waitForSelector` / `waitForTimeout` stratejisini otur
