# Sprint Rules

Bu dosya sprint sisteminin kurallarını tanımlar. Her sprint bu kurallara uymak zorundadır.

---

## Klasör yapısı

```
sprints/
  RULES.md           # bu dosya — değiştirme
  TEMPLATE.md        # yeni sprint şablonu
  active/
    sprint-XX.md     # o an aktif sprint (tek dosya olmalı)
  archive/
    sprint-01.md
    sprint-02.md
    ...
```

**Aynı anda yalnızca bir aktif sprint olabilir.** Sprint kapanmadan yeni sprint açılmaz.

---

## Sprint kuralları

### Numaralandırma
- Sprint numaraları `sprint-01`, `sprint-02` şeklinde iki haneli, sıfır dolgulu olur.
- Numara atlanamaz, geri alınamaz.

### Açılış
1. `sprints/TEMPLATE.md` kopyalanır → `sprints/active/sprint-XX.md`
2. Tüm zorunlu alanlar doldurulur (başlık, hedef, tarihler, görevler).
3. Görev sayısı **3–7 arası** olmalıdır. Daha fazlası sprint'i böl.

### Görev durumları
| Sembol | Anlam |
|--------|-------|
| `[ ]`  | Yapılmadı |
| `[~]`  | Devam ediyor |
| `[x]`  | Tamamlandı |
| `[-]`  | İptal / kapsam dışı |

### Kapanış
1. Tüm görevler `[x]` veya `[-]` olmalıdır.
2. **Retrospektif** bölümü doldurulur (min. 2 cümle).
3. Dosya `sprints/archive/sprint-XX.md` konumuna taşınır.
4. `active/` klasörü boş kalır.

### Kapsam değişikliği
- Sprint içinde yeni görev eklenebilir ama **hedef (Goal) değiştirilemez**.
- Eklenen her görev `[+]` etiketiyle işaretlenir, sonra normal akışa girer.
- Scope creep varsa not olarak Retrospektif'e yazılır.

---

## Claude'un sorumlulukları

- Sprint dosyası yoksa veya `active/` boşsa → kullanıcıya sor, iş başlatma.
- Görev tamamlandığında → `[ ]` veya `[~]`'yi `[x]` yap, dosyayı kaydet.
- Sprint kapandığında → archive'a taşı, yeni sprint için hazır olduğunu bildir.
- Sprint durumunu özetlemek için `sprints/active/sprint-XX.md` her zaman ilk bakılacak yerdir.
