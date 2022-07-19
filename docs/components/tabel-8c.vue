<script setup>
import { ref } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Object
})

const data = ref(props.data)

const row = ["TS-4", "TS-3", "TS-2", "TS-1", "TS"]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">Tahun Masuk</th>
        <th colspan="5">Jumlah Mahasiswa Reguler per Angkatan pada Tahun *</th>
        <th rowspan="2">Jumlah Lulusan s.d. TS (dari Mahasiswa Reguler)</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="7" />
    </thead>

    <tbody>
      <tr>
        <td>TS-4</td>

        <td>(a)={{ data["ts-4"].masukTs4 }}</td>

        <td>{{ data["ts-3"].masukTs4 }}</td>
        <td>{{ data["ts-2"].masukTs4 }}</td>
        <td>{{ data["ts-1"].masukTs4 }}</td>

        <td>(b)={{ data.ts.masukTs4 }}</td>

        <td>(g)=</td>
      </tr>

      <tr>
        <td>TS-3</td>

        <CellMute :n="1" />

        <td>(h)={{ data["ts-3"].masukTs3 }}</td>

        <td>{{ data["ts-2"].masukTs3 }}</td>
        <td>{{ data["ts-1"].masukTs3 }}</td>

        <td>(i)={{ data.ts.masukTs3 }}</td>

        <td>(c)=</td>
      </tr>

      <tr>
        <td>TS-2</td>

        <CellMute :n="2" />

        <td>(d)={{ data["ts-2"].masukTs2 }}</td>

        <td>{{ data["ts-1"].masukTs2 }}</td>

        <td>(e)={{ data.ts.masukTs2 }}</td>

        <td>(f)=</td>
      </tr>

      <tr>
        <td>TS-1</td>

        <CellMute :n="3" />

        <td>{{ data["ts-1"].masukTs1 }}</td>
        <td>{{ data.ts.masukTs1 }}</td>

        <td></td>
      </tr>

      <tr>
        <td>TS</td>

        <CellMute :n="4" />

        <td>{{ data.ts.masukTs }}</td>

        <CellMute :n="1" />
      </tr>
    </tbody>
  </table>
</template>
