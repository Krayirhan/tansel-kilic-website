# Sprint-15 — Hydration Guard Düzeltmesi & Test Altyapısının Kurulması

---

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 15 |
| **Başlık** | Hydration Guard Düzeltmesi & Test Altyapısı |
| **Başlangıç** | 2026-06-11 |
| **Bitiş (hedef)** | 2026-06-13 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Karma (Güvenlik / Kod kalitesi) |

---

## Hedef (Goal)

Kritik hydration guard eksikliğini gidermek ve projenin birim test (unit test) altyapısını kurarak temel iş mantığını korumaya almak.

---

## Görevler

- [x] [P1] `ImpactMetrics.tsx` bileşenine Mounted Pattern (hydration guard) ve iskelet yapısını ekleyerek hydration mismatch riskini gidermek.
- [x] [P2] Vitest ve React Testing Library kütüphanelerini kurmak, `package.json` içerisine test komutunu eklemek.
- [x] [P3] `src/lib/data.ts` içerisindeki `currentDuration` fonksiyonu ve `LangContext.tsx` dil bağlamı için birim testleri (unit tests) yazmak.
- [x] [P3] Testlerin çalışabilirliğini ve lokal derleme (`pnpm build`) bütünlüğünü doğrulamak.

---

## Etkilenen dosyalar (tahmini)

- `src/components/sections/ImpactMetrics.tsx`
- `package.json`
- `pnpm-lock.yaml`
- `src/lib/data.test.ts`
- `src/context/LangContext.test.tsx`
- `vitest.config.ts`
- `vitest.setup.ts`

---

## Notlar

Test kütüphaneleri kurulurken pnpm paket yöneticisi kullanılmış ve Next.js 16/React 19 bağımlılık ağacı ile uyumluluk korunmuştur.

---

## Retrospektif

**Neler iyi gitti?**
Kritik hydration guard eksikliği başarıyla giderildi ve Vitest ile birim test altyapısı kuruldu. Yazılan 11 test senaryosu da başarıyla geçerek iş mantığını korumaya aldı.

**Neler zorlandı / engelledi?**
JSDOM ortamında `document` nesnesinin yanlış stub edilmesi ilk test koşumlarında hata verdi; mock yapısı düzeltilerek sorun çözüldü.

**Bir sonraki sprinte taşınan:**
- [ ] Yok
