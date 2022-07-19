<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["jenis"], ["asc"])

const row = ["TS-2", "TS-1", "TS"]

const jenisPublikasi = [
  "Publikasi di jurnal nasional tidak terakreditasi",
  "Publikasi di jurnal nasional terakreditasi",
  "Publikasi di jurnal internasional",
  "Publikasi di jurnal internasional bereputasi",
  "Publikasi di seminar wilayah/ lokal/ perguruan tinggi",
  "Publikasi di seminar nasional",
  "Publikasi di seminar internasional",
  "Pagelaran/ pameran/ presentasi dalam forum di tingkat wilayah",
  "Pagelaran/ pameran/ presentasi dalam forum di tingkat nasional",
  "Pagelaran / pameran/ presentasi dalam forum di tingkat internasional"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Jenis Publikasi</th>
        <th colspan="3">Jumlah Judul</th>
        <th rowspan="2">Jumlah</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="6" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td class="text-left">{{ jenisPublikasi[item.jenis - 1] }}</td>

        <td>{{ item.jumlah["ts-2"] }}</td>
        <td>{{ item.jumlah["ts-1"] }}</td>
        <td>{{ item.jumlah.ts }}</td>

        <td>N<sub>x</sub>=</td>
      </tr>
    </tbody>

    <tfoot>
      <td colspan="2" class="text-center">Jumlah</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tfoot>
  </table>
</template>
