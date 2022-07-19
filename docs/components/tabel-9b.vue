<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["jenis"], ["asc"])

const row = ["No", "Jenis Dokumen Penjaminan Mutu", "Nomor dan Tanggal Dokumen"]

const jenis = [
  "Dokumen/Buku Kebijakan SPMI",
  "Dokumen/Buku Manual SPMI",
  "Dokumen/Buku Standar SPMI",
  "Dokumen/Buku Formulir SPMI"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="3" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td class="text-left">{{ jenis[item.jenis - 1] }}</td>

        <td class="text-left">{{ item.keterangan }}</td>
      </tr>
    </tbody>
  </table>
</template>
