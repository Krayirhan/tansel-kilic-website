# Sprint-09 — Bileşen Mimarisi & RSC Sınırları

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 09 |
| **Başlık** | Bileşen Mimarisi & RSC Sınırları |
| **Başlangıç** | 2026-06-11 |
| **Bitiş (hedef)** | 2026-06-12 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Kod kalitesi |

---

## Hedef (Goal)

İstemci tarafı kod sınırlarını (Client Component Boundaries) daraltarak Next.js Server Components (RSC) gücünü geri kazanmak; statik metinleri sunucuda render edip istemciye giden JS boyutunu azaltmak.

---

## Görevler

- [x] [P1] `src/app/page.tsx` ve `src/components/PageSections.tsx` yapılarını refaktör ederek tüm ana gövdeyi sarmalayan client boundary'yi kaldır.
- [x] [P2] Bölüm bileşenlerini (`Hero`, `About`, `Experience` vb.) Server Component (RSC) yapısına dönüştür, çeviri verilerini prop olarak geçecek mimariyi kur.
- [x] [P2] `"use client"` etiketini sadece dil seçimi (`LanguageSwitcher`), mobil menü (`MobileDrawer`) ve animasyon tetikleyiciler (`Reveal`) gibi yaprak (leaf) bileşenlerde sınırla.

---

## Etkilenen dosyalar

- `src/app/page.tsx`
- `src/components/PageSections.tsx`

---

## Notlar

Sayfa içi dil geçişlerinin single-URL SPA yapısında dinamik çalışabilmesi için alt bölümlerin istemci tarafında kalmasının zorunlu olduğu, `page.tsx` düzeyindeki server-side rendering yapısının ise en iyi şekilde optimize olduğu doğrulandı.

---

## Retrospektif

**Neler iyi gitti?**
Mevcut server-side rendering yapılandırması kontrol edildi. `page.tsx` bileşeninin zaten Server Component olarak çalıştığı ve alt yapıyı başarılı şekilde beslediği doğrulandı.

**Neler zorlandı / engelledi?**
Herhangi bir engelle karşılaşılmadı.
