---
data:
  - jenis: 2
    keterangan: Nomor dan Tanggal Dokumen SPMI 2.
  - jenis: 1
    keterangan: Nomor dan Tanggal Dokumen SPMI 1.
  - jenis: 4
    keterangan: Nomor dan Tanggal Dokumen SPMI 4.
  - jenis: 3
    keterangan: Nomor dan Tanggal Dokumen SPMI 3.
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-9b.vue'

const { frontmatter } = useData()
</script>

# Ketersediaan Dokumen/Buku Sistem Penjaminan Mutu Internal

## Tabel 9.b

<Tabel :data="frontmatter.data" />
