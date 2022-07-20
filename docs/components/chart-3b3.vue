<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-3b3"))

const normalizedData = lodash.orderBy(
  frontmatter.value[0].data,
  ["pembiayaan"],
  ["asc"]
)

const tahunAjaran = computed(() => store.tahunAjaran)

const labelTahun = (kode) =>
  tahunAjaran.value.find((item) => item.kode === kode).label

const tahun = Object.keys(normalizedData[0].pkm)

const data = {
  labels: tahun.map((item) => labelTahun(item)),

  yLabel: "Jumlah",

  datasets: [
    {
      data: [
        lodash.sumBy(normalizedData, "pkm['ts-2']"),
        lodash.sumBy(normalizedData, "pkm['ts-1']"),
        lodash.sumBy(normalizedData, "pkm.ts")
      ]
    }
  ]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
