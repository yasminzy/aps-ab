<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["jenis"], ["asc"])

const row = ["S3", "S2", "S1", "D4", "D3", "D2", "D1", "SMA/ SMK"]

const jenisTendik = [
  "Pustakawan *",
  "Laboran/ Teknisi/ Analis/ Operator/ Programmer",
  "Administrasi",
  "Lainnya"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Jenis Tenaga Kependidikan</th>
        <th colspan="8">
          Jumlah Tenaga Kependidikan dengan Pendidikan Terakhir
        </th>
        <th rowspan="2">Unit Kerja</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="11" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td class="text-left">{{ jenisTendik[item.jenis - 1] }}</td>

        <td>{{ item.pendidikan.s3 }}</td>
        <td>{{ item.pendidikan.s2 }}</td>
        <td>{{ item.pendidikan.s1 }}</td>
        <td>{{ item.pendidikan.d4 }}</td>
        <td>{{ item.pendidikan.d3 }}</td>
        <td>{{ item.pendidikan.d2 }}</td>
        <td>{{ item.pendidikan.d1 }}</td>

        <CellMute v-if="!index" :n="1" />

        <td v-else>
          {{ item.pendidikan.sma }}
        </td>

        <td>{{ item.unit }}</td>
      </tr>
    </tbody>

    <tfoot class="text-center">
      <td colspan="2">Total</td>
      <td v-for="(item, index) in 9" :key="index"></td>
    </tfoot>
  </table>
</template>
