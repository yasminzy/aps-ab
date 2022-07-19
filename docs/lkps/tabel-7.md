---
data:
  - tahun: 2023-07-16T11:35:59.771Z
    namaDosen: Nama dosen 2
    temaPkm: Tema PkM sesuai roadmap 2
    namaMhs: Nama mahasiswa 2
    judulPkm: Judul kegiatan PkM 2
  - tahun: 2024-07-16T11:36:14.160Z
    namaDosen: Nama dosen 3
    temaPkm: Tema PkM sesuai roadmap 3
    namaMhs: Nama mahasiswa 3
    judulPkm: Judul kegiatan PkM 3
  - tahun: 2023-07-16T11:36:15.587Z
    namaDosen: Nama dosen 1
    temaPkm: Tema PkM sesuai roadmap 1
    namaMhs: Nama mahasiswa 1
    judulPkm: Judul kegiatan PkM 1
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-7.vue'

const { frontmatter } = useData()
</script>

# PkM DTPS yang Melibatkan Mahasiswa

Tuliskan data Pengabdian kepada Masyarakat (PkM) DTPS yang dalam pelaksanaannya melibatkan mahasiswa Program Studi pada TS-2 sampai dengan TS.

## Tabel 7

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Kegiatan PkM dosen yang dalam pelaksanaannya melibatkan mahasiswa, tidak termasuk kegiatan KKN atau kegiatan lainnya yang merupakan bagian dari kegiatan kurikuler.

:::
