---
data:
  - tingkat: wilayah
    waktu: 2023-02-18T06:42:37.831Z
    nama: Nama Kegiatan A
    prestasi: Juara I
  - tingkat: nasional
    waktu: 2022-01-18T06:42:59.285Z
    nama: Nama Kegiatan B
    prestasi: Juara II
  - tingkat: internasional
    waktu: 2024-01-18T06:42:59.285Z
    nama: Nama Kegiatan C
    prestasi: Juara III
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8b2.vue'

const { frontmatter } = useData()
</script>

# Prestasi Non-Akademik Mahasiswa

Tuliskan prestasi non-akademik yang dicapai mahasiswa Program Studi dalam 5 tahun terakhir. Data dilengkapi dengan keterangan kegiatan yang diikuti (nama kegiatan, tahun, tingkat, dan prestasi yang dicapai).

## Tabel 8.b.2

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Beri tanda centang V pada kolom yang sesuai.

:::
