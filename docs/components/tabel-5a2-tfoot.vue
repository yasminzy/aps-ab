<script setup>
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const sum = (array) => lodash.sum(array)

const average = (array) => array.reduce((a, b) => a + b) / array.length

const mhsTs2 = props.data.map((item) => item.mhs["ts-2"])
const mhsTs1 = props.data.map((item) => item.mhs["ts-1"])
const mhsTs = props.data.map((item) => item.mhs.ts)

const pertemuanTs2 = props.data.map((item) => item.pertemuan["ts-2"])
const pertemuanTs1 = props.data.map((item) => item.pertemuan["ts-1"])
const pertemuanTs = props.data.map((item) => item.pertemuan.ts)

const lamaTaTs2 = props.data.map((item) => item.lamaTa["ts-2"])
const lamaTaTs1 = props.data.map((item) => item.lamaTa["ts-1"])
const lamaTaTs = props.data.map((item) => item.lamaTa.ts)
</script>

<template>
  <tfoot>
    <tr>
      <td colspan="2">Jumlah</td>
      <td v-for="(item, index) in 2" :key="index"></td>

      <td>{{ sum(mhsTs2) }}</td>
      <td>{{ sum(mhsTs1) }}</td>
      <td>{{ sum(mhsTs) }}</td>

      <td>{{ sum(pertemuanTs2) }}</td>
      <td>{{ sum(pertemuanTs1) }}</td>
      <td>{{ sum(pertemuanTs) }}</td>

      <td>{{ sum(lamaTaTs2) }}</td>
      <td>{{ sum(lamaTaTs1) }}</td>
      <td>{{ sum(lamaTaTs) }}</td>
    </tr>

    <tr>
      <td colspan="2">Rata-Rata</td>
      <td v-for="(item, index) in 2" :key="index"></td>

      <td>{{ average(mhsTs2) }}</td>
      <td>{{ average(mhsTs1) }}</td>
      <td>{{ average(mhsTs) }}</td>

      <td>{{ average(pertemuanTs2) }}</td>
      <td>{{ average(pertemuanTs1) }}</td>
      <td>{{ average(pertemuanTs) }}</td>

      <td>{{ average(lamaTaTs2) }}</td>
      <td>{{ average(lamaTaTs1) }}</td>
      <td>{{ average(lamaTaTs) }}</td>
    </tr>
  </tfoot>
</template>
