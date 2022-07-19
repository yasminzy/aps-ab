---
data:
  - jenis: 2
    pendidikan:
      s3: 0
      s2: 0
      s1: 2
      d4: 0
      d3: 0
      d2: 0
      d1: 0
      sma: 0
    unit: Unit kerja B
  - jenis: 1
    pendidikan:
      s1: 1
      s3: 0
      s2: 0
      d4: 0
      d3: 0
      d2: 0
      d1: 0
      sma: 0
    unit: Unit kerja A
  - jenis: 4
    pendidikan:
      s3: 0
      s2: 0
      s1: 5
      d4: 0
      d3: 0
      d2: 0
      d1: 0
      sma: 0
    unit: Unit kerja D
  - jenis: 3
    pendidikan:
      s3: 0
      s2: 0
      s1: 4
      d4: 0
      d3: 0
      d2: 0
      d1: 0
      sma: 0
    unit: Unit kerja C
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3c.vue'

const { frontmatter } = useData()
</script>

# Data Tenaga Kependidikan

Tuliskan data Tenaga Kependidikan Perguruan Tinggi yang melayani mahasiswa Program Studi yang diakreditasi.

## Tabel 3.c

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

\* hanya memiliki pendidikan formal dalam bidang perpustakaan.

:::
