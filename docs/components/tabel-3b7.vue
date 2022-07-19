<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(
  data.value,
  ["nama", "namaProduk"],
  ["asc", "asc"]
)

const row = [
  "No",
  "Nama Dosen",
  "Nama Produk/ Jasa",
  "Deskripsi Produk/ Jasa",
  "Bukti"
]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="5" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td>{{ item.nama }}</td>
        <td>{{ item.namaProduk }}</td>
        <td>{{ item.deskripsiProduk }}</td>
        <td>{{ item.bukti }}</td>
      </tr>
    </tbody>

    <tfoot class="text-center">
      <td colspan="2">Jumlah</td>

      <td>{{ normalizedData.length }}</td>

      <CellMute :n="2" />
    </tfoot>
  </table>
</template>
