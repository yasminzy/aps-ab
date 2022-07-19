<script setup>
import { ref } from "vue"
import { useDateFormat } from "@vueuse/core"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash
  .orderBy(data.value, ["waktu", "nama"], ["desc", "asc"])
  .map((item) => {
    return {
      ...item,
      waktu: useDateFormat(item.waktu, "DD/MM/YYYY").value
    }
  })

const kolom = ["wilayah", "nasional", "internasional"]

let sumPerKolom = []

for (let i = 0; i < kolom.length; i++) {
  sumPerKolom.push(
    normalizedData.filter((item) => item.tingkat === kolom[i]).length
  )
}

const row = ["Lokal/ Wilayah", "Nasional", "Internasional"]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Nama Kegiatan</th>
        <th rowspan="2">Waktu Perolehan (HH/BB/TTTT)</th>
        <th colspan="3">Tingkat <sup>1)</sup></th>
        <th rowspan="2">Prestasi yang Dicapai</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="7" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td class="text-left">{{ item.nama }}</td>

        <td>{{ item.waktu }}</td>

        <td>{{ item.tingkat === "wilayah" ? "✅" : "" }}</td>
        <td>{{ item.tingkat === "nasional" ? "✅" : "" }}</td>
        <td>{{ item.tingkat === "internasional" ? "✅" : "" }}</td>

        <td>{{ item.prestasi }}</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="3">Jumlah</td>

        <td>{{ sumPerKolom[0] }}</td>
        <td>{{ sumPerKolom[1] }}</td>
        <td>{{ sumPerKolom[2] }}</td>

        <CellMute :n="1" />
      </tr>
    </tfoot>
  </table>
</template>
