# Sprint-12 — HTTP Security Configuration

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 12 |
| **Başlık** | HTTP Security Configuration |
| **Başlangıç** | 2026-06-11 |
| **Bitiş (hedef)** | 2026-06-12 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | Güvenlik |

---

## Hedef (Goal)

Barındırma platformu (Vercel, Netlify, Cloudflare) yapılandırma dosyalarını ekleyerek HTTP güvenlik başlıklarını (CSP, X-Frame-Options, X-Content-Type-Options) tarayıcı düzeyinde aktif etmek ve clickjacking/XSS risklerini önlemek.

---

## Görevler

- [x] [P1] Proje kök dizinine Vercel dağıtımı için `vercel.json` güvenlik başlıkları konfigürasyonunu ekle.
- [x] [P2] Tıklama Kaçırma (Clickjacking) önleyici `X-Frame-Options: DENY` ve CSP `frame-ancestors 'none'` kurallarını tanımla.
- [x] [P2] `Content-Security-Policy` (CSP) direktiflerini Next.js static asset ve inline style kurallarına uygun olarak yapılandır.
- [x] [P3] Cloudflare Pages veya Netlify için alternatif başlık yapılandırma dosyası (`_headers`) ekle.

---

## Etkilenen dosyalar

- `vercel.json`
- `public/_headers`

---

## Notlar

Güvenlik başlıkları Vercel ve Cloudflare/Netlify yapılandırma standartlarına tam uyumlu olarak eklendi.

---

## Retrospektif

**Neler iyi gitti?**
HTTP katmanındaki tüm clickjacking ve mime-sniffing korumaları deploy öncesi dosyalarla garanti altına alındı.

**Neler zorlandı / engelledi?**
Herhangi bir engelle karşılaşılmadı.
