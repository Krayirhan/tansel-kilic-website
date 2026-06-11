# Sprint-19 — Birim Test Kapsamı Genişletme

---

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 19 |
| **Başlık** | Birim Test Kapsamı: Hero, Experience, Navbar, config |
| **Başlangıç** | Sprint-18 tamamlandığında |
| **Bitiş (hedef)** | Başlangıçtan +4 gün |
| **Durum** | `Backlog` |
| **Odak alanı** | Test altyapısı / Kod kalitesi |

---

## Hedef (Goal)

Mevcut ~%15 birim test kapsamını kritik bileşenleri kapsayacak şekilde ~%55'e yükselt. `Hero.tsx`, `Experience.tsx`, `Navbar.tsx` ve `config.ts` için Vitest + React Testing Library testleri yaz. Sprint sonu `pnpm test` ile tüm testlerin yeşil geçmesi zorunludur.

---

## Görevler

- [ ] [P2] `src/test/config.test.ts` — `EMAIL` deobfuscation testi: tarayıcı ortamında `atob()` doğru decode etmeli; SSR ortamında `[at]` döndürmeli
- [ ] [P2] `src/test/Hero.test.tsx` — mounted=false skeleton render testi + mounted=true'da h1 içeriği doğrulama (TR/EN)
- [ ] [P2] `src/test/Experience.test.tsx` — `currentDuration()` fonksiyonunu kapsamlı test et (0 ay, 1 yıl, 2 yıl 3 ay; TR/EN lokalizasyonu)
- [ ] [P2] `src/test/Navbar.test.tsx` — lang switcher buton render, `setLocale` çağrısı, scroll state değişimi
- [ ] [P3] `src/test/Reveal.test.tsx` — `useReducedMotion` mock ile animasyon duration=0 testi
- [ ] [P3] `pnpm test` çalıştır — sıfır başarısız, kapsam raporunu kaydet

---

## Etkilenen dosyalar (tahmini)

- `src/test/config.test.ts` — yeni dosya
- `src/test/Hero.test.tsx` — yeni dosya
- `src/test/Experience.test.tsx` — yeni dosya
- `src/test/Navbar.test.tsx` — yeni dosya
- `src/test/Reveal.test.tsx` — yeni dosya
- `vitest.config.ts` — coverage reporter eklenebilir

---

## Notlar

- `config.ts` `EMAIL` testi için `window` mock'u gerekebilir — jsdom'da `window` mevcut ama `typeof window !== "undefined"` false geliyor; global mock ile aşılmalı.
- `Navbar.tsx` scroll testi için `window.scrollY` mock'u gerekiyor.
- `currentDuration()` testi: `Date` nesnesini `vi.setSystemTime()` ile sabitle — dinamik tarih bağımlılığını ortadan kaldır.
- `useReducedMotion` framer-motion hook'u — `vi.mock("framer-motion", ...)` ile mock'lanmalı.

---

## Retrospektif

> Bu bölüm sprint kapanışında doldurulur. Sprint açıkken boş bırak.

**Neler iyi gitti?**
[...]

**Neler zorlandı / engelledi?**
[...]

**Bir sonraki sprinte taşınan:**
- [ ] [varsa]
