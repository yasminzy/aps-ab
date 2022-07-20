---
data:
  - matkul:
      1. Mekanika Teknik, 2. Motor Bakar II, 3. Hand and Measurement Tools, 4.
      Ilmu Bahan II
    matkulDiPsLain: ""
    sertifikat:
      bidangSertifikasi: Bidang Sertifikasi
      lembagaPenerbit: Lembaga Penerbit
    bidangKeahlianSesuaiMatkul: true
    nomorInduk: "0028088502"
    nama: Zulkifli, S.T., M.T.
    bidangKeahlian: Teknik Mesin
    jabatan: 2
    namaProdi:
      s2: Teknik
    noSertifikatPendidik: "17100503202665"
    sesuaiKompetensi: true
  - matkul: Konversi Energi, Manajemen Bengkel, K3L, Pesawat Angkat, Fisika dan
      Kimia Dasar
    matkulDiPsLain: ""
    sertifikat:
      bidangSertifikasi: Bidang Sertifikasi
      lembagaPenerbit: Lembaga Penerbit
    bidangKeahlianSesuaiMatkul: true
    nomorInduk: "0031127417"
    nama: Ida Bagus D, S.T., M.Si.
    bidangKeahlian: Ilmu Lingkungan
    jabatan: 2
    namaProdi:
      s2: Teknik
    noSertifikatPendidik: "14100503203746"
  - matkul: Sistem Hidrolik dan Pneumatik, Manajemen Mutu, Gambar Teknik Mesin,
      Dasar-Dasar Hidrolik dan Pneumatik
    matkulDiPsLain: ""
    sertifikat:
      bidangSertifikasi: Bidang Sertifikasi
      lembagaPenerbit: Lembaga Penerbit
    bidangKeahlianSesuaiMatkul: true
    nomorInduk: "1174117401"
    nama: Dr. Syahruddin, S.Pd., M.T.
    bidangKeahlian: Manajemen Industri
    jabatan: 2
    namaProdi:
      s2: Teknik
      s3: Teknik Mesin
    noSertifikatPendidik: "15100503209430"
    sesuaiKompetensi: true
  - matkul: >-
      Sistem Penyejuk Udara, Chasis dan Under Carriage, Rangkaian Pemindah
      Tenaga, Dasar-Dasar

      Hidrolik dan Pneumatik
    matkulDiPsLain: ""
    sertifikat:
      bidangSertifikasi: Bidang Sertifikasi
      lembagaPenerbit: Lembaga Penerbit
    bidangKeahlianSesuaiMatkul: true
    nomorInduk: "0001046214"
    nama: Drs. Syaeful Akbar, M.T.
    bidangKeahlian: Manajemen Industri
    jabatan: 2
    namaProdi:
      s2: Teknik
    noSertifikatPendidik: "14100503203411"
    sesuaiKompetensi: true
  - matkul: Agama
    matkulDiPsLain:
      "Agama (PS Tata Boga, Divisi Kamar, Keuangan Perbankan, Teknik
      Listrik, Teknik Elektronika, Teknik Sipil, Teknik Konstru ksi Jalan dan
      Jembatan) "
    sertifikat:
      bidangSertifikasi: ""
      lembagaPenerbit: ""
    bidangKeahlianSesuaiMatkul: true
    nomorInduk: "1171087101"
    nama: Basri Dahlan, S.Ag., M.Pd.I
    bidangKeahlian: Pendidikan Islam
    jabatan: 2
    namaProdi:
      s2: Agama Islam
    noSertifikatPendidik: "15100503200709"
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3a1.vue'

const { frontmatter } = useData()
</script>

# Dosen Tetap Perguruan Tinggi yang Ditugaskan sebagai Pengampu Mata Kuliah di Program Studi yang Diakreditasi

Tuliskan data Dosen Tetap Perguruan Tinggi yang ditugaskan sebagai pengampu mata kuliah di Program Studi yang diakreditasi (DTPS) pada saat TS.

## Tabel 3.a.1

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

NDT = Jumlah Dosen Tetap Perguruan Tinggi yang ditugaskan sebagai pengampu mata kuliah di Program Studi yang diakreditasi.

NDTPS = Jumlah Dosen Tetap Perguruan Tinggi yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi.

1. Diisi dengan nama Program Studi pada pendidikan pasca sarjana (Magister/Magister Terapan dan/atau Doktor/Doktor Terapan) yang pernah diikuti.
1. Diisi dengan bidang keahlian sesuai pendidikan pasca sarjana yang relevan dengan mata kuliah yang diampu.
1. Diisi dengan tanda centang V jika bidang keahlian sesuai dengan kompetensi inti Program Studi yang diakreditasi.
1. Diisi dengan nomor Sertifikat Pendidik Profesional.
1. Diisi dengan bidang sertifikasi dan lembaga penerbit sertifikat.
1. Diisi dengan nama mata kuliah yang diampu pada Program Studi yang diakreditasi pada saat TS-2 s.d. TS.
1. Diisi dengan tanda centang V jika bidang keahlian sesuai dengan mata kuliah yang diampu.
1. Diisi dengan nama mata kuliah yang diampu pada Program Studi lain pada saat TS-2 s.d. TS.

:::
