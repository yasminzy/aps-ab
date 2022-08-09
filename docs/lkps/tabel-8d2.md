---
data:
  - tahun: ts-4
    lulusan: 64
    lulusanTerlacak: 48
    lulusanTerlacakKesesuaianBidangKerja:
      rendah: 6
      sedang: 19
      tinggi: 23
  - tahun: ts-3
    lulusan: 66
    lulusanTerlacak: 60
    lulusanTerlacakKesesuaianBidangKerja:
      rendah: 2
      sedang: 23
      tinggi: 35
  - tahun: ts-2
    lulusan: 55
    lulusanTerlacak: 45
    lulusanTerlacakKesesuaianBidangKerja:
      rendah: 1
      sedang: 18
      tinggi: 26
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8d2.vue'

const { frontmatter } = useData()
</script>

# Kesesuaian Bidang Kerja Lulusan

➡️ CDC

Tuliskan data kesesuaian bidang kerja lulusan saat mendapatkan pekerjaan pertama dalam 3 tahun, mulai TS-4 sampai dengan TS-2. Data diambil dari hasil studi penelusuran lulusan.

## Tabel 8.d.2

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Jenis pekerjaan/posisi jabatan dalam pekerjaan tidak sesuai atau kurang sesuai dengan profil lulusan yang direncanakan dalam dokumen kurikulum.
1. Jenis pekerjaan/posisi jabatan dalam pekerjaan cukup sesuai dengan profil lulusan yang direncanakan dalam dokumen kurikulum.
1. Jenis pekerjaan/posisi jabatan dalam pekerjaan sesuai atau sangat sesuai dengan profil lulusan yang direncanakan dalam dokumen kurikulum.

:::
