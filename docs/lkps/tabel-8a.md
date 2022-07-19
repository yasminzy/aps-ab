---
data:
  - tahun: ts-1
    lulusan: 56
    ipk:
      min: 2.55
      avg: 3.11
      max: 3.67
  - tahun: ts-2
    lulusan: 55
    ipk:
      min: 2.56
      avg: 3.08
      max: 3.6
  - tahun: ts
    lulusan: 51
    ipk:
      min: 2.78
      avg: 3.2
      max: 3.61
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8a.vue'

const { frontmatter } = useData()
</script>

# IPK Lulusan

Tuliskan data Indeks Prestasi Kumulatif (IPK) lulusan dalam 3 tahun terakhir. Data dilengkapi dengan jumlah lulusan pada setiap tahun kelulusan.

## Tabel 8.a

<Tabel :data="frontmatter.data" />
