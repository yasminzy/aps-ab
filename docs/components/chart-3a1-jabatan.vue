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

const jabatanAkademik = computed(() => store.jabatanAkademik)
const labelJabatan = (kode) =>
  jabatanAkademik.value.find((item) => item.kode === kode).label

const groupedData = lodash.groupBy(normalizedData, "jabatan")
const jabatan = Object.keys(groupedData)
const sum = (jabatan) => groupedData[jabatan].length

let dataJabatan = []
for (let i = 0; i < jabatan.length; i++) {
  dataJabatan.push(sum(jabatan[i]))
}

const data = {
  labels: jabatan.map((item) => labelJabatan(parseInt(item))),

  yLabel: "Jumlah",

  datasets: [{ data: dataJabatan }]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
