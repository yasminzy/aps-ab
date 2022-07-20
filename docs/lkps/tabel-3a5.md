---
data:
  - pendidikan: s2
    nama: Nama Dosen A
    nomorInduk: ""
    perusahaan: Perusahaan A
    bidangKeahlian: Bidang Keahlian A
    sertifikat:
      bidangSertifikasi: Bidang Sertifikasi A
      lembagaPenerbit: Lembaga Penerbit A
    matkul: Matkul A
    sks: 3
  - pendidikan: s2
    nama: Nama Dosen B
    nomorInduk: ""
    perusahaan: Perusahaan B
    bidangKeahlian: Bidang Keahlian B
    sertifikat:
      bidangSertifikasi: Bidang Sertifikasi B
      lembagaPenerbit: Lembaga Penerbit B
    matkul: Matkul B
    sks: 3
  - pendidikan: s2
    nama: Nama Dosen C
    nomorInduk: ""
    perusahaan: Perusahaan C
    bidangKeahlian: Bidang Keahlian C
    sertifikat:
      bidangSertifikasi: Bidang Sertifikasi C
      lembagaPenerbit: Lembaga Penerbit C
    matkul: Matkul C
    sks: 3
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3a5.vue'

const { frontmatter } = useData()
</script>

# Dosen Industri/Praktisi

Tuliskan data dosen industri/praktisi yang ditugaskan sebagai pengampu mata kuliah kompetensi di Program Studi yang diakreditasi pada saat TS. Dosen industri/praktisi direkrut melalui kerjasama dengan perusahaan atau industri yang relevan dengan bidang Program Studi.

## Tabel 3.a.5

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. NIDK = Nomor Induk Dosen Khusus, diisi jika ada.
1. Diisi dengan nama perusahaan/industri asal dosen industri/praktisi.
1. Bidang keahlian sesuai pendidikan tertinggi.
1. Diisi dengan bidang sertifikasi dan lembaga penerbit sertifikat.
1. Diisi dengan nama mata kuliah yang diampu pada saat TS-2 s.d. TS. Dosen industri/praktisi dapat terlibat sebagai pengampu secara penuh atau sebagai bagian dari kelompok dosen atau team teaching.

:::
