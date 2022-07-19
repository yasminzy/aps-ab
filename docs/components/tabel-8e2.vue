<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["jenis"], ["asc"])

const sum = (name) => lodash.sumBy(normalizedData, name)

const row = ["Sangat Baik", "Baik", "Cukup", "Kurang"]

const jenisKemampuan = [
  "Etika",
  "Keahlian pada bidang ilmu (kompetensi utama)",
  "Kemampuan berbahasa asing",
  "Penggunaan teknologi informasi",
  "Kemampuan berkomunikasi",
  "Kerjasama",
  "Pengembangan diri"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Jenis Kemampuan</th>
        <th colspan="4">Tingkat Kepuasan Pengguna (%)</th>
        <th rowspan="2">Rencana Tindak Lanjut oleh UPPS/PS</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row">{{ item }}</th>
      </tr>

      <ColNum :n="7" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td class="text-left">{{ jenisKemampuan[item.jenis - 1] }}</td>

        <td>{{ item.kepuasan.sangatBaik }}</td>
        <td>{{ item.kepuasan.baik }}</td>
        <td>{{ item.kepuasan.cukup }}</td>
        <td>{{ item.kepuasan.kurang }}</td>

        <td class="text-left">{{ item.rencanaTindakLanjut }}</td>
      </tr>
    </tbody>

    <tfoot>
      <td colspan="2">Jumlah</td>

      <td>{{ sum("kepuasan.sangatBaik") }}</td>
      <td>{{ sum("kepuasan.baik") }}</td>
      <td>{{ sum("kepuasan.cukup") }}</td>
      <td>{{ sum("kepuasan.kurang") }}</td>

      <CellMute :n="1" />
    </tfoot>
  </table>
</template>
