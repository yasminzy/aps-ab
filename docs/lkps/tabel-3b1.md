---
data:
  - tingkat: wilayah
    tahun: 2022-02-16T12:46:19.481Z
    nama: Nama Dosen A
    bidangKeahlian: Bidang Keahlian A
    rekognisiDanBuktiPendukung:
      rekognisi: Rekognisi A
      buktiPendukung: Bukti pendukung A
  - tingkat: nasional
    tahun: 2022-01-16T12:46:19.481Z
    nama: Nama Dosen B
    bidangKeahlian: Bidang Keahlian B
    rekognisiDanBuktiPendukung:
      rekognisi: Rekognisi B
      buktiPendukung: Bukti pendukung B
  - tingkat: internasional
    tahun: 2022-03-16T12:46:19.481Z
    nama: Nama Dosen C
    bidangKeahlian: Bidang Keahlian C
    rekognisiDanBuktiPendukung:
      rekognisi: Rekognisi C
      buktiPendukung: Bukti pendukung C
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3b1.vue'

const { frontmatter } = useData()
</script>

# Pengakuan/Rekognisi DTPS

Tuliskan pengakuan/rekognisi atas kepakaran/prestasi/kinerja DTPS yang diterima dalam 3 tahun terakhir.

## Tabel 3.b.1

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Pengakuan atau rekognisi atas kepakaran/prestasi/kinerja dapat berupa:

   - menjadi visiting lecturer atau visiting scholar di Program Studi/Perguruan Tinggi terakreditasi A/Unggul atau Program Studi/Perguruan Tinggi Internasional bereputasi.
   - menjadi keynote speaker/invited speaker pada pertemuan ilmiah tingkat nasional/ internasional.
   - menjadi editor atau mitra bestari pada jurnal nasional terakreditasi/jurnal internasional bereputasi di bidang yang sesuai dengan bidang Program Studi.
   - menjadi tenaga ahli/konsultan di lembaga/industri tingkat wilayah/nasional/ internasional pada bidang yang sesuai dengan bidang Program Studi.
   - mendapat penghargaan atas prestasi dan kinerja di tingkat wilayah/nasional/internasional.

1. Diisi dengan tanda centang V pada kolom yang sesuai.

:::
