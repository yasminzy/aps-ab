---
data:
  - tahun: ts-4
    lulusan: 64
    lulusanPenanggap: 48
    lulusanTerlacak: 48
    lulusanTerlacakTingkatTempatKerja:
      wilayah: 20
      nasional: 20
      internasional: 8
  - tahun: ts-3
    lulusan: 66
    lulusanPenanggap: 60
    lulusanTerlacak: 60
    lulusanTerlacakTingkatTempatKerja:
      wilayah: 31
      nasional: 20
      internasional: 9
  - tahun: ts-2
    lulusan: 55
    lulusanPenanggap: 45
    lulusanTerlacak: 45
    lulusanTerlacakTingkatTempatKerja:
      wilayah: 10
      nasional: 31
      internasional: 4
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8e1.vue'

const { frontmatter } = useData()
</script>

# Tempat Kerja Lulusan

➡️ CDC

Tuliskan tingkat/ukuran tempat kerja/berwirausaha lulusan dalam 3 tahun, mulai TS-4 sampai dengan TS-2. Data diambil dari hasil studi penelusuran lulusan.

## Tabel 8.e.1

<Tabel :data="frontmatter.data" />
