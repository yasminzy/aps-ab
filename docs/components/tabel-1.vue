<script setup>
import { ref } from "vue"
import { useDateFormat } from "@vueuse/core"
import Table1Tr from "./tabel-1-tr.vue"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = data.value
  .map((item) => ({ ...item }))
  .sort(
    (objA, objB) => new Date(objB.tanggalAkhir) - new Date(objA.tanggalAkhir)
  )
  .map((item) => {
    return {
      ...item,
      tanggalAwal: useDateFormat(item.tanggalAwal, "DD-MM-YYYY").value,
      tanggalAkhir: useDateFormat(item.tanggalAkhir, "DD-MM-YYYY").value
    }
  })

const pendidikan = normalizedData.filter((item) => item.jenis === "pendidikan")
const penelitian = normalizedData.filter((item) => item.jenis === "penelitian")
const pkm = normalizedData.filter((item) => item.jenis === "pkm")
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
        <th>Internasional</th>
        <th>Nasional</th>
        <th>Lokal/Wilayah</th>
      </tr>

      <tr>
        <th v-for="(item, index) in 10" :key="index">{{ item }}</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td colspan="10">Pendidikan</td>
      </tr>

      <Table1Tr :data="pendidikan" />

      <tr>
        <td colspan="10">Penelitian</td>
      </tr>

      <Table1Tr :data="penelitian" />

      <tr>
        <td colspan="10">Pengabdian kepada Masyarakat</td>
      </tr>

      <Table1Tr :data="pkm" />
    </tbody>
  </table>
</template>
