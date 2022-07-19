---
data:
  - tahun: ts-3
    lulusan: 66
    lulusanTerlacak: 60
    lulusanDipesanSebelumLulus: 6
    lulusanTerlacakWt:
      pendek: 10
      sedang: 42
      panjang: 2
  - tahun: ts-4
    lulusan: 64
    lulusanTerlacak: 48
    lulusanDipesanSebelumLulus: 5
    lulusanTerlacakWt:
      pendek: 17
      sedang: 25
      panjang: 1
  - tahun: ts-2
    lulusan: 55
    lulusanTerlacak: 45
    lulusanDipesanSebelumLulus: 4
    lulusanTerlacakWt:
      pendek: 7
      sedang: 33
      panjang: 5
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8d1.vue'

const { frontmatter } = useData()
</script>

# Waktu Tunggu Lulusan

Tuliskan data masa tunggu lulusan untuk mendapatkan pekerjaan pertama dalam 3 tahun. Data diambil dari hasil studi penelusuran lulusan.

## Tabel 8.d.1

<Tabel :data="frontmatter.data" />
