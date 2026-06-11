# Sprint Kuralları — Tansel KILIÇ Portföy

Bu dosya `sprints/_rules.md` — CLAUDE.md'nin otomatik okuduğu yol. Değiştirme.

---

## Genel Prensipler

- **Tasarım dili kesinlikle korunacak:** Mevcut "white minimalist executive theme" (beyaz minimalist yönetici teması), tasarım tokenları, yazı tipleri (IBM Plex Sans, Newsreader) ve yerleşim yapısı hiçbir koşulda bozulamaz, keyfi değişiklikler yapılamaz.

## Klasör yapısı

```
sprints/
  _rules.md          # bu dosya — Claude'un otomatik okuduğu kural dosyası
  RULES.md           # insanlar için alias (bu dosyaya işaret eder)
  TEMPLATE.md        # yeni sprint şablonu
  active/
    sprint-XX.md     # aktif sprint (tek dosya olmalı)
  archive/
    sprint-01.md
    ...
```

**Aynı anda yalnızca bir aktif sprint olabilir.** `active/` klasöründe birden fazla dosya görürsen hemen kullanıcıya sor.

---

## Görev öncelik sistemi

Sprint görevleri aşağıdaki 4 kategoriden birini taşır. Her sprint en az bir **P1** veya **P2** görevi içermelidir.

| Etiket | Kategori | Ne zaman kullanılır |
|--------|----------|---------------------|
| `[P1]` | Kritik düzeltme | Yanlış davranış, SEO/a11y hatası, kırık UI |
| `[P2]` | Eksik özellik | Tamamlanmamış bölüm, içerik boşluğu |
| `[P3]` | İyileştirme | Kod kalitesi, DRY, performans |
| `[P4]` | Gelecek/araştırma | Karar verilmemiş, onay bekleyen |

Proje puanlama sonucundan çıkan öncelik sırası (güncelle sprint bittikçe):

| Alan | Puan | En acil |
|------|------|---------|
| SEO | 3/10 | `lang` attr, JSON-LD, sitemap, OG image |
| Performans | 5/10 | RSC dönüşümü, `willChange` temizliği |
| İçerik | 5/10 | Impact Metrics, Responsible AI bölümleri |
| Kod kalitesi | 6/10 | LinkedInIcon duplikasyonu, LangContext default tutarsızlığı |
| Erişilebilirlik | 7/10 | `prefers-reduced-motion`, MapPin `href="#"` |

---

## Sprint kuralları

### Numaralandırma
- Sprint numaraları `sprint-01`, `sprint-02` şeklinde iki haneli, sıfır dolgulu olur.
- Numara atlanamaz, geri alınamaz.
- Arşiv şu an sprint-14'da. Bir sonraki aktif sprint: **sprint-15**.

### Açılış
1. `sprints/TEMPLATE.md` kopyalanır → `sprints/active/sprint-XX.md`
2. Tüm zorunlu alanlar doldurulur: başlık, hedef, tarihler, görevler (P etiketi dahil).
3. Görev sayısı **3–7 arası** olmalıdır. Fazlası için sprint'i böl.
4. Her görev P etiketi ve net, eyleme dönük bir ifade taşımalıdır.

### Görev durumu sembolleri
| Sembol | Anlam |
|--------|-------|
| `[ ]`  | Yapılmadı |
| `[~]`  | Devam ediyor |
| `[x]`  | Tamamlandı |
| `[-]`  | İptal / kapsam dışı |

### Kapanış
1. Tüm görevler `[x]` veya `[-]` olmalıdır.
2. **Retrospektif** bölümü doldurulur (min. 2 cümle).
3. Durum `Tamamlandı` olarak güncellenir.
4. Dosya `sprints/archive/sprint-XX.md` konumuna taşınır.
5. `active/` klasörü boş kalır.

### Kapsam değişikliği
- Sprint içinde yeni görev **eklenebilir** ama **hedef (Goal) değiştirilemez**.
- Eklenen her görev `[+]` etiketiyle işaretlenir, sonra normal akışa girer.
- Scope creep varsa Retrospektif'e not düşülür.

---

## Claude'un sorumlulukları

- `active/` boşsa veya dosya yoksa → sprint başlatmadan önce kullanıcıya sor.
- Görev tamamlandığında → `[ ]` veya `[~]`'yi `[x]` yap, dosyayı kaydet.
- Yeni görev başlarken → `[ ]`'yi `[~]` yap.
- Sprint kapandığında → archive'a taşı, Durum'u güncelle, sonraki sprint için hazır olduğunu bildir.
- Her yanıtta sprint durumunu özetleme — sadece sorulursa özetle.
- `active/sprint-XX.md` her zaman ilk bakılacak yerdir; yoksa kullanıcıya sor.
