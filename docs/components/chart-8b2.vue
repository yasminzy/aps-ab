<script setup>
import { computed } from "vue"
import { useDateFormat } from "@vueuse/core"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-8b2"))

const normalizedData = lodash
  .orderBy(frontmatter.value[0].data, ["waktu", "nama"], ["desc", "asc"])
  .map((item) => {
    return {
      ...item,
      waktu: useDateFormat(item.waktu, "YYYY").value
    }
  })

const groupedData = lodash.groupBy(normalizedData, "waktu")

const tahun = Object.keys(groupedData)

const filter = (tahun, tingkat) =>
  groupedData[tahun].filter((item) => item.tingkat === tingkat).length

let datasets = []

for (let i = 0; i < tahun.length; i++) {
  datasets.push({
    label: tahun[i],

    data: [
      filter(tahun[i], "wilayah"),
      filter(tahun[i], "nasional"),
      filter(tahun[i], "internasional")
    ]
  })
}

const data = {
  labels: ["Lokal/ Wilayah", "Nasional", "Internasional"],

  yLabel: "Jumlah Prestasi",

  datasets
}
</script>

<template>
  <ChartBar :data="data" />
</template>
