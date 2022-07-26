---
data:
  - status:
      pendidikan: s2
      jabatan: 1
    nama: Yudi Kurniawan, S.T., M.T.
    mhs:
      ts-2: 10
      ts-1: 2
      ts: 3
    pertemuan:
      ts-2: 4
      ts-1: 5
      ts: 6
    lamaTa:
      ts-2: 4
      ts-1: 4
      ts: 4
  - status:
      pendidikan: s2
      jabatan: 1
    nama: Nama Dosen B
    mhs:
      ts-2: 2
      ts-1: 3
      ts: 3
    pertemuan:
      ts-2: 3
      ts-1: 4
      ts: 5
    lamaTa:
      ts-2: 3
      ts-1: 3
      ts: 3
  - status:
      pendidikan: s3
      jabatan: 2
    nama: Nama Dosen C
    mhs:
      ts-2: 1
      ts-1: 2
      ts: 3
    pertemuan:
      ts-2: 4
      ts-1: 5
      ts: 5
    lamaTa:
      ts-2: 5
      ts-1: 5
      ts: 5
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-5a2.vue'

const { frontmatter } = useData()
</script>

# Pembimbingan Tugas Akhir

Tuliskan pembimbingan Tugas Akhir pada Program Studi yang diakreditasi.

## Tabel 5.a.2

<Tabel :data="frontmatter.data" />
