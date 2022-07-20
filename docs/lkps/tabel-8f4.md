---
data:
  - nama: Nama Mahasiswa A
    namaProduk: Nama Produk A
    deskripsiProduk: Deskripsi Produk A.
    bukti: Bukti A
  - nama: Nama Mahasiswa B
    namaProduk: Nama Produk B
    deskripsiProduk: Deskripsi Produk B.
    bukti: Bukti B
  - nama: Nama Mahasiswa C
    namaProduk: Nama Produk C
    deskripsiProduk: Deskripsi Produk C.
    bukti: Bukti C
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8f4.vue'

const { frontmatter } = useData()
</script>

# Produk/Jasa yang Dihasilkan Mahasiswa yang Diadopsi oleh Industri/Masyarakat

Tuliskan produk/jasa karya mahasiswa, yang dihasilkan secara mandiri atau bersama DTPS, yang diadopsi oleh industri/masyarakat dalam 3 tahun terakhir. Jenis produk/jasa yang diadopsi oleh industri/masyarakat harus relevan dengan bidang program studi.

## Tabel 8.f.4

<Tabel :data="frontmatter.data" />
