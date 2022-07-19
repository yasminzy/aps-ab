---
data:
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: KU1102
    nama: Etika Profesi
    matkulKompetensi: true
    semester: 2
    sks:
      kuliah: 2
      seminar: 0
      praktik: 0
    konversiKreditKeJam: 2
    cpl:
      pengetahuan: false
      keterampilanUmum: false
      sikap: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: MA1202
    nama: Matematika Teknik II
    matkulKompetensi: false
    semester: 2
    sks:
      kuliah: 2
      seminar: 0
      praktik: 0
    konversiKreditKeJam: 2
    cpl:
      pengetahuan: true
      keterampilanUmum: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: KU1101
    nama: Agama
    matkulKompetensi: false
    semester: 1
    sks:
      kuliah: 2
      seminar: 0
      praktik: 0
    konversiKreditKeJam: 2
    cpl:
      sikap: true
      pengetahuan: false
      keterampilanUmum: false
      keterampilanKhusus: false
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: IN1101
    nama: Bahasa Inggris I
    matkulKompetensi: false
    semester: 1
    sks:
      kuliah: 1
      seminar: 0
      praktik: 1
    konversiKreditKeJam: 3
    cpl:
      sikap: false
      pengetahuan: true
      keterampilanUmum: true
      keterampilanKhusus: false
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: IN2302
    nama: Bahasa Inggris II
    matkulKompetensi: false
    semester: 3
    sks:
      kuliah: 1
      seminar: 0
      praktik: 1
    konversiKreditKeJam: 3
    cpl:
      pengetahuan: true
      keterampilanUmum: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: PAB2315
    nama: Elemen Mesin
    matkulKompetensi: true
    semester: 3
    sks:
      kuliah: 2
      seminar: 0
      praktik: 0
    konversiKreditKeJam: 2
    cpl:
      pengetahuan: true
      keterampilanUmum: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: MA2403
    nama: Statistik
    matkulKompetensi: false
    semester: 4
    sks:
      kuliah: 1
      seminar: 0
      praktik: 1
    konversiKreditKeJam: 3
    cpl:
      pengetahuan: true
      keterampilanUmum: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: PAB2423
    nama: Chasis dan Under Cariage / Lower Machine
    matkulKompetensi: true
    semester: 4
    sks:
      kuliah: 1
      seminar: 0
      praktik: 2
    konversiKreditKeJam: 5
    cpl:
      pengetahuan: true
      keterampilanKhusus: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: KU3605
    nama: Kewarganegaraan
    matkulKompetensi: false
    semester: 6
    sks:
      kuliah: 2
      seminar: 0
      praktik: 0
    konversiKreditKeJam: 2
    cpl:
      sikap: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: KU3606
    nama: Kewirausahaan
    matkulKompetensi: false
    semester: 6
    sks:
      kuliah: 1
      seminar: 0
      praktik: 1
    konversiKreditKeJam: 3
    cpl:
      sikap: true
      keterampilanUmum: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: KU3503
    nama: Pancasila
    matkulKompetensi: false
    semester: 5
    sks:
      kuliah: 2
      seminar: 0
      praktik: 0
    konversiKreditKeJam: 2
    cpl:
      sikap: true
  - penyelenggara: Jurusan Teknik Mesin
    dokumen: D3 Alat Berat
    kode: KU3504
    nama: Bahasa Indonesia
    matkulKompetensi: false
    semester: 5
    sks:
      kuliah: 2
      seminar: 0
      praktik: 0
    konversiKreditKeJam: 2
    cpl:
      pengetahuan: true
      keterampilanUmum: true
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-5a1.vue'

const { frontmatter } = useData()
</script>

# Kurikulum, Capaian Pembelajaran, dan Rencana Pembelajaran

Tuliskan struktur program dan kelengkapan data mata kuliah sesuai dengan dokumen kurikulum Program Studi yang berlaku pada saat TS.

## Tabel 5.a.1

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Diisi dengan tanda centang V jika mata kuliah termasuk dalam mata kuliah kompetensi program studi.
1. Diisi dengan konversi bobot kredit ke jam pelaksanaan pembelajaran.
1. Beri tanda V pada kolom unsur pembentuk Capaian Pembelajaran Lulusan (CPL) sesuai dengan rencana pembelajaran.
1. Diisi dengan nama dokumen rencana pembelajaran yang digunakan.

:::
