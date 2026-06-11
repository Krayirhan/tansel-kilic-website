# Sprint-17 — E2E Test Düzeltmeleri & WCAG AA Uyumu

---

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 17 |
| **Başlık** | E2E Yeşil Rapor & A11y Uyumu |
| **Başlangıç** | 2026-06-12 |
| **Bitiş (hedef)** | 2026-06-15 |
| **Durum** | `Aktif` |
| **Odak alanı** | Test / Erişilebilirlik / Güvenlik |

---

## Hedef (Goal)

Sprint-16'dan taşınan E2E test başarısızlıklarını kapat: selector'ları düzelt, WCAG AA kontrast ihlalini gider, skeleton section'lara `aria-label` ekle. Axe taramasının ve navigasyon testlerinin tüm tarayıcılarda yeşil geçmesini sağla. HTTP güvenlik başlıklarını ekle.

---

## Görevler

- [ ] [P1] `--color-muted-text` değerini `#667085` → `#5c6370` (veya daha koyu) yap; WCAG AA kontrast ≥ 4.5:1 sağla (`globals.css`)
- [ ] [P1] Tüm section skeleton'larına (`mounted=false` durumu) `aria-label` ekle — axe "region" ihlalini kapat (8 section dosyası)
- [ ] [P1] `navigation.spec.ts` selector'larını düzelt: `h2 >> text=Hakkımda` yerine hydration'ı bekleyen ve gerçek DOM'a uyan selector kullan
- [ ] [P1] `navigation.spec.ts` — mobile viewport testine `waitForSelector` / `page.waitForTimeout` ekle; mobil drawer animasyon süresini beklet
- [ ] [P2] `vercel.json` veya `next.config.js` headers ile HTTP güvenlik başlıklarını ekle (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- [ ] [P3] `pnpm test:e2e` çalıştır — tüm tarayıcılarda yeşil (0 başarısız) olduğunu doğrula

---

## Etkilenen dosyalar (tahmini)

- `src/app/globals.css` — `--color-muted-text` token güncellemesi
- `src/components/sections/*.tsx` — skeleton `aria-label` eklentisi (8 dosya)
- `tests/e2e/navigation.spec.ts` — selector & wait stratejisi güncellemesi
- `vercel.json` veya `next.config.js` — HTTP güvenlik başlıkları

---

## Notlar

- Sprint-16 `pnpm test:e2e` sonucu: 4 geçen / 23 başarısız / 3 atlanan.
- Axe ihlali: `--color-muted-text: #667085` + beyaz arka plan = 4.48:1 (eşik: 4.5:1).
- Nav link testi başarısız çünkü masaüstü `nav` elementi mobil viewport'ta `hidden md:flex`.
- Yeşil rapor bu sprintin kapanma koşuludur — kısmi geçiş kabul edilmez.

---

## Retrospektif

> Bu bölüm sprint kapanışında doldurulur. Sprint açıkken boş bırak.

**Neler iyi gitti?**
[...]

**Neler zorlandı / engelledi?**
[...]

**Bir sonraki sprinte taşınan:**
- [ ] [varsa]
