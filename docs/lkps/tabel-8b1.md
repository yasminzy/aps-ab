---
data:
  - tingkat: wilayah
    waktu: 2022-02-18T06:39:23.408Z
    nama: Nama Kegiatan A
    prestasi: Finalis
  - tingkat: nasional
    waktu: 2022-01-18T06:40:38.824Z
    nama: Nama Kegiatan B
    prestasi: Finalis
  - tingkat: internasional
    waktu: 2022-03-18T06:41:29.165Z
    nama: Nama Kegiatan C
    prestasi: Finalis
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8b1.vue'

const { frontmatter } = useData()
</script>

# Prestasi Akademik

➡️ Kemahasiswaan

Tuliskan prestasi akademik yang dicapai mahasiswa Program Studi dalam 5 tahun terakhir. Data dilengkapi dengan keterangan kegiatan yang diikuti (nama kegiatan, tahun, tingkat, dan prestasi yang dicapai).

## Tabel 8.b.1

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Beri tanda centang V pada kolom yang sesuai.

:::
