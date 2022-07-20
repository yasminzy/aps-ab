<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["pembiayaan"], ["asc"])

const row = ["TS-2", "TS-1", "TS"]

const sumberPembiayaan = [
  "a) Perguruan Tinggi<br/>b) Mandiri <sup>2)</sup>",
  "Lembaga Dalam Negeri (di luar PT)",
  "Lembaga Luar Negeri"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Sumber Pembiayaan</th>
        <th colspan="3">Jumlah Judul pkm</th>
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

        <td v-if="index" class="text-left">
          {{ sumberPembiayaan[item.pembiayaan - 1] }}
        </td>
        <td v-else class="text-left">
          a) Perguruan Tinggi<br />b) Mandiri <sup>2)</sup>
        </td>

        <td>{{ item.pkm["ts-2"] }}</td>
        <td>{{ item.pkm["ts-1"] }}</td>
        <td>{{ item.pkm.ts }}</td>

        <td></td>
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
