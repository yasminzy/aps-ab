---
data:
  - nama: Nama Dosen B
    namaProduk: Nama produk B
    deskripsiProduk: Deskripsi produk B
    bukti: Bukti B
  - nama: Nama Dosen A
    namaProduk: Nama produk A
    deskripsiProduk: Deskripsi produk A
    bukti: Bukti A
  - nama: Nama Dosen C
    namaProduk: Nama produk C
    deskripsiProduk: Deskripsi produk C
    bukti: Bukti C
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3b7.vue'

const { frontmatter } = useData()
</script>

# Produk/ Jasa DTPS yang Diadopsi oleh Industri/ Masyarakat

➡️ P3M

Tuliskan nama produk/jasa karya DTPS yang diadopsi oleh industri/masyarakat dalam 3 tahun terakhir. Jenis produk/jasa harus relevan dengan bidang Program Studi.

## Tabel 3.b.7

<Tabel :data="frontmatter.data" />
