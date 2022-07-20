---
data:
  - jenis: 1
    tanggal: 2022-03-16T13:11:11.457Z
    judul: Judul luaran penelitian dan PkM A
    noPaten: ""
    tkt: 6
    noSertifikat: ""
    noSertifikatTkt: ""
    noIsbn: ""
  - jenis: 2
    tanggal: 2022-06-16T13:05:16.191Z
    judul: Judul luaran penelitian dan PkM B
    noSertifikat: ""
    noPaten: ""
    tkt: 7
    noSertifikatTkt: ""
    noIsbn: ""
  - jenis: 3
    noPaten: ""
    noSertifikat: ""
    tkt: 0
    noSertifikatTkt: ""
    noIsbn: ""
    tanggal: 2022-07-20T15:02:02.688Z
    judul: Judul luaran penelitian dan PkM C
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3b8.vue'

const { frontmatter } = useData()
</script>

# Luaran Penelitian/PkM Lainnya oleh DTPS

Tuliskan judul luaran penelitian atau judul luaran PkM yang dihasilkan DTPS dalam 3 tahun terakhir. Jenis dan judul luaran harus relevan dengan bidang Program Studi.

## Tabel 3.b.8

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Luaran penelitian/PkM yang mendapat pengakuan Hak Kekayaan Intelektual (HKI) dibuktikan dengan penerbitan paten oleh Kemenkumham.
1. Luaran penelitian/PkM yang mendapat pengakuan Hak Kekayaan Intelektual (HKI) dibuktikan dengan penerbitan sertifikat oleh Kemenkumham atau kementerian lain yang berwenang.
1. Luaran penelitian/PkM yang mendapat sertifikat TKT dari Kemendikbudristek atau kementerian/lembaga lain yang berwenang.

:::
