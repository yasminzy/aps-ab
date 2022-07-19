<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["tahun"], ["desc"])

const sum = (name) => lodash.sumBy(normalizedData, name)

const mhsAktifTs = (jenis) =>
  normalizedData.find((item) => item.tahun === "ts").mhsAktif[jenis]

const row = [
  "Pendaftar",
  "Lulus Seleksi",
  "Reguler",
  "Transfer",
  "Reguler",
  "Transfer"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">Tahun Akademik</th>
        <th rowspan="2">Daya Tampung</th>
        <th colspan="2">Jumlah Calon Mahasiswa</th>
        <th colspan="2">Jumlah Mahasiswa Baru</th>
        <th colspan="2">Jumlah Mahasiswa Aktif</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="8" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="uppercase">{{ item.tahun }}</td>

        <td>{{ item.dayaTampung }}</td>
        <td>{{ item.calonMhs.pendaftar }}</td>
        <td>{{ item.calonMhs.lulus }}</td>
        <td>{{ item.mhsBaru.reguler }}</td>
        <td>{{ item.mhsBaru.transfer }}</td>

        <td v-if="item.tahun === 'ts'">
          N<sub>RTS</sub>={{ item.mhsAktif.reguler }}
        </td>
        <td v-else>{{ item.mhsAktif.reguler }}</td>

        <td v-if="item.tahun === 'ts'">
          N<sub>TTS</sub>={{ item.mhsAktif.transfer }}
        </td>
        <td v-else>{{ item.mhsAktif.transfer }}</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="2">Jumlah</td>

        <td>N<sub>A</sub>={{ sum("calonMhs.pendaftar") }}</td>
        <td>N<sub>B</sub>={{ sum("calonMhs.lulus") }}</td>
        <td>N<sub>C</sub>={{ sum("mhsBaru.reguler") }}</td>
        <td>N<sub>D</sub>={{ sum("mhsBaru.transfer") }}</td>

        <td colspan="2">
          N<sub>M</sub>=N<sub>RTS</sub>+N<sub>TTS</sub>=
          {{ mhsAktifTs("reguler") + mhsAktifTs("transfer") }}
        </td>
      </tr>
    </tfoot>
  </table>
</template>
