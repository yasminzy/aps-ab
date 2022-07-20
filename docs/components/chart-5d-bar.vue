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

const labels = ["Keandalan", "Daya tanggap", "Kepastian", "Empati", "Tangible"]
const kepuasan = ["Sangat baik", "Baik", "Cukup", "Kurang"]
const kode = ["sangatBaik", "baik", "cukup", "kurang"]

const getData = (tingkat) =>
  normalizedData.map((item) => item.kepuasan[tingkat])

const data = {
  labels,

  yLabel: "Tingkat Kepuasan (%)",

  datasets: kepuasan.map((item, index) => {
    return {
      label: item,

      data: getData(kode[index])
    }
  })
}
</script>

<template>
  <ChartBar :data="data" />
</template>
