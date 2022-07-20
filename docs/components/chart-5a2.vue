<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-5a2"))

const normalizedData = lodash.orderBy(
  frontmatter.value[0].data,
  ["status.jabatan", "status.pendidikan", "nama"],
  ["desc", "desc", "asc"]
)

const tahunAjaran = computed(() => store.tahunAjaran)

const labelTahun = (kode) =>
  tahunAjaran.value.find((item) => item.kode === kode).label

const tahun = Object.keys(normalizedData[0].mhs)

const sum = (array) => lodash.sum(array)

const mhsTs2 = normalizedData.map((item) => item.mhs["ts-2"])
const mhsTs1 = normalizedData.map((item) => item.mhs["ts-1"])
const mhsTs = normalizedData.map((item) => item.mhs.ts)

const data = {
  labels: tahun.map((item) => labelTahun(item)),

  yLabel: "Jumlah",

  datasets: [
    {
      data: [sum(mhsTs2), sum(mhsTs1), sum(mhsTs)]
    }
  ]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
