---
data:
  - tahun: ts-3
    dayaTampung: 64
    calonMhs:
      pendaftar: 437
      lulus: 65
    mhsBaru:
      reguler: 64
      transfer: 0
    mhsAktif:
      reguler: 251
      transfer: 0
  - tahun: ts
    dayaTampung: 72
    calonMhs:
      pendaftar: 360
      lulus: 76
    mhsBaru:
      reguler: 72
      transfer: 0
    mhsAktif:
      reguler: 190
      transfer: 0
  - tahun: ts-2
    dayaTampung: 64
    calonMhs:
      pendaftar: 339
      lulus: 84
    mhsBaru:
      reguler: 64
      transfer: 0
    mhsAktif:
      reguler: 178
      transfer: 0
  - tahun: ts-1
    dayaTampung: 65
    calonMhs:
      pendaftar: 531
      lulus: 108
    mhsBaru:
      reguler: 65
      transfer: 0
    mhsAktif:
      reguler: 184
      transfer: 0
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-2a2.vue'

const { frontmatter } = useData()
</script>

# Seleksi Mahasiswa untuk Program Studi Diploma Tiga

Tuliskan data daya tampung, jumlah calon mahasiswa (pendaftar dan peserta yang lulus seleksi), jumlah mahasiswa baru (reguler dan transfer) dan jumlah mahasiswa aktif (reguler dan transfer) dalam 5 tahun terakhir di Program Studi yang diakreditasi.

## Tabel 2.a.2

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

TS = Tahun akademik penuh terakhir saat pengajuan usulan akreditasi.

:::
