# Sprint-06 — SEO Derinleştirme

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 06 |
| **Başlık** | SEO Derinleştirme |
| **Başlangıç** | 2026-06-09 |
| **Bitiş (hedef)** | 2026-06-10 |
| **Durum** | `Tamamlandı` |
| **Odak alanı** | SEO |

---

## Hedef (Goal)

Metadata ve JSON-LD'yi sitenin gerçek dil/kitle profiline hizala. Sprint bittiğinde OG locale doğru, JSON-LD sameAs var, description TR primary.

---

## Görevler

- [x] [P2] `layout.tsx` — OG `locale: "en_US"` → `"tr_TR"`, `locale_alternate: ["en_US"]` ekle
- [x] [P2] `layout.tsx` — metadata `description` TR'ye çevir; OG + Twitter description da güncelle
- [x] [P2] `layout.tsx` — JSON-LD `sameAs` ekle: `["https://www.linkedin.com/in/tanselkilic/"]`
- [x] [P3] AGENTS.md known issues güncellendi — `lang="tr"` accepted, çözülen sorunlar arşivlendi

---

## Etkilenen dosyalar

- `src/app/layout.tsx`
- `AGENTS.md`

---

## Notlar

`lang="tr"` SSR'da doğru davranış: sitenin default locale'i TR, ilk render "tr" dönmesi beklenen sonuç. useEffect ile EN'ye geçince güncelleniyor. Bu bir bug değil, mimari sınır — static export'ta çözümü ayrı URL yapısı (/tr, /en) gerektirir.

---

## Retrospektif

> Sprint tamamlandığında doldurulacak.

**Neler iyi gitti?**
4 görev tek oturumda tamamlandı. JSON-LD doğrulaması browser'da anlık kontrol edildi — `sameAs`, `og:locale`, `og:locale:alternate` hepsi doğru. AGENTS.md artık mevcut durumu yansıtıyor.

**Neler zorlandı / engelledi?**
Engel yok. `lang="tr"` SSR sınırı önceden net analiz edildiği için zaman kaybı olmadı.

**Bir sonraki sprinte taşınan:**
- Hero fotoğrafı + OG image yenilenmesi (fotoğraf gelince)
