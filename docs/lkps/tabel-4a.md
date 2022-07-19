---
data:
  - jenis: 2
    upps:
      ts-2: 110546026
      ts-1: 125964070
      ts: 122522880
    prodi:
      ts-2: 110546026
      ts-1: 125964070
      ts: 122522880
  - jenis: 1
    upps:
      ts-2: 729712331
      ts-1: 681504788
      ts: 574510573
    prodi:
      ts-2: 729712331
      ts-1: 681504788
      ts: 574510579
  - jenis: 4
    upps:
      ts-2: 175469650
      ts-1: 204150473
      ts: 278283408
    prodi:
      ts-2: 175469654
      ts-1: 204150473
      ts: 278283408
  - jenis: 3
    upps:
      ts-2: 177400659
      ts-1: 141924750
      ts: 146380000
    prodi:
      ts-2: 177400659
      ts-1: 141924750
      ts: 146380000
  - jenis: 6
    upps:
      ts-2: 97500000
      ts-1: 56250000
      ts: 199199995
    prodi:
      ts-2: 97500000
      ts-1: 56250000
      ts: 199200004
  - jenis: 5
    upps:
      ts-2: 128604996
      ts-1: 120218200
      ts: 133697800
    prodi:
      ts-2: 128605000
      ts-1: 120218200
      ts: 133697800
  - jenis: 8
    upps:
      ts-2: 54771670
      ts-1: 52440700
      ts: 64049915
    prodi:
      ts-2: 54771670
      ts-1: 52440700
      ts: 64049915
  - jenis: 7
    upps:
      ts-2: 30000000
      ts-1: 33000000
      ts: 72800000
    prodi:
      ts-2: 30000000
      ts-1: 33000000
      ts: 72800000
  - jenis: 10
    upps:
      ts-2: 52079997
      ts-1: 88200000
      ts: 81000000
    prodi:
      ts-2: 52080000
      ts-1: 88200000
      ts: 81000000
  - jenis: 9
    upps:
      ts-2: 37000000
      ts-1: 27280000
      ts: 8579996
    prodi:
      ts: 8580000
      ts-1: 27280000
      ts-2: 37000004
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-4a.vue'

const { frontmatter } = useData()
</script>

# Penggunaan Dana

Tuliskan data penggunaan dana yang dikelola oleh UPPS dan data penggunaan dana yang dialokasikan ke Program Studi yang diakreditasi dalam 3 tahun terakhir.

## Tabel 4.a

<Tabel :data="frontmatter.data" />
