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
    ["tahun", "namaDosen", "temaPkm", "namaMhs", "judulPkm"],
    ["desc", "asc", "asc", "asc", "asc"]
  )
  .map((item) => {
    return {
      ...item,
      tahun: useDateFormat(item.tahun, "YYYY").value
    }
  })

const row = [
  "No",
  "Nama Dosen",
  "Tema PkM sesuai Roadmap",
  "Nama Mahasiswa",
  "Judul Kegiatan PkM (selain KKN)",
  "Tahun (YYYY)"
]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="6" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td>{{ item.namaDosen }}</td>
        <td>{{ item.judulPkm }}</td>
        <td>{{ item.namaMhs }}</td>

        <td class="text-center">{{ item.tahun }}</td>

        <td>{{ item.temaPkm }}</td>
      </tr>
    </tbody>

    <tfoot class="text-center">
      <tr>
        <td colspan="4">Jumlah</td>

        <td>{{ data.length }}</td>

        <CellMute :n="1" />
      </tr>
    </tfoot>
  </table>
</template>
