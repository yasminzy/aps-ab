<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-8d1"))

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
    "Jumlah Lulusan",
    "Jumlah Lulusan yang Terlacak",
    "Jumlah Lulusan yang Dipesan Sebelum Lulus",
    "WT < 3 Bulan",
    "3 ≤ WT ≤ 6 Bulan",
    "WT > 6 bulan"
  ],

  yLabel: "Jumlah Lulusan",

  datasets: normalizedData.map((item) => {
    return {
      label: labelTahun(item.tahun),

      data: [
        item.lulusan,
        item.lulusanTerlacak,
        item.lulusanDipesanSebelumLulus,
        item.lulusanTerlacakWt.pendek,
        item.lulusanTerlacakWt.sedang,
        item.lulusanTerlacakWt.panjang
      ]
    }
  })
}
</script>

<template>
  <ChartBar :data="data" />
</template>
