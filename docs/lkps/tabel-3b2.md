---
data:
  - pembiayaan: 2
    penelitian:
      ts-2: 3
      ts-1: 1
      ts: 1
  - pembiayaan: 1
    penelitian:
      ts-2: 4
      ts-1: 5
      ts: 6
  - pembiayaan: 3
    penelitian:
      ts-2: 0
      ts-1: 0
      ts: 0
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3b2.vue'

const { frontmatter } = useData()
</script>

# Penelitian DTPS

Tuliskan jumlah judul penelitian1) yang dilaksanakan oleh DTPS berdasarkan sumber pembiayaan, yang relevan dengan bidang Program Studi pada TS-2 sampai dengan TS.

## Tabel 3.b.2

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Kegiatan penelitian tercatat di unit/lembaga yang mengelola kegiatan penelitian di tingkat Perguruan Tinggi/UPPS.
1. Penelitian dengan sumber pembiayaan dari DTPS.

:::
