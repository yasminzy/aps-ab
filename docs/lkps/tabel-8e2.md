---
data:
  - jenis: 1
    kepuasan:
      sangatBaik: 49.55
      baik: 50.45
      cukup: 0
      kurang: 0
    rencanaTindakLanjut: Meningkatkan Etika Mahasiswa melalui Pembelajaran Etika
      Profesi serta kegiatan pembelajaran lainnya baik didalam maupun diluar
      kelas.
  - jenis: 2
    kepuasan:
      sangatBaik: 47.75
      baik: 52.25
      cukup: 0
      kurang: 0
    rencanaTindakLanjut: Mengikuti pelatihan dari industri serta kuliah tamu dari
      industri untuk menambah keahlian bidang ilmu (kompetensi utama) diluar jam
      perkuliahan mata kuliah kompetesi utama.
  - jenis: 3
    kepuasan:
      sangatBaik: 40.54
      baik: 59.46
      cukup: 0
      kurang: 0
    rencanaTindakLanjut: Meningkatkan kemampuan berbahasa asing mahasiswa selain
      pada saat pembelajaran bahasa inggris dengan membuat English Club jurusan
      dan mengerjakan beberapa projek sesuai bidangnya ESP for Mechanical.
  - jenis: 4
    kepuasan:
      sangatBaik: 44.14
      baik: 54.05
      cukup: 1.8
      kurang: 0
    rencanaTindakLanjut: Melakukan evaluasi terhadap mata kuliah yang berhubungan
      dengan teknologi informasi.
  - jenis: 5
    kepuasan:
      sangatBaik: 42.34
      baik: 55.86
      cukup: 1.8
      kurang: 0
    rencanaTindakLanjut: Meningkatkan kegiatan baik dalam proses pembelajaran maupun
      kegitan diluar untuk memperbanyak public speaking.
  - jenis: 6
    rencanaTindakLanjut: Menganjurkan kepada setiap mahasiswa untuk mengikuti
      kegitan UKM serta kegiatan lainnya dimana dapat meningkatkan soft skill
      khususnya kemampuan kerjasama.
    kepuasan:
      sangatBaik: 45.05
      baik: 54.95
      cukup: 0
      kurang: 0
  - jenis: 7
    kepuasan:
      sangatBaik: 46.85
      baik: 51.35
      cukup: 1.8
      kurang: 0
    rencanaTindakLanjut: Memberikan pelatihan dan seminar serta tantangan guna
      menumbuhkan sikap pengembangan diri mahasiswa agar tangguh dalam setiap
      pengembangan diri.
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8e2.vue'

const { frontmatter } = useData()
</script>

# Kepuasan Pengguna

Tuliskan hasil pengukuran kepuasan pengguna lulusan berdasarkan aspek-aspek:

1. etika,
1. keahlian pada bidang ilmu (kompetensi utama),
1. kemampuan berbahasa asing,
1. penggunaan teknologi informasi,
1. kemampuan berkomunikasi,
1. kerjasama dan
1. pengembangan diri.

Data diambil dari hasil studi penelusuran lulusan.

## Tabel 8.e.2

<Tabel :data="frontmatter.data" />
