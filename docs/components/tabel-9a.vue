<script setup>
import { ref } from "vue"
import { useDateFormat } from "@vueuse/core"
import lodash from "lodash"
import Tabel9aTfoot from "./tabel-9a-tfoot.vue"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash
  .orderBy(data.value, ["nama"], ["asc"])
  .map((item) => {
    return {
      ...item,
      tanggal: useDateFormat(item.tanggal, "DD/MM/YYYY").value
    }
  })

const row = [
  "No",
  "Nama Standar (SNDIkti)",
  "Ketersediaan Standar (P)",
  "Pelaksanaan Standar (P)",
  "Monitoring Evaluasi dan Audit Mutu Internal (E)",
  "Umpan Balik Audit Mutu Internal (P)",
  "Tindak Lanjut Audit Mutu Internal (P)",
  "Tanggal Audit Mutu Internal"
]

const nama = [
  "Standar Kompetensi Lulusan",
  "Standar Isi Pembelajaran",
  "Standar Proses Pembelajaran",
  "Standar Penilaian Pendidikan Pembelajaran",
  "Standar Dosen dan Tenaga Kependidikan",
  "Standar Sarana dan Prasarana Pembelajaran",
  "Standar Pengelolaan",
  "Standar Pembiayaan Pembelajaran",
  "Standar Hasil Penelitian",
  "Standar Isi Penelitian",
  "Standar Proses Penelitian",
  "Standar Penilaian Penelitian",
  "Standar Peneliti",
  "Standar Sarana dan Prasaran Penelitian",
  "Standar Pengelolaan Penelitian",
  "Standar Pendanaan dan Pembiayaan Penelitian",
  "Standar Hasil PkM",
  "Standar Isi PkM",
  "Standar Proses PkM",
  "Standar Penilaian PkM",
  "Standar Pelaksana PkM",
  "Standar Sarana dan Prasarana PkM",
  "Standar Pengelolaan PkM",
  "Standar Pendanaan dan Pembiayaan PkM"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="8" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td class="text-left">{{ nama[item.nama - 1] }}</td>

        <td>{{ item.ketersediaan ? "Ada" : "Tidak Ada" }}</td>
        <td>{{ item.pelaksanaan ? "Ada" : "Tidak Ada" }}</td>
        <td>{{ item.monev ? "Ada" : "Tidak Ada" }}</td>
        <td>{{ item.umpanBalik ? "Ada" : "Tidak Ada" }}</td>
        <td>{{ item.tindakLanjut ? "Ada" : "Tidak Ada" }}</td>

        <td>{{ item.tanggal }}</td>
      </tr>
    </tbody>

    <Tabel9aTfoot :data="normalizedData" />
  </table>
</template>
