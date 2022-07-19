<script setup>
import { ref } from "vue"
import { useDateFormat } from "@vueuse/core"
import lodash from "lodash"
import Tabel1Tr from "./tabel-1-tr.vue"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash
  .orderBy(data.value, ["tanggalAkhir", "mitra"], ["desc", "asc"])
  .map((item) => {
    return {
      ...item,
      tanggalAwal: useDateFormat(item.tanggalAwal, "DD/MM/YYYY").value,
      tanggalAkhir: useDateFormat(item.tanggalAkhir, "DD/MM/YYYY").value
    }
  })

const groupedData = lodash.groupBy(normalizedData, "jenis")

const row = ["Internasional", "Nasional", "Lokal/ Wilayah"]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Lembaga Mitra</th>
        <th colspan="3">Tingkat <sup>1)</sup></th>
        <th rowspan="2">Judul Kegiatan Kerja Sama <sup>2)</sup></th>
        <th rowspan="2">Manfaat bagi PS yang Diakreditasi</th>
        <th rowspan="2">Tanggal Awal Kerja Sama (HH/BB/TTTT)</th>
        <th rowspan="2">Tanggal Akhir Kerja Sama (HH/BB/TTTT)</th>
        <th rowspan="2">Bukti Kerja Sama <sup>3)</sup></th>
      </tr>

      <tr>
        <th v-for="(item, index) in row">{{ item }}</th>
      </tr>

      <ColNum :n="10" />
    </thead>

    <tbody>
      <tr>
        <td colspan="10">Pendidikan</td>
      </tr>
      <Tabel1Tr :data="groupedData.pendidikan" />

      <tr>
        <td colspan="10">Penelitian</td>
      </tr>
      <Tabel1Tr :data="groupedData.penelitian" />

      <tr>
        <td colspan="10">Pengabdian kepada Masyarakat</td>
      </tr>
      <Tabel1Tr :data="groupedData.pkm" />
    </tbody>
  </table>
</template>
