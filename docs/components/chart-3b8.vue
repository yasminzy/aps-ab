<script setup>
import { computed } from "vue"
import { useDateFormat } from "@vueuse/core"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-3b8"))

const normalizedData = lodash
  .orderBy(
    frontmatter.value[0].data,
    ["jenis", "tanggal", "judul"],
    ["asc", "desc", "asc"]
  )
  .map((item) => {
    return {
      ...item,
      tanggal: useDateFormat(item.tanggal, "DD/MM/YYYY").value
    }
  })

const groupedData = lodash.groupBy(normalizedData, "jenis")

const data = {
  labels: [
    "HKI (paten)",
    "HKI (hak cipta, desain)",
    "Teknologi Tepat Guna, Produk",
    "Buku ber-ISBN, Book Chapter"
  ],

  yLabel: "Jumlah",

  datasets: [
    {
      data: [
        groupedData["1"].length,
        groupedData["2"].length,
        groupedData["3"].length,
        groupedData["4"].length
      ]
    }
  ]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
