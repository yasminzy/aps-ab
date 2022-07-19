<script setup>
import { ref } from "vue"
import { useDateFormat } from "@vueuse/core"
import lodash from "lodash"
import Tabel3b8Tr from "./tabel-3b8-tr.vue"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash
  .orderBy(data.value, ["jenis", "tanggal", "judul"], ["asc", "desc", "asc"])
  .map((item) => {
    return {
      ...item,
      tanggal: useDateFormat(item.tanggal, "DD/MM/YYYY").value
    }
  })

const groupedData = lodash.groupBy(normalizedData, "jenis")
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Judul Luaran Penelitian dan PkM</th>
        <th>Tanggal (HH/BB/TTTT)</th>
        <th>Nomor Paten (Granted) <sup>1</sup></th>
        <th>Keterangan (Nomor Sertifikat) <sup>2</sup></th>
        <th>Status (Tingkat Kesiapan Teknologi) <sup>3</sup></th>
        <th>Nomor Sertifikat TKT <sup>4</sup></th>
        <th>Keterangan (Nomor ISBN)</th>
      </tr>

      <ColNum :n="8" />
    </thead>

    <tbody>
      <tr>
        <td>I</td>
        <td>HKI <sup>1)</sup>:<br />a) Paten,<br />b) Paten Sederhana</td>
        <td v-for="(item, index) in 6" :key="index"></td>
      </tr>
      <Tabel3b8Tr :data="groupedData['1']" name="A" />

      <tr>
        <td>II</td>
        <td>
          HKI <sup>2)</sup>:<br />a) Hak Cipta,<br />b) Desain Produk
          Industri,<br />c) Desain Tata Letak Sirkuit Terpadu,<br />d) dll.)
        </td>
        <td v-for="(item, index) in 6" :key="index"></td>
      </tr>
      <Tabel3b8Tr :data="groupedData['2']" name="B" />

      <tr>
        <td>III</td>
        <td>
          Teknologi Tepat Guna, Produk (Produk Terstandarisasi, Produk
          Tersertifikasi) <sup>3)</sup>:
        </td>
        <td v-for="(item, index) in 6" :key="index"></td>
      </tr>
      <Tabel3b8Tr :data="groupedData['3']" name="C" />

      <tr>
        <td>IV</td>
        <td>Buku ber-ISBN, Book Chapter</td>
        <td v-for="(item, index) in 6" :key="index"></td>
      </tr>
      <Tabel3b8Tr :data="groupedData['4']" name="D" />
    </tbody>
  </table>
</template>
