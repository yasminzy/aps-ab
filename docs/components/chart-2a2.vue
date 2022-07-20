<script setup>
import { computed } from "vue"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-2a2"))

const normalizedData = lodash.orderBy(
  frontmatter.value[0].data,
  ["tahun"],
  ["desc"]
)

const tahunAjaran = computed(() => store.tahunAjaran)

const labelTahun = (kode) =>
  tahunAjaran.value.find((item) => item.kode === kode).label

const data = {
  labels: normalizedData.map((item) => labelTahun(item.tahun)),

  yLabel: "Jumlah",

  datasets: [
    {
      label: "Daya tampung",
      data: normalizedData.map((item) => item.dayaTampung)
    },
    {
      label: "Pendaftar",
      data: normalizedData.map((item) => item.calonMhs.pendaftar)
    },
    {
      label: "Lulus seleksi",
      data: normalizedData.map((item) => item.calonMhs.lulus)
    },
    {
      label: "Jumlah diterima (reguler)",
      data: normalizedData.map((item) => item.mhsBaru.reguler)
    },
    {
      label: "Jumlah mahasiswa aktif",
      data: normalizedData.map((item) => item.mhsAktif.reguler)
    }
  ]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
