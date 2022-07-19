<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(
  data.value,
  ["semester", "kode"],
  ["asc", "asc"]
)

const sum = (name) => lodash.sumBy(normalizedData, name)

const row = [
  "Kuliah/ Responsi/ Tutorial",
  "Seminar",
  "Praktikum/ Praktik/ Praktik Lapangan",
  "Sikap",
  "Pengetahuan",
  "Keterampillan Umum",
  "Keterampilan Khusus"
]

const semester = ["I", "II", "III", "IV", "V", "VI"]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Semester</th>
        <th rowspan="2">Kode Mata Kuliah</th>
        <th rowspan="2">Nama Mata Kuliah</th>
        <th rowspan="2">Mata Kuliah Kompetensi <sup>1)</sup></th>
        <th colspan="3">Bobot Kredit (sks)</th>
        <th rowspan="2">Konversi Kredit ke Jam <sup>2)</sup></th>
        <th colspan="4">Capaian Pembelajaran <sup>3)</sup></th>
        <th rowspan="2">Dokumen Rencana Pembelajaran <sup>4)</sup></th>
        <th rowspan="2">Unit Penyelenggara</th>
      </tr>

      <tr>
        <td v-for="(item, index) in row">{{ item }}</td>
      </tr>

      <ColNum :n="15" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td>{{ semester[item.semester - 1] }}</td>

        <td class="text-left">{{ item.kode }}</td>
        <td class="text-left">{{ item.nama }}</td>

        <td>{{ item.matkulKompetensi ? "✅" : "" }}</td>

        <td>{{ item.sks.kuliah }}</td>
        <td>{{ item.sks.seminar }}</td>
        <td>{{ item.sks.praktik }}</td>

        <td>{{ item.konversiKreditKeJam }}</td>

        <td>{{ item.cpl.sikap ? "✅" : "" }}</td>
        <td>{{ item.cpl.pengetahuan ? "✅" : "" }}</td>
        <td>{{ item.cpl.keterampilanUmum ? "✅" : "" }}</td>
        <td>{{ item.cpl.keterampilanKhusus ? "✅" : "" }}</td>

        <td>{{ item.dokumen }}</td>
        <td>{{ item.penyelenggara }}</td>
      </tr>
    </tbody>

    <tfoot>
      <td colspan="4" class="text-center">Jumlah</td>

      <td>{{ sum("matkulKompetensi") }}</td>

      <td>{{ sum("sks.kuliah") }}</td>
      <td>{{ sum("sks.seminar") }}</td>
      <td>{{ sum("sks.praktik") }}</td>

      <td>{{ sum("konversiKreditKeJam") }}</td>

      <CellMute :n="6" />
    </tfoot>
  </table>
</template>
