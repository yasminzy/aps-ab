---
data:
  - nama: Drs. Syaeful Akbar, M.T.
    mhsBimbingan:
      ts-2: 14
      ts-1: 7
      ts: 8
    mhsBimbinganDiPsLainDiPt:
      ts-2: 0
      ts-1: 0
      ts: 0
    sk:
      ts-2: No SK 1
      ts-1: No SK 2
      ts: No SK 3
  - nama: Syahruddin, S.Pd., M.T
    mhsBimbingan:
      ts-2: 10
      ts-1: 9
      ts: 8
    mhsBimbinganDiPsLainDiPt:
      ts-2: 0
      ts-1: 0
      ts: 0
    sk:
      ts-2: No SK 1
      ts-1: No SK 2
      ts: No SK 3
  - nama: Ida Bagus Dharmawan, S.T., M.Si
    mhsBimbingan:
      ts-2: 9
      ts-1: 9
      ts: 8
    mhsBimbinganDiPsLainDiPt:
      ts-2: 0
      ts-1: 0
      ts: 0
    sk:
      ts-2: No SK 1
      ts-1: No SK 2
      ts: No SK 3
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3a2.vue'

const { frontmatter } = useData()
</script>

# Dosen Pembimbing Utama Tugas Akhir

Tuliskan DTPS yang menjadi pembimbing utama pada kegiatan tugas akhir mahasiswa (Laporan Akhir/Skripsi/Tesis/Disertasi) <sup>1)</sup> dalam 3 tahun terakhir

## Tabel 3.a.2

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Penugasan sebagai pembimbing tugas akhir/skripsi mahasiswa dibuktikan dengan surat penugasan yang diterbitkan oleh UPPS.
1. Diisi dengan nama dosen yang ditugaskan menjadi pembimbing utama.
1. Diisi dengan data jumlah mahasiswa yang dibimbing pada Program Studi yang Diakreditasi.
1. Diisi dengan data jumlah mahasiswa yang dibimbing pada Program Studi lain di Perguruan Tinggi.
1. Rata-rata jumlah bimbingan di semua program/semester (kolom 11) = ((kolom 6) + (kolom 10)) / 2.

:::
