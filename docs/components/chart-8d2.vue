<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-8d2"))

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
    "Rendah",
    "Sedang",
    "Tinggi"
  ],

  yLabel: "Jumlah Lulusan",

  datasets: normalizedData.map((item) => {
    return {
      label: labelTahun(item.tahun),

      data: [
        item.lulusan,
        item.lulusanTerlacak,
        item.lulusanTerlacakKesesuaianBidangKerja.rendah,
        item.lulusanTerlacakKesesuaianBidangKerja.sedang,
        item.lulusanTerlacakKesesuaianBidangKerja.tinggi
      ]
    }
  })
}
</script>

<template>
  <ChartBar :data="data" />
</template>
