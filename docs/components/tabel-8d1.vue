<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["tahun"], ["desc"])

const sum = (name) => lodash.sumBy(normalizedData, name)

const row = ["WT < 3 bulan", "3 ≤ WT ≤ 6 bulan", "WT > 6 bulan"]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">Tahun Lulus</th>
        <th rowspan="2">Jumlah Lulusan</th>
        <th rowspan="2">Jumlah Lulusan yang Terlacak</th>
        <th rowspan="2">Jumlah Lulusan yang Dipesan Sebelum Lulus</th>
        <th colspan="3">
          Jumlah Lulusan Terlacak dengan Waktu Tunggu Mendapatkan Pekerjaan
        </th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="7" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="uppercase">{{ item.tahun }}</td>

        <td>{{ item.lulusan }}</td>
        <td>{{ item.lulusanTerlacak }}</td>
        <td>{{ item.lulusanDipesanSebelumLulus }}</td>
        <td>{{ item.lulusanTerlacakWt.pendek }}</td>
        <td>{{ item.lulusanTerlacakWt.sedang }}</td>
        <td>{{ item.lulusanTerlacakWt.panjang }}</td>
      </tr>
    </tbody>

    <tfoot>
      <td>Jumlah</td>

      <td>{{ sum("lulusan") }}</td>
      <td>{{ sum("lulusanTerlacak") }}</td>
      <td>{{ sum("lulusanDipesanSebelumLulus") }}</td>

      <td>{{ sum("lulusanTerlacakWt.pendek") }}</td>
      <td>{{ sum("lulusanTerlacakWt.sedang") }}</td>
      <td>{{ sum("lulusanTerlacakWt.panjang") }}</td>
    </tfoot>
  </table>
</template>
