<script setup>
import { computed } from "vue"
import { useDateFormat } from "@vueuse/core"
import { useStore } from "../.vitepress/stores/charts.js"
import lodash from "lodash"

const store = useStore()
const frontmatter = computed(() => store.getFrontmatter("tabel-3a3"))

const normalizedData = lodash.orderBy(
  frontmatter.value[0].data,
  ["nama"],
  ["asc"]
)

const flatData = normalizedData.map((item) => {
  return {
    pendidikan:
      item.ewmp.pendidikan +
      item.ewmp.pendidikanDiPsLainDalamPt +
      item.ewmp.pendidikanDiPsLainLuarPt,
    penelitian: item.ewmp.penelitian,
    pkm: item.ewmp.pkm,
    tugasTambahan: item.ewmp.tugasTambahan
  }
})

const sum = (jenis) => lodash.sumBy(flatData, jenis)

const data = {
  labels: ["Pendidikan", "Penelitian", "PkM", "Tugas Tambahan"],

  yLabel: "Jam",

  datasets: [
    {
      data: [
        sum("pendidikan"),
        sum("penelitian"),
        sum("pkm"),
        sum("tugasTambahan")
      ]
    }
  ]
}
</script>

<template>
  <ChartBar :data="data" />
</template>
