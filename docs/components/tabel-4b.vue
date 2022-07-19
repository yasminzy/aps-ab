<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash
  .orderBy(data.value, ["namaLab"], ["asc"])
  .map((item) => {
    return { ...item }
  })

for (let i = 0; i < normalizedData.length; i++) {
  normalizedData[i].alat = lodash.orderBy(
    normalizedData[i].alat,
    ["namaAlat"],
    ["asc"]
  )
}

const row = [
  "Standar Minimal",
  "Yang Dimiliki UPPS",
  "Sendiri",
  "Sewa",
  "Terawat",
  "Tidak Terawat",
  "Ada",
  "Tidak Ada"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Nama Laboratorium</th>
        <th rowspan="2">Jumlah Lab.</th>
        <th rowspan="2">Nama Alat/ Peraga</th>
        <th colspan="2">Jumlah Alat</th>
        <th colspan="2">Kepemilikan</th>
        <th colspan="2">Kondisi</th>
        <th colspan="2">Logbook <sup>1)</sup></th>
        <th rowspan="2">
          Rata-Rata Waktu Penggunaan (Jam/Minggu) <sup>2)</sup>
        </th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">
          {{ item }}
        </th>
      </tr>

      <ColNum :n="13" />
    </thead>

    <tbody v-for="(superitem, index) in normalizedData" :key="index">
      <tr v-for="(item, idx) in superitem.alat" :key="idx">
        <td v-if="!idx" :rowspan="superitem.alat.length">
          {{ index + 1 }}
        </td>

        <td v-if="!idx" :rowspan="superitem.alat.length">
          {{ superitem.namaLab }}
        </td>

        <td v-if="!idx" :rowspan="superitem.alat.length">
          {{ superitem.jumlahLab }}
        </td>

        <td>{{ item.namaAlat }}</td>
        <td>{{ item.jumlahAlat.min }}</td>
        <td>{{ item.jumlahAlat.yangDimiliki }}</td>

        <td>{{ item.kepemilikan === "sendiri" ? "✅" : "" }}</td>
        <td>{{ item.kepemilikan === "sewa" ? "✅" : "" }}</td>

        <td>{{ item.kondisi === "terawat" ? "✅" : "" }}</td>
        <td>{{ item.kondisi === "tidak-terawat" ? "✅" : "" }}</td>

        <td>{{ item.logbook ? "✅" : "" }}</td>
        <td>{{ !item.logbook ? "✅" : "" }}</td>

        <td>{{ item.waktu }}</td>
      </tr>
    </tbody>
  </table>
</template>
