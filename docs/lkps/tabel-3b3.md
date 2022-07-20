---
data:
  - pembiayaan: 1
    pkm:
      ts-2: 3
      ts-1: 3
      ts: 3
  - pembiayaan: 2
    pkm:
      ts-2: 0
      ts-1: 0
      ts: 1
  - pembiayaan: 3
    pkm:
      ts-2: 0
      ts-1: 0
      ts: 0
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-3b3.vue'

const { frontmatter } = useData()
</script>

# Pengabdian kepada Masyarakat (PkM) DTPS

Tuliskan jumlah judul Pengabdian kepada Masyarakat (PkM)1) yang dilaksanakan oleh DTPS berdasarkan sumber pembiayaan, yang relevan dengan bidang Program Studi pada TS-2 sampai dengan TS.

## Tabel 3.b.3

<Tabel :data="frontmatter.data" />

::: info KETERANGAN

1. Kegiatan PkM tercatat di unit/lembaga yang mengelola kegiatan PkM di tingkat Perguruan Tinggi/UPPS.
1. PkM dengan sumber pembiayaan dari DTPS.

:::
