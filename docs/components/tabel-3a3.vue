<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["nama"], ["asc"])

const row = [
  "PS yang Diakreditasi",
  "PS Lain di dalam PT",
  "PS Lain di luar PT"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="3">No</th>
        <th rowspan="3">Nama Dosen (DT)</th>
        <th rowspan="3">DTPS <sup>1)</sup></th>
        <th colspan="6">
          Ekuivalen Waktu Mengajar Penuh (EWMP) pada saat TS dalam satuan kredit
          semester (sks)
        </th>
        <th rowspan="3">Jumlah per Tahun (sks)</th>
        <th rowspan="3">Jumlah per Semester (sks)</th>
      </tr>

      <tr>
        <th colspan="3">Pendidikan: Pembelajaran dan Pembimbingan</th>
        <th rowspan="2">Penelitian</th>
        <th rowspan="2">PkM</th>
        <th rowspan="2">Tugas Tambahan dan/atau Penunjang</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="11" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td class="text-left">{{ item.nama }}</td>

        <td>{{ item.dtps ? "✅" : "" }}</td>

        <td>{{ item.ewmp.pendidikan }}</td>
        <td>{{ item.ewmp.pendidikanDiPsLainDalamPt }}</td>
        <td>{{ item.ewmp.pendidikanDiPsLainLuarPt }}</td>
        <td>{{ item.ewmp.penelitian }}</td>
        <td>{{ item.ewmp.pkm }}</td>
        <td>{{ item.ewmp.tugasTambahan }}</td>

        <td></td>
        <td></td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="9" class="text-right">Rata-Rata DT</td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td colspan="9" class="text-right">Rata-Rata DTPS</td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</template>
