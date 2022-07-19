---
data:
  - aspek: 2
    kepuasan:
      sangatBaik: 31.4
      baik: 54.5
      cukup: 13.6
      kurang: 0.5
    rencanaTindakLanjut: Akan terus ditingkatkan melalui kegiatan mentoring,
      pembimbingan TA maupun PKM, serta terus melibatkan mahasiswa dalam
      kegiatan dosen seperti penelitian dan pengabdian kepada masyarakat.
  - aspek: 1
    kepuasan:
      sangatBaik: 38.7
      baik: 53.9
      cukup: 6.8
      kurang: 0.5
    rencanaTindakLanjut:
      Akan terus meningkatkan pelayanan dan mengacu pada standar
      layanan yang ada.
  - aspek: 4
    kepuasan:
      sangatBaik: 37.7
      baik: 49.2
      cukup: 11.5
      kurang: 1.6
    rencanaTindakLanjut: Akan terus ditingkatkan melalui pembekalan dari PS, bimbingan dosen wali.
  - aspek: 3
    kepuasan:
      sangatBaik: 36.6
      baik: 53.9
      cukup: 9.4
      kurang: 0
    rencanaTindakLanjut:
      Akan dipertahankan dan terus ditingkatkan dengan memberikan
      pelatihan-pelatihan kepada dosen dan tenaga keendidikan.
  - aspek: 5
    rencanaTindakLanjut:
      Akan terus ditingkatkan dengan melakukan inventarisasi dan
      pengusulan pada top menajemen untuk kelengkapan sarpras pendidikan.
    kepuasan:
      sangatBaik: 33.5
      baik: 43.5
      cukup: 20.4
      kurang: 2.6
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-5d.vue'

const { frontmatter } = useData()
</script>

# Kepuasan Mahasiswa

Tuliskan hasil pengukuran kepuasan mahasiswa terhadap proses pendidikan. Data diambil dari hasil studi penelusuran yang dilakukan pada saat TS.

## Tabel 5.d

<Tabel :data="frontmatter.data" />
