---
data:
  - jenis: 1
    jumlah:
      ts-2: 0
      ts-1: 0
      ts: 4
  - jenis: 2
    jumlah:
      ts-2: 10
      ts-1: 17
      ts: 11
  - jenis: 3
    jumlah:
      ts-2: 1
      ts-1: 0
      ts: 0
  - jenis: 4
    jumlah:
      ts-2: 0
      ts-1: 1
      ts: 1
  - jenis: 5
    jumlah:
      ts-2: 0
      ts-1: 0
      ts: 0
  - jenis: 6
    jumlah:
      ts-2: 2
      ts-1: 6
      ts: 1
  - jenis: 7
    jumlah:
      ts-2: 0
      ts-1: 1
      ts: 1
  - jenis: 8
    jumlah:
      ts-2: 0
      ts-1: 0
      ts: 0
  - jenis: 9
    jumlah:
      ts-2: 0
      ts-1: 0
      ts: 0
  - jenis: 10
    jumlah:
      ts-2: 0
      ts-1: 0
      ts: 0
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3b5.vue'

const { frontmatter } = useData()
</script>

# Pagelaran/ Pameran/ Presentasi/ Publikasi Ilmiah DTPS

➡️ P3M, SINTA, Google Scholar

Tuliskan jumlah pagelaran/pameran/presentasi/publikasi ilmiah dengan tema yang relevan dengan bidang Program Studi, yang dihasilkan oleh DTPS dalam 3 tahun terakhir.

## Tabel 3.b.5

<Tabel :data="frontmatter.data" />
