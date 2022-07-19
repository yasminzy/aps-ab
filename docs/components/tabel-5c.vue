<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(
  data.value,
  ["tahun", "nama", "judul"],
  ["asc", "asc", "asc"]
)

const row = [
  "TS-2",
  "TS-1",
  "TS",
  "Internasional",
  "Nasional",
  "PT/ Wilayah",
  "Sesuai (d)",
  "Kurang Sesuai (e)",
  "Tidak Sesuai (g)"
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Nama Dosen</th>
        <th rowspan="2">Judul Penelitian/ PkM <sup>1)</sup></th>
        <th rowspan="2">Mata Kuliah</th>
        <th rowspan="2">Bentuk Integrasi <sup>2)</sup></th>
        <th colspan="3">Tahun Penelitian/ PkM</th>
        <th colspan="3">Tingkat Penelitian/ PkM</th>
        <th colspan="3">Kesesuaian Penelitian dengan Roadmap</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="14" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td>{{ index + 1 }}</td>

        <td class="text-left">{{ item.nama }}</td>
        <td class="text-left">{{ item.judul }}</td>
        <td class="text-left">{{ item.matkul }}</td>
        <td class="text-left">{{ item.bentuk }}</td>

        <td>{{ item.tahun === "ts-2" ? "✅" : "" }}</td>
        <td>{{ item.tahun === "ts-1" ? "✅" : "" }}</td>
        <td>{{ item.tahun === "ts" ? "✅" : "" }}</td>

        <td>{{ item.tingkat === "internasional" ? "✅" : "" }}</td>
        <td>{{ item.tingkat === "nasional" ? "✅" : "" }}</td>
        <td>{{ item.tingkat === "wilayah" ? "✅" : "" }}</td>

        <td>{{ item.kesesuaian === "sesuai" ? "✅" : "" }}</td>
        <td>{{ item.kesesuaian === "kurang" ? "✅" : "" }}</td>
        <td>{{ item.kesesuaian === "tidak" ? "✅" : "" }}</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td>Jumlah</td>
        <td>(f)=</td>
        <td>(n)=</td>
        <td v-for="(item, index) in 5" :key="index"></td>
        <td>(a)=</td>
        <td>(b)=</td>
        <td>(c)=</td>
        <td>(d)=</td>
        <td>(e)=</td>
        <td>(g)=</td>
      </tr>
    </tfoot>
  </table>
</template>
