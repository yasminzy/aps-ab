<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-8a"))

const normalizedData = lodash.orderBy(
  frontmatter.value[0].data,
  ["tahun"],
  ["desc"]
)

const tahunAjaran = computed(() => store.tahunAjaran)

const labelTahun = (kode) => {
  let str = tahunAjaran.value.find((item) => item.kode === kode).label

  let n = str.lastIndexOf("/")
  return str.substring(n + 1)
}

const data = {
  labels: ["Terendah", "Rata-Rata", "Tertinggi"],

  yLabel: "IPK",

  datasets: normalizedData.map((item, index) => {
    return {
      label: labelTahun(item.tahun),

      data: Object.values(normalizedData[index].ipk)
    }
  })
}
</script>

<template>
  <ChartBar :data="data" />
</template>
