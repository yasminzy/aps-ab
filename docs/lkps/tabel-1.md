---
data:
  - jenis: pendidikan
    tingkat: internasional
    tanggalAwal: 2022-01-15T05:54:32.535Z
    tanggalAkhir: 2022-01-16T05:54:32.548Z
    mitra: Lembaga Mitra 1
    judul: Judul Kegiatan Kerja Sama 1
    manfaat: Manfaat bagi PS yang diakreditasi 1.
    bukti: Bukti kerja sama 1.
  - jenis: penelitian
    tingkat: nasional
    tanggalAwal: 2022-07-14T05:56:37.125Z
    tanggalAkhir: 2022-07-15T05:56:37.143Z
    mitra: Lembaga Mitra 2
    judul: Judul Kegiatan Kerja Sama 2
    manfaat: Manfaat bagi PS yang diakreditasi 2.
    bukti: Bukti kerja sama 2.
  - jenis: pkm
    tingkat: wilayah
    tanggalAwal: 2022-02-13T05:58:12.602Z
    tanggalAkhir: 2022-02-14T05:58:12.624Z
    mitra: Lembaga Mitra 3
    judul: Judul Kegiatan Kerja Sama 3
    manfaat: Manfaat bagi PS yang diakreditasi 3.
    bukti: Bukti kerja sama 3.
  - jenis: pendidikan
    tingkat: nasional
    tanggalAwal: 2022-06-12T05:58:35.909Z
    tanggalAkhir: 2022-06-13T05:58:35.936Z
    mitra: Lembaga Mitra 4
    judul: Judul Kegiatan Kerja Sama 4
    manfaat: Manfaat bagi PS yang diakreditasi 4.
    bukti: Bukti kerja sama 4.
  - jenis: penelitian
    tingkat: wilayah
    tanggalAwal: 2022-03-11T05:58:36.007Z
    tanggalAkhir: 2022-03-12T05:58:36.034Z
    mitra: Lembaga Mitra 5
    judul: Judul Kegiatan Kerja Sama 5
    manfaat: Manfaat bagi PS yang diakreditasi 5.
    bukti: Bukti kerja sama 5.
  - jenis: pkm
    tingkat: internasional
    tanggalAwal: 2022-06-10T05:58:36.139Z
    tanggalAkhir: 2022-05-11T05:58:36.171Z
    mitra: Lembaga Mitra 6
    judul: Judul Kegiatan Kerja Sama 6
    manfaat: Manfaat bagi PS yang diakreditasi 6.
    bukti: Bukti kerja sama 6.
  - jenis: pendidikan
    tingkat: wilayah
    tanggalAwal: 2022-04-09T05:58:36.279Z
    tanggalAkhir: 2022-04-10T05:58:36.336Z
    mitra: Lembaga Mitra 7
    judul: Judul Kegiatan Kerja Sama 7
    manfaat: Manfaat bagi PS yang diakreditasi 7.
    bukti: Bukti kerja sama 7.
  - jenis: penelitian
    tingkat: internasional
    tanggalAwal: 2022-05-08T05:58:36.494Z
    tanggalAkhir: 2022-05-09T05:58:36.531Z
    mitra: Lembaga Mitra 8
    judul: Judul Kegiatan Kerja Sama 8
    manfaat: Manfaat bagi PS yang diakreditasi 8.
    bukti: Bukti kerja sama 8.
  - jenis: pkm
    tingkat: nasional
    tanggalAwal: 2022-05-07T05:58:36.672Z
    tanggalAkhir: 2022-05-08T05:58:36.706Z
    mitra: Lembaga Mitra 9
    manfaat: Manfaat bagi PS yang diakreditasi 9.
    judul: Judul Kegiatan Kerja Sama 9.
    bukti: Bukti kerja sama 9.
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-1.vue'

const { frontmatter } = useData()
</script>

# Kerja Sama Tridharma Perguruan Tinggi

➡️ P3M

Tuliskan kerjasama tridharma perguruan tinggi di Unit Pengelola Program Studi (UPPS) dalam 3 tahun terakhir.

## Tabel 1

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Beri tanda V pada kolom yang sesuai.
1. Diisi dengan judul kegiatan kerjasama yang sudah terimplementasikan, melibatkan sumber daya dan memberikan manfaat bagi Program Studi yang diakreditasi.
1. Bukti kerjasama dapat berupa Surat Penugasan, Surat Perjanjian Kerjasama (SPK), bukti-bukti pelaksanaan (laporan, hasil kerjasama, luaran kerjasama), atau bukti lain yang relevan. Dokumen Memorandum of Understanding (MoU), Memorandum of Agreement (MoA), atau dokumen sejenis yang memayungi pelaksanaan kerjasama, tidak dapat dijadikan bukti realisasi kerjasama.

:::
