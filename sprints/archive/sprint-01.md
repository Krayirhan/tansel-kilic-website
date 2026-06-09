# Sprint-01 — SEO Temeli

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 01 |
| **Başlık** | SEO Temeli |
| **Başlangıç** | 2026-06-09 |
| **Bitiş (hedef)** | 2026-06-12 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | SEO |

---

## Hedef (Goal)

Sitenin arama motoru ve sosyal paylaşım görünürlüğünü sıfırdan doğru temele oturtmak. Sprint bittiğinde `lang` attr doğru, JSON-LD var, sitemap + robots yayında, sosyal paylaşımda OG image görünüyor olmalı.

---

## Görevler

- [x] [P1] `layout.tsx` — `lang="en"` hardcode'u kaldır, locale'e göre dinamik yap (`tr` / `en`)
- [x] [P1] `src/app/sitemap.ts` oluştur — Next.js sitemap convention ile tek URL
- [x] [P1] `src/app/robots.ts` oluştur — tüm botlara izin, sitemap referansı
- [x] [P2] `layout.tsx` — JSON-LD `<script>` ekle (`Person` + `ProfilePage` tipi, yalnızca doğrulanmış alanlar)
- [x] [P2] OG image ekle — `public/og-image.png` + metadata URL referansı

---

## Etkilenen dosyalar (tahmini)

- `src/app/layout.tsx`
- `src/app/sitemap.ts` (yeni)
- `src/app/robots.ts` (yeni)
- `src/app/opengraph-image.png` (yeni)

---

## Notlar

- `lang` attr için: `LangContext` client-side, `layout.tsx` server component — doğrudan context okunamaz. Çözüm: cookie veya `searchParam` okuma ya da JS ile `document.documentElement.lang` set etme. En temiz yol: `LangContext`'te locale değişince `document.documentElement.lang` güncelle.
- JSON-LD'ye `alumniOf`, `sameAs`, `knowsAbout` ekleme — kullanıcı onayı olmadan.
- OG image yoksa sosyal paylaşımda resim çıkmaz — basit bir statik PNG yeterli.

---

## Retrospektif

> Sprint tamamlandığında doldurulacak.

**Neler iyi gitti?**
Tüm 5 görev tek oturumda tamamlandı. `sitemap.ts` + `robots.ts` Next.js convention ile temiz çıktı verdi. JSON-LD yapısı sade ve doğrulanmış verilerle sınırlı tutuldu.

**Neler zorlandı / engelledi?**
`output: 'export'` (static export) modu iki engel çıkardı: dinamik OG image (`ImageResponse`) çalışmadı → statik PNG'ye geçildi. `sitemap.ts` ve `robots.ts` `force-static` direktifi gerektirdi.

**Bir sonraki sprinte taşınan:**
- OG image görsel kalitesi — .NET ile üretilen PNG minimal, tasarımcı eli değebilir
