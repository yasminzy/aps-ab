<script setup>
import { ref } from "vue"
import lodash from "lodash"
import Tabel5a2Tfoot from "./tabel-5a2-tfoot.vue"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(
  data.value,
  ["status.jabatan", "status.pendidikan", "nama"],
  ["desc", "desc", "asc"]
)

const row = [
  "Strata Pendidikan",
  "Jabatan Akademik",
  "TS-2",
  "TS-1",
  "TS",
  "TS-2",
  "TS-1",
  "TS",
  "TS-2",
  "TS-1",
  "TS"
]

const jabatan = ["-", "Asisten Ahli", "Lektor", "Lektor Kepala", "Guru Besar"]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Nama Dosen Pembimbing</th>
        <th colspan="2">Status Dosen Pembimbing</th>
        <th colspan="3">Jumlah Mahasiswa</th>
        <th colspan="3">Jumlah Pertemuan dengan Mahasiswa</th>
        <th colspan="3">Lama Penyelesaian Tugas Akhir (Bulan)</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="13" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td class="text-left">{{ item.nama }}</td>

        <td class="uppercase">{{ item.status.pendidikan }}</td>

        <td>{{ jabatan[item.status.jabatan] }}</td>

        <td>{{ item.mhs["ts-2"] }}</td>
        <td>{{ item.mhs["ts-1"] }}</td>
        <td>{{ item.mhs.ts }}</td>

        <td>{{ item.pertemuan["ts-2"] }}</td>
        <td>{{ item.pertemuan["ts-1"] }}</td>
        <td>{{ item.pertemuan.ts }}</td>

        <td>{{ item.lamaTa["ts-2"] }}</td>
        <td>{{ item.lamaTa["ts-1"] }}</td>
        <td>{{ item.lamaTa.ts }}</td>
      </tr>
    </tbody>

    <Tabel5a2Tfoot :data="normalizedData" />
  </table>
</template>
