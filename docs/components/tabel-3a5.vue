<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(
  data.value,
  ["pendidikan", "nama"],
  ["desc", "asc"]
)

const row = ["Bidang Sertifikasi", "Lembaga Penerbit"]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Nama Dosen Industri/ Praktisi</th>
        <th rowspan="2">NIDK <sup>1)</sup></th>
        <th rowspan="2">Perusahaan/ Industri <sup>2)</sup></th>
        <th rowspan="2">Pendidikan Tertinggi</th>
        <th rowspan="2">Bidang Keahlian <sup>3)</sup></th>
        <th colspan="2">
          Sertifikat Kompetensi/ Profesi/ Industri <sup>4)</sup>
        </th>
        <th rowspan="2">Mata Kuliah yang Diampu <sup>5)</sup></th>
        <th rowspan="2">Bobot Kredit (sks)</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="10" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td>{{ item.nama }}</td>
        <td>{{ item.nomorInduk }}</td>
        <td>{{ item.perusahaan }}</td>
        <td class="text-center uppercase">{{ item.pendidikan }}</td>
        <td>{{ item.bidangKeahlian }}</td>

        <td>{{ item.sertifikat.bidangSertifikasi }}</td>
        <td>{{ item.sertifikat.lembagaPenerbit }}</td>

        <td>{{ item.matkul }}</td>
        <td class="text-center">{{ item.sks }}</td>
      </tr>
    </tbody>
  </table>
</template>
