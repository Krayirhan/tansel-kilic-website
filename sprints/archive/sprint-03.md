# Sprint-03 — Kritik Düzeltmeler

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 03 |
| **Başlık** | Kritik Düzeltmeler |
| **Başlangıç** | 2026-06-08 |
| **Bitiş (hedef)** | 2026-06-08 |
| **Durum** | `Tamamlandı` |

---

## Hedef (Goal)

Deploy engelleyici ve SEO kıran sorunları temizle: mobile responsive, semantic HTML, meta tags. Sprint sonunda site mobilde kullanılabilir, h1 tekil, OG tags eklenmiş olmalı.

---

## Görevler

- [x] Tüm section'lara mobile responsive CSS ekle (breakpoint: 768px)
- [x] Hero'daki 2 ayrı `<h1>` → tek `<h1>` yap (semantic fix)
- [x] Navbar'a mobile hamburger menü ekle
- [x] OG meta tags ekle (og:title, og:description, og:image placeholder)
- [x] `layout.tsx`'e Twitter card meta tags ekle

---

## Notlar

- globals.css'e 768px ve 480px breakpoint'leri eklendi
- Responsive utility classları: `.desktop-only`, `.mobile-only`, `.section-grid-2`, `.expertise-grid`, `.hero-inner`, `.section-pad`, `.hero-h1`, `.section-h2`
- Navbar hamburger menüsü: useState(menuOpen) ile animasyonlu X geçişi
- Hero: 2 ayrı h1 → tek h1 + 2 span (semantic fix)
- OG + Twitter card meta: layout.tsx metadata objesine eklendi

---

## Retrospektif

Tüm kritik sorunlar giderildi. Responsive alt yapı sağlam, semantic HTML düzeltildi, meta tags eklendi. Sonraki sprint için görsel kalite ve animasyon iyileştirmeleri hazır.
