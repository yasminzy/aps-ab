<script setup>
import { computed } from "vue"
import { useDateFormat } from "@vueuse/core"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-3b1"))

const normalizedData = lodash
  .orderBy(
    frontmatter.value[0].data,
    ["tahun", "nama", "bidangKeahlian"],
    ["desc", "asc", "asc"]
  )
  .map((item) => {
    return {
      ...item,
      tahun: useDateFormat(item.tahun, "YYYY").value
    }
  })

const groupedData = lodash.groupBy(normalizedData, "tingkat")

const tahunAjaran = computed(() => store.tahunAjaran)

const labelTahun = (kode) =>
  tahunAjaran.value.find((item) => item.kode === kode).label

const data = {
  labels: ["Wilayah", "Nasional", "Internasional"],

  yLabel: "Jumlah",

  datasets: [
    {
      data: [
        groupedData.wilayah.length,
        groupedData.nasional.length,
        groupedData.internasional.length
      ]
    }
  ]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
