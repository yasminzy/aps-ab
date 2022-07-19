<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["nama"], ["asc"])

const row = [
  "TS-2",
  "TS-1",
  "TS",
  "Rata-Rata",
  "TS-2",
  "TS-1",
  "TS",
  "Rata-Rata"
]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th rowspan="3">No</th>
        <th rowspan="3">Nama Dosen <sup>2)</sup></th>
        <th colspan="8">Jumlah Mahasiswa yang Dibimbing</th>
        <th rowspan="3">
          Rata-rata Jumlah Bimbingan di semua Program/ Semester <sup>5)</sup>
        </th>
        <th colspan="3">Nomor SK Penugasan Pembimbing</th>
      </tr>

      <tr>
        <th colspan="4">pada PS yang Diakreditasi <sup>3)</sup></th>
        <th colspan="4">pada PS Lain di PT <sup>4)</sup></th>
        <th rowspan="2">TS-2</th>
        <th rowspan="2">TS-1</th>
        <th rowspan="2">TS</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="14" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td>{{ item.nama }}</td>

        <td>{{ item.mhsBimbingan["ts-2"] }}</td>
        <td>{{ item.mhsBimbingan["ts-1"] }}</td>
        <td>{{ item.mhsBimbingan.ts }}</td>

        <td></td>

        <td>{{ item.mhsBimbinganDiPsLainDiPt["ts-2"] }}</td>
        <td>{{ item.mhsBimbinganDiPsLainDiPt["ts-1"] }}</td>
        <td>{{ item.mhsBimbinganDiPsLainDiPt.ts }}</td>

        <td></td>
        <td></td>

        <td>{{ item.sk["ts-2"] }}</td>
        <td>{{ item.sk["ts-1"] }}</td>
        <td>{{ item.sk.ts }}</td>
      </tr>
    </tbody>
  </table>
</template>
