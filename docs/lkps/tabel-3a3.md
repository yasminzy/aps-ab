---
data:
  - nama: Zulkifli, S.T., M.T.
    dtps: true
    ewmp:
      pendidikan: 46.6
      pendidikanDiPsLainDalamPt: 0
      pendidikanDiPsLainLuarPt: 0
      penelitian: 0
      pkm: 4
      tugasTambahan: 0
  - nama: Ida Bagus D, S.T., M.Si.
    dtps: true
    ewmp:
      pendidikan: 40.4
      pendidikanDiPsLainDalamPt: 0
      pendidikanDiPsLainLuarPt: 0
      penelitian: 0
      pkm: 0
      tugasTambahan: 0
  - nama: Syahruddin, S.Pd., M.T.
    dtps: true
    ewmp:
      pendidikan: 19
      pendidikanDiPsLainDalamPt: 0
      pendidikanDiPsLainLuarPt: 0
      penelitian: 6
      pkm: 4
      tugasTambahan: 0
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3a3.vue'

const { frontmatter } = useData()
</script>

# Ekuivalen Waktu Mengajar Penuh (EWMP) Dosen Tetap Perguruan Tinggi

Tuliskan data Ekuivalen Waktu Mengajar Penuh (EWMP) dari Dosen Tetap Perguruan Tinggi yang ditugaskan di Program Studi yang diakreditasi (DT) pada saat TS.

## Tabel 3.a.3

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Diisi dengan tanda centang V untuk Dosen Tetap Perguruan Tinggi yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti Program Studi yang diakreditasi.

:::
