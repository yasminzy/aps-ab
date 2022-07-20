---
data:
  - namaLab: Nama Lab A
    jumlahLab: 1
    alat:
      - kepemilikan: sendiri
        kondisi: terawat
        namaAlat: Nama Alat A1
        jumlahAlat:
          min: 0
          yangDimiliki: 1
        waktu: 5
        logbook: true
      - kepemilikan: sewa
        kondisi: terawat
        namaAlat: Nama Alat A2
        jumlahAlat:
          min: 1
          yangDimiliki: 2
        waktu: 5
        logbook: true
  - namaLab: Nama Lab B
    jumlahLab: 1
    alat:
      - kepemilikan: sendiri
        kondisi: tidak-terawat
        namaAlat: Nama Alat B1
        jumlahAlat:
          min: 2
          yangDimiliki: 1
        waktu: 0
      - kepemilikan: sewa
        kondisi: terawat
        jumlahAlat:
          min: 2
          yangDimiliki: 0
        namaAlat: Nama Alat B2
        logbook: false
        waktu: 5
  - namaLab: Nama Lab C
    jumlahLab: 1
    alat:
      - kepemilikan: sendiri
        kondisi: terawat
        namaAlat: Nama Alat C1
        jumlahAlat:
          min: 1
          yangDimiliki: 2
        waktu: 5
      - kepemilikan: sewa
        kondisi: tidak-terawat
        jumlahAlat:
          min: 1
          yangDimiliki: 2
        namaAlat: Nama Alat C2
        logbook: false
        waktu: 5
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-4b.vue'

const { frontmatter } = useData()
</script>

# Prasarana dan Peralatan Utama Laboratorium di UPPS yang digunakan oleh Program Studi yang Diakreditasi

Tuliskan prasarana dan peralatan utama yang digunakan di laboratorium, yang dipergunakan dalam proses pembelajaran di UPPS yang digunakan oleh Program Studi yang diakreditasi (lampirkan daftar alat-alat utama dari masing-masing laboratorium).

## Tabel 4.b

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

Data 1) dan 2) ini diisi oleh pengusul dari program studi pada program Diploma Satu/Diploma Dua/Diploma Tiga/Sarjana Terapan/Magister Terapan/Doktor Terapan.

:::
