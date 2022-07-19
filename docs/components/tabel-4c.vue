<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["nama"], ["asc"])

const row = [
  "No",
  "Nama Prasarana",
  "Fungsi",
  "Jumlah Unit",
  "Total Luas",
  "Milik Sendiri/ Sewa"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2" v-for="(item, index) in row" :key="index">
          {{ item }}
        </th>

        <th colspan="2">Kondisi <sup>*</sup></th>
      </tr>

      <tr>
        <th>Terawat</th>
        <th>Tidak Terawat</th>
      </tr>

      <ColNum :n="8" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td class="text-left">{{ item.nama }}</td>
        <td class="text-left">{{ item.fungsi }}</td>

        <td>{{ item.unit }}</td>
        <td>{{ item.luas }} m<sup>2</sup></td>

        <td>{{ item.kepemilikan === "sendiri" ? "Milik sendiri" : "Sewa" }}</td>

        <td>{{ item.kondisi === "terawat" ? "✅" : "" }}</td>
        <td>{{ item.kondisi === "tidak-terawat" ? "✅" : "" }}</td>
      </tr>
    </tbody>
  </table>
</template>
