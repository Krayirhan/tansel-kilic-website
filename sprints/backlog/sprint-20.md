# Sprint-20 — Veri Katmanı & DRY Temizliği

---

## Meta

| Alan | Değer |
|------|-------|
| **Sprint No** | 20 |
| **Başlık** | Veri Katmanı: data.ts Tutarsızlıkları & Kod Tekrarı |
| **Başlangıç** | Sprint-19 tamamlandığında |
| **Bitiş (hedef)** | Başlangıçtan +3 gün |
| **Durum** | `Backlog` |
| **Odak alanı** | Kod kalitesi / Veri bütünlüğü |

---

## Hedef (Goal)

`data.ts` içindeki statik tarih süresi string'lerini (`"1 year 1 month"` gibi) `currentDuration()` fonksiyonuyla hesaplanan değerlerle ya da daha güvenli bir veri modeliyle değiştir. `ResponsibleAI.tsx` ve `Expertise.tsx` içindeki mobil içerik gizleme problemlerini çöz. Kod tekrarını tespit et ve DRY pattern uygula.

---

## Görevler

- [ ] [P2] `data.ts` `Experience` tipine `end_date?: string` alanı ekle; geçmiş roller için süre `"1 year 1 month"` string yerine `start_date` + `end_date` + `currentDuration()` ile hesaplansın
- [ ] [P2] `ResponsibleAI.tsx` — `i > 0 ? "hidden md:block" : ""` mobile gizleme koşulunu kaldır; tüm açıklamalar mobilde görünür olsun
- [ ] [P2] `Expertise.tsx` — ikinci sütun açıklamasındaki `itemIndex > 0 ? "hidden md:block" : ""` mobile gizleme koşulunu kaldır
- [ ] [P3] `data.ts` `date_en` / `date_tr` alanlarındaki süre suffix'lerini (`"· 1 year 1 month"`) `displayDuration()` helper'ıyla otomatik oluştur
- [ ] [P3] `pnpm lint` + `pnpm build` + `pnpm test` — sıfır hata, tüm mevcut testler yeşil

---

## Etkilenen dosyalar (tahmini)

- `src/lib/data.ts` — `Experience` tip değişikliği + `end_date` alanları
- `src/components/sections/Experience.tsx` — tarih render mantığı güncelleme
- `src/components/sections/ResponsibleAI.tsx` — mobil gizleme kaldırma
- `src/components/sections/Expertise.tsx` — mobil gizleme kaldırma

---

## Notlar

- `data.ts` değişikliği veri girişi gerektirebilir: mevcut `date_en` string'lerindeki `end_date` değerlerinin çıkarılması için kullanıcı onayı alınmalı.
- Mobil içerik gizleme kaldırmak section uzunluğunu artırır — tasarım incelemesi gerekebilir.
- Bu sprint **kullanıcı veri onayı** gerektiriyor: `data.ts` değişikliği öncesi end_date'ler teyit edilmeli.

---

## Retrospektif

> Bu bölüm sprint kapanışında doldurulur. Sprint açıkken boş bırak.

**Neler iyi gitti?**
[...]

**Neler zorlandı / engelledi?**
[...]

**Bir sonraki sprinte taşınan:**
- [ ] [varsa]
