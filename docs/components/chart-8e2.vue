<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-8e2"))

const normalizedData = lodash
  .orderBy(frontmatter.value[0].data, ["jenis"], ["asc"])
  .map((item) => {
    return {
      kepuasan: item.kepuasan
    }
  })

const kode = ["sangatBaik", "baik", "cukup", "kurang"]

const jenisKemampuan = [
  "Etika",
  "Keahlian pada bidang ilmu",
  "Kemampuan berbahasa asing",
  "Penggunaan teknologi informasi",
  "Kemampuan berkomunikasi",
  "Kerjasama",
  "Pengembangan diri"
]

const data = {
  labels: ["Sangat baik", "Baik", "Cukup", "Kurang"],

  yLabel: "Tingkat Kepuasan (%)",

  datasets: jenisKemampuan.map((item, index) => {
    return {
      label: item,
      data: Object.values(normalizedData[index].kepuasan)
    }
  })
}
</script>

<template>
  <ChartBar :data="data" />
</template>
