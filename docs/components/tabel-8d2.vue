<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["tahun"], ["desc"])

const sum = (name) => lodash.sumBy(normalizedData, name)

const row = ["Rendah", "Sedang", "Tinggi"]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">Tahun Lulus</th>
        <th rowspan="2">Jumlah Lulusan</th>
        <th rowspan="2">Jumlah Lulusan yang Terlacak</th>
        <th colspan="3">
          Jumlah Lulusan Terlacak dengan Tingkat Kesesuaian Bidang Kerja
        </th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">
          {{ item }} <sup>{{ index + 1 }})</sup>
        </th>
      </tr>

      <ColNum :n="6" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="uppercase">{{ item.tahun }}</td>

        <td>{{ item.lulusan }}</td>
        <td>{{ item.lulusanTerlacak }}</td>

        <td>
          {{ item.lulusanTerlacakKesesuaianBidangKerja.rendah }}
        </td>
        <td>
          {{ item.lulusanTerlacakKesesuaianBidangKerja.sedang }}
        </td>
        <td>
          {{ item.lulusanTerlacakKesesuaianBidangKerja.tinggi }}
        </td>
      </tr>
    </tbody>

    <tfoot>
      <td>Jumlah</td>

      <td>{{ sum("lulusan") }}</td>
      <td>{{ sum("lulusanTerlacak") }}</td>

      <td>
        {{ sum("lulusanTerlacakKesesuaianBidangKerja.rendah") }}
      </td>
      <td>
        {{ sum("lulusanTerlacakKesesuaianBidangKerja.sedang") }}
      </td>
      <td>
        {{ sum("lulusanTerlacakKesesuaianBidangKerja.tinggi") }}
      </td>
    </tfoot>
  </table>
</template>
