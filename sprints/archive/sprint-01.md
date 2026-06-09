# Sprint-01 — Next.js Proje Kurulumu

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 01 |
| **Başlık** | Next.js Proje Kurulumu |
| **Başlangıç** | 2026-06-08 |
| **Bitiş (hedef)** | 2026-06-09 |
| **Durum** | `Tamamlandı` |

---

## Hedef (Goal)

Mevcut `index.html` prototipini Next.js + Tailwind CSS altyapısına taşımak. Sprint sonunda `npm run dev` çalışır, tüm bölümler TR/EN toggle ile görünür durumda olmalı.

---

## Görevler

- [x] Next.js + TypeScript + Tailwind projesi oluştur (`create-next-app`)
- [x] Dil sistemi kurulumu — client-side LangContext (TR / EN)
- [x] `src/lib/data.ts` — kariyer ve içerik verisi
- [x] `src/messages/en.json` + `tr.json` — tüm metinler
- [x] Section component'leri: Hero, About, Experience, Expertise, Contact
- [x] Navbar (dil toggle + anchor linkler)
- [x] `index.html` dosyasını kaldır, sitenin Next.js'ten serve edildiğini doğrula

---

## Notlar

- next-intl middleware `output: 'export'` ile uyumsuz olduğu için client-side LangContext tercih edildi
- Cloudflare Pages için `output: 'export'` + `trailingSlash: true` next.config.ts'e eklendi
- Framer Motion animasyonları Sprint-02'ye bırakıldı

---

## Retrospektif

**Neler iyi gitti?**
Next.js + Tailwind + client-side i18n yapısı temiz kuruldu. Tüm içerik `data.ts` ve `messages/` üzerinden yönetiliyor, component'ler sıfır hardcode içeriyor.

**Neler zorlandı / engelledi?**
next-intl middleware static export ile çakıştı — client-side context ile çözüldü.

**Bir sonraki sprinte taşınan:**
- Framer Motion animasyonları
- GitHub repo kurulumu + Cloudflare Pages bağlantısı
- Mobil menü (hamburger)
