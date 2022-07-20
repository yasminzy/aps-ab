<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-5d"))

const normalizedData = lodash.orderBy(
  frontmatter.value[0].data,
  ["aspek"],
  ["asc"]
)

const labels = ["Sangat Baik", "Baik", "Cukup", "Kurang"]

const getDatasets = (aspek) =>
  Object.values(
    normalizedData.filter((item) => item.aspek === aspek)[0].kepuasan
  )

const data1 = {
  title: "Reliability",
  labels,
  datasets: getDatasets(1)
}

const data2 = {
  title: "Responsiveness",
  labels,
  datasets: getDatasets(2)
}

const data3 = {
  title: "Assurance",
  labels,
  datasets: getDatasets(3)
}

const data4 = {
  title: "Empathy",
  labels,
  datasets: getDatasets(4)
}

const data5 = {
  title: "Tangible",
  labels,
  datasets: getDatasets(5)
}
</script>

<template>
  <div class="grid sm:grid-cols-2">
    <ChartPie :data="data1" />
    <ChartPie :data="data2" />
    <ChartPie :data="data3" />
    <ChartPie :data="data4" />
    <ChartPie :data="data5" />
  </div>
</template>
