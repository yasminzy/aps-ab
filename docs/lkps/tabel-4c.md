---
data:
  - kepemilikan: sewa
    kondisi: terawat
    nama: Nama prasarana B
    fungsi: Fungsi B
    unit: 2
    luas: "200"
  - kepemilikan: sendiri
    kondisi: terawat
    nama: Nama prasarana A
    fungsi: Fungsi A
    unit: 1
    luas: "100"
  - kepemilikan: sewa
    kondisi: tidak-terawat
    nama: Nama prasarana C
    fungsi: Fungsi C
    unit: 3
    luas: "300"
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-4c.vue'

const { frontmatter } = useData()
</script>

# Data Prasarana di UPPS

Tuliskan data prasarana tanah dan gedung (rektorat, fakultas, lembaga, biro, pusat (pengembangan bahan ajar cetak dan non cetak, distribusi bahan ajar, pengujian, komputer, penjaminan mutu, pengembangan SDM, pengembangan aktivitas instruksional, penelitian dan pengabdian kepada masyarakat), perpustakaan, dll.)

## Tabel 4.c

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

\* Beri tanda V pada kolom yang sesuai.

:::
