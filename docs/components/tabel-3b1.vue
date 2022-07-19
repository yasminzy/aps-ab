<script setup>
import { ref } from "vue"
import { useDateFormat } from "@vueuse/core"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash
  .orderBy(
    data.value,
    ["tahun", "nama", "bidangKeahlian"],
    ["desc", "asc", "asc"]
  )
  .map((item) => {
    return {
      ...item,
      tahun: useDateFormat(item.tahun, "YYYY").value
    }
  })

const row = [
  "Rekognisi",
  "Bukti Pendukung",
  "Wilayah",
  "Nasional",
  "Internasional"
]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Nama Dosen</th>
        <th rowspan="2">Bidang Keahlian</th>
        <th colspan="2">Rekognisi dan Bukti Pendukung <sup>1)</sup></th>
        <th colspan="3">Tingkat <sup>2)</sup></th>
        <th rowspan="2">Tahun (YYYY)</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="9" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td>{{ item.nama }}</td>
        <td>{{ item.bidangKeahlian }}</td>

        <td>{{ item.rekognisiDanBuktiPendukung.rekognisi }}</td>
        <td>{{ item.rekognisiDanBuktiPendukung.buktiPendukung }}</td>

        <td class="text-center">
          {{ item.tingkat === "wilayah" ? "✅" : "" }}
        </td>
        <td class="text-center">
          {{ item.tingkat === "nasional" ? "✅" : "" }}
        </td>
        <td class="text-center">
          {{ item.tingkat === "internasional" ? "✅" : "" }}
        </td>

        <td class="text-center">{{ item.tahun }}</td>
      </tr>
    </tbody>

    <tfoot class="text-center">
      <td colspan="5">Jumlah</td>
      <td></td>
      <td></td>
      <td></td>
      <CellMute :n="1" />
    </tfoot>
  </table>
</template>
