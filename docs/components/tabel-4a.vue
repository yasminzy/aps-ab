<script setup>
import { ref } from "vue"
import lodash from "lodash"
import Tabel4aTr from "./tabel-4a-tr.vue"
import Tabel4aTfoot from "./tabel-4a-tfoot.vue"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const average = (array) => array.reduce((a, b) => a + b) / array.length

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

const text = [
  "a. Biaya Dosen (Gaji, Honor)",
  "b. Biaya Tenaga Kependidikan (Gaji, Honor)",
  "c. Biaya Operasional Pembelajaran (Bahan dan Peralatan Habis Pakai)",
  "d. Biaya Operasional Tidak Langsung (Listrik, Gas, Air, Pemeliharaan Gedung, Pemeliharaan Sarana, Uang Lembur, Telekomunikasi, Konsumsi, Transport Lokal, Pajak, Asuransi, dll.)",
  "Biaya operasional kemahasiswaan (penalaran, minat, bakat, dan kesejahteraan).",
  "Biaya Penelitian",
  "Biaya PkM",
  "Biaya Investasi SDM",
  "Biaya Investasi Sarana",
  "Biaya Investasi Prasarana"
]

const normalizedData = lodash
  .orderBy(data.value, ["jenis"], ["asc"])
  .map((item, index) => {
    return {
      ...item,
      no: item.jenis < 5 ? null : item.jenis - 3,
      jenisPenggunaan: text[index],
      uppsAvg: average([item.upps["ts-2"], item.upps["ts-1"], item.upps["ts"]]),
      prodiAvg: average([
        item.prodi["ts-2"],
        item.prodi["ts-1"],
        item.prodi["ts"]
      ])
    }
  })

const part1 = normalizedData.filter((item) => item.jenis < 6)
const part2 = normalizedData.filter((item) => item.jenis > 5 && item.jenis < 8)
const part3 = normalizedData.filter((item) => item.jenis > 7 && item.jenis < 11)
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Jenis Penggunaan</th>
        <th colspan="4">Unit Pengelola Program Studi (Rp)</th>
        <th colspan="4">Program Studi (Rp)</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="10" />
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Biaya Operasional Pendidikan</td>
        <CellMute :n="1" colspan="8" />
      </tr>

      <Tabel4aTr :data="part1" />
      <Tabel4aTr :data="part2" />
      <Tabel4aTr :data="part3" />
    </tbody>

    <Tabel4aTfoot :data="normalizedData" />
  </table>
</template>
