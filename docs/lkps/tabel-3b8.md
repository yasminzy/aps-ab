---
data:
  - jenis: 2
    tanggal: 2022-01-16T13:10:24.468Z
    judul: Judul luaran penelitian dan PkM 5
    noPaten: "-"
    noSertifikat: "-"
    tkt: "-"
    noSertifikatTkt: "-"
    noIsbn: "-"
  - jenis: 4
    tanggal: 2022-02-16T13:10:48.037Z
    judul: Judul luaran penelitian dan PkM 6
    noPaten: "-"
    noSertifikat: "-"
    tkt: "-"
    noSertifikatTkt: "-"
    noIsbn: "-"
  - jenis: 1
    tanggal: 2022-03-16T13:11:11.457Z
    judul: Judul luaran penelitian dan PkM 7
    noPaten: "-"
    tkt: "-"
    noSertifikat: "-"
    noSertifikatTkt: "-"
    noIsbn: "-"
  - jenis: 3
    tanggal: 2022-04-16T13:11:38.509Z
    judul: Judul luaran penelitian dan PkM 8
    noPaten: "-"
    noSertifikat: "-"
    tkt: "-"
    noSertifikatTkt: "-"
    noIsbn: "-"
  - jenis: 1
    tanggal: 2022-05-16T13:03:28.927Z
    judul: Judul luaran penelitian dan PkM 1
    noPaten: "-"
    noSertifikat: "-"
    tkt: "-"
    noSertifikatTkt: "-"
    noIsbn: "-"
  - jenis: 2
    tanggal: 2022-06-16T13:05:16.191Z
    judul: Judul luaran penelitian dan PkM 2
    noSertifikat: "-"
    noPaten: "-"
    tkt: "-"
    noSertifikatTkt: "-"
    noIsbn: "-"
  - jenis: 3
    tanggal: 2022-07-16T13:06:08.030Z
    judul: Judul luaran penelitian dan PkM 3
    noPaten: "-"
    noSertifikat: "-"
    tkt: "-"
    noSertifikatTkt: "-"
    noIsbn: "-"
  - jenis: 4
    tanggal: 2022-06-16T13:06:42.020Z
    judul: Judul luaran penelitian dan PkM 4
    noPaten: "-"
    noSertifikat: "-"
    tkt: "-"
    noSertifikatTkt: "-"
    noIsbn: "-"
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
