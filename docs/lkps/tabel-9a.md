---
data:
  - nama: 3
    tanggal: 2022-07-16T11:02:01.428Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: true
  - nama: 2
    tanggal: 2022-07-16T11:02:18.936Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: false
    tindakLanjut: false
  - nama: 1
    tanggal: 2022-07-16T11:02:20.080Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: true
  - nama: 4
    tanggal: 2022-07-16T11:02:01.428Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: false
    tindakLanjut: false
  - nama: 5
    tanggal: 2022-07-16T11:02:18.936Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
  - nama: 6
    tanggal: 2022-07-16T11:02:20.080Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: true
  - nama: 9
    tanggal: 2022-07-16T11:02:01.428Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
  - nama: 8
    tanggal: 2022-07-16T11:02:18.936Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
  - nama: 7
    tanggal: 2022-07-16T11:02:20.080Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: true
  - nama: 10
    tanggal: 2022-07-16T11:02:01.428Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: true
  - nama: 11
    tanggal: 2022-07-16T11:02:18.936Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: true
  - nama: 12
    tanggal: 2022-07-16T11:02:20.080Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
  - nama: 13
    tanggal: 2022-07-16T11:02:01.428Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
  - nama: 14
    tanggal: 2022-07-16T11:02:18.936Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
  - nama: 15
    tanggal: 2022-07-16T11:02:20.080Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: false
    tindakLanjut: false
  - nama: 24
    tanggal: 2022-07-16T11:02:01.428Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
  - nama: 23
    tanggal: 2022-07-16T11:02:18.936Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: false
    tindakLanjut: false
  - nama: 22
    tanggal: 2022-07-16T11:02:20.080Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: false
    tindakLanjut: false
  - nama: 21
    tanggal: 2022-07-16T11:02:01.428Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
  - nama: 20
    tanggal: 2022-07-16T11:02:18.936Z
    ketersediaan: true
    pelaksanaan: false
    monev: false
    umpanBalik: false
    tindakLanjut: false
  - nama: 19
    tanggal: 2022-07-16T11:02:20.080Z
    ketersediaan: true
    pelaksanaan: true
    monev: false
    umpanBalik: false
    tindakLanjut: false
  - nama: 18
    tanggal: 2022-07-16T11:02:01.428Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: true
  - nama: 17
    tanggal: 2022-07-16T11:02:18.936Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: false
    tindakLanjut: false
  - nama: 16
    tanggal: 2022-07-16T11:02:20.080Z
    ketersediaan: true
    pelaksanaan: true
    monev: true
    umpanBalik: true
    tindakLanjut: false
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-9a.vue'

const { frontmatter } = useData()
</script>

# Evaluasi dan Pengendalian Sistem Penjaminan Mutu Internal

Pelaksanaan Penjaminan Mutu Internal pada Unit Pengelola Program Studi (UPPS) serta kelengkapan dokumennya.

## Tabel 9.a

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Kolom 3-7 isi dengan **Ada** atau **Tidak Ada**.
1. Lampirkan bukti dokumen saat pelaksanaan Audit Mutu Internal.

:::
