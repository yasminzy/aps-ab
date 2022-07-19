---
data:
  - tahun: ts
    tingkat: wilayah
    kesesuaian: sesuai
    nama: Nama Dosen B
    judul: Judul Penelitian B
    matkul: Mata Kuliah B
    bentuk: Materi perkuliahan
  - tahun: ts-1
    tingkat: nasional
    kesesuaian: sesuai
    nama: Nama Dosen A
    judul: Judul Penelitian A
    matkul: Mata Kuliah A
    bentuk: Materi perkuliahan
  - tahun: ts-2
    tingkat: internasional
    kesesuaian: sesuai
    nama: Nama Dosen C
    judul: Judul Penelitian C
    matkul: Mata Kuliah C
    bentuk: Materi perkuliahan
  - tahun: ts-2
    tingkat: wilayah
    kesesuaian: sesuai
    nama: Nama Dosen D
    judul: Judul Penelitian D
    matkul: Mata Kuliah D
    bentuk: Materi perkuliahan
  - tahun: ts-1
    tingkat: nasional
    kesesuaian: sesuai
    nama: Nama Dosen E
    judul: Judul Penelitian E
    matkul: Mata Kuliah E
    bentuk: Materi perkuliahan
  - tahun: ts
    tingkat: internasional
    kesesuaian: sesuai
    nama: Nama Dosen F
    judul: Judul Penelitian F
    matkul: Mata Kuliah F
    bentuk: Materi perkuliahan
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-5c.vue'

const { frontmatter } = useData()
</script>

# Integrasi Kegiatan Penelitian/PkM dalam Pembelajaran

Tuliskan judul Penelitian/PkM DTPS yang terintegrasi ke dalam pembelajaran/pengembangan mata kuliah dalam 3 tahun terakhir.

## Tabel 5.c

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Judul Penelitian dan PkM tercatat di unit/lembaga yang mengelola kegiatan Penelitian/PkM di tingkat Perguruan Tinggi/UPPS.
1. Bentuk integrasi dapat berupa tambahan materi perkuliahan, studi kasus, Bab/Subbab dalam buku ajar, bahan ajar, atau bentuk lain yang relevan.

:::
