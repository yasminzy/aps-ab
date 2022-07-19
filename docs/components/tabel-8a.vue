<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["tahun"], ["desc"])

const row = ["Min.", "Rata-Rata", "Maks."]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Tahun Lulus</th>
        <th rowspan="2">Jumlah Lulusan</th>
        <th colspan="3">Indeks Prestasi Kumulatif (IPK)</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="6" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td class="uppercase">{{ item.tahun }}</td>

        <td>{{ item.lulusan }}</td>
        <td>{{ item.ipk.min }}</td>
        <td>{{ item.ipk.avg }}</td>
        <td>{{ item.ipk.max }}</td>
      </tr>
    </tbody>
  </table>
</template>
