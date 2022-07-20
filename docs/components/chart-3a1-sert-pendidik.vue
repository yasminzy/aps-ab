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

const flatData = normalizedData.map((item) => {
  return {
    sertifikat: item.noSertifikatPendidik.length ? true : false
  }
})

const sum = (kepemilikan) =>
  lodash.groupBy(flatData, "sertifikat")[kepemilikan]?.length || 0

const data = {
  labels: ["Bersertifikat", "Belum Bersertifikat"],

  yLabel: "Jumlah",

  datasets: [
    {
      data: [sum("true"), sum("false")]
    }
  ]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
