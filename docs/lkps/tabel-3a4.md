---
data:
  - matkul: Praktik Bengkel
    sertifikat:
      bidangSertifikasi: "-"
      lembagaPenerbit: "-"
    bidangKeahlianSesuaiMatkul: true
    nomorInduk: "-"
    nama: Drs. Sulistya Jaka Hartana, M.T
    bidangKeahlian: Teknik Mesin
    jabatan: 0
    noSertifikatPendidik: "190842601908"
    pendidikan:
      s2: Teknik
      s3: "-"
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3a4.vue'

const { frontmatter } = useData()
</script>

# Dosen Tidak Tetap yang Ditugaskan sebagai Pengampu Mata Kuliah di Program Studi yang Diakreditasi

Tuliskan data Dosen Tidak Tetap yang ditugaskan sebagai pengampu mata kuliah di Program Studi yang diakreditasi (DTT) pada saat TS.

## Tabel 3.a.4

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

NDTT = Jumlah Dosen Tidak Tetap yang ditugaskan sebagai pengampu mata kuliah di Program Studi yang diakreditasi.

1. NIDN (Nomor Induk Dosen Nasional), NIDK (Nomor Induk Dosen Khusus), diisi jika ada.
1. Diisi dengan jenis program (Magister/Magister Terapan/Doktor/Doktor Terapan) dan nama Program Studi pada pendidikan pasca sarjana yang pernah diikuti.
1. Diisi dengan bidang keahlian sesuai pendidikan pasca sarjana yang relevan dengan mata kuliah yang diampu.
1. Diisi dengan nomor sertifikat pendidik profesional.
1. Diisi dengan bidang sertifikasi dan lembaga penerbit sertifikat.
1. Diisi dengan nama mata kuliah yang diampu pada Program Studi yang diakreditasi pada saat TS-2 s.d. TS.
1. Diisi dengan tanda centang V jika bidang keahlian sesuai dengan mata kuliah yang diampu.

Catatan: Data dosen industri/praktisi ([Tabel 3.a.5](./tabel-3a5)) tidak termasuk ke dalam data Dosen Tidak Tetap.

:::
