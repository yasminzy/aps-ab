---
ts-4:
  masukTs4: 1
ts-3:
  masukTs3: 1
  masukTs4: 1
ts-2:
  masukTs4: 1
  masukTs3: 1
  masukTs2: 1
ts-1:
  masukTs4: 1
  masukTs3: 1
  masukTs2: 1
  masukTs1: 1
ts:
  masukTs4: 1
  masukTs3: 1
  masukTs2: 1
  masukTs1: 1
  masukTs: 1
---

<script setup>
import { useData } from "vitepress"
import Tabel from '../components/tabel-8c.vue'

const { frontmatter } = useData()
</script>

# Masa Studi Lulusan Program Studi

Tuliskan masa studi lulusan.

## Tabel 8.c

<Tabel :data="frontmatter" />

::: info KETERANGAN

\* Tidak memasukkan mahasiswa transfer.

Catatan: huruf-huruf a, b, c, d, e, dan f harus tetap tercantum pada tabel di atas.

:::
