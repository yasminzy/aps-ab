<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["tahun"], ["desc"])

const sum = (name) => lodash.sumBy(normalizedData, name)

const row = [
  "Lokal/ Wilayah/ Berwirausaha tidak Berizin",
  "Nasional/ Berwirausaha Berizin",
  "Multinasional/ Internasional"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">Tahun Lulus</th>
        <th rowspan="2">Jumlah Lulusan</th>
        <th rowspan="2">Jumlah Lulusan yang Memberi Tanggapan</th>
        <th rowspan="2">Jumlah Lulusan yang Terlacak</th>
        <th colspan="3">
          Jumlah Lulusan Terlacak yang Bekerja berdasarkan Tingkat/ Ukuran
          Tempat Kerja/ Berwirausaha
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
        <td>{{ item.lulusanPenanggap }}</td>
        <td>{{ item.lulusanTerlacak }}</td>

        <td>{{ item.lulusanTerlacakTingkatTempatKerja.wilayah }}</td>
        <td>{{ item.lulusanTerlacakTingkatTempatKerja.nasional }}</td>
        <td>{{ item.lulusanTerlacakTingkatTempatKerja.internasional }}</td>
      </tr>
    </tbody>

    <tfoot>
      <td>Jumlah</td>

      <td>{{ sum("lulusan") }}</td>
      <td>{{ sum("lulusanPenanggap") }}</td>
      <td>{{ sum("lulusanTerlacak") }}</td>

      <td>{{ sum("lulusanTerlacakTingkatTempatKerja.wilayah") }}</td>
      <td>{{ sum("lulusanTerlacakTingkatTempatKerja.nasional") }}</td>
      <td>{{ sum("lulusanTerlacakTingkatTempatKerja.internasional") }}</td>
    </tfoot>
  </table>
</template>
