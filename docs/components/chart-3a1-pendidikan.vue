<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-3a1"))

const normalizedData = lodash.orderBy(
  frontmatter.value[0].data,
  ["jabatan", "nama"],
  ["desc", "asc"]
)

const flatData = normalizedData
  .map((item) => item.namaProdi)
  .map((item) => {
    return {
      pendidikan: item.s3 ? "s3" : "s2"
    }
  })

const sum = (tingkat) => lodash.groupBy(flatData, "pendidikan")[tingkat].length

const data = {
  labels: ["S2", "S3"],

  yLabel: "Jumlah",

  datasets: [
    {
      data: [sum("s2"), sum("s3")]
    }
  ]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
