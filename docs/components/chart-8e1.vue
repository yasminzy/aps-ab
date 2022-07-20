<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-8e1"))

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
  labels: [
    "Jumlah lulusan",
    "Jumlah lulusan yang terlacak",
    "Wilayah",
    "Nasional",
    "Internasional"
  ],

  yLabel: "Jumlah Lulusan",

  datasets: normalizedData.map((item) => {
    return {
      label: labelTahun(item.tahun),

      data: [
        item.lulusan,
        item.lulusanTerlacak,
        item.lulusanTerlacakTingkatTempatKerja.wilayah,
        item.lulusanTerlacakTingkatTempatKerja.nasional,
        item.lulusanTerlacakTingkatTempatKerja.internasional
      ]
    }
  })
}
</script>

<template>
  <ChartBar :data="data" />
</template>
