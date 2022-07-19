<script setup>
import { ref, computed } from "vue"
import lodash from "lodash"

const props = defineProps({
  data: Array
})

const data = ref(props.data)

const normalizedData = lodash.orderBy(data.value, ["aspek"], ["asc"])

const sum = (name) => lodash.round(lodash.sumBy(normalizedData, name), 1)

const row = ["Sangat Baik", "Baik", "Cukup", "Kurang"]

const aspekYangDiukur = [
  "Keandalan (reliability): kemampuan dosen, tenaga kependidikan, dan pengelola dalam memberikan pelayanan.",
  "Daya tanggap (responsiveness): kemauan dari dosen, tenaga kependidikan, dan pengelola dalam membantu mahasiswa dan memberikan jasa dengan cepat.",
  "Kepastian (assurance): kemampuan dosen, tenaga kependidikan, dan pengelola untuk memberi keyakinan kepada mahasiswa bahwa pelayanan yang diberikan telah sesuai dengan ketentuan.",
  "Empati (empathy): kesediaan/kepedulian dosen, tenaga kependidikan, dan pengelola untuk memberi perhatian kepada mahasiswa.",
  "Tangible: penilaian mahasiswa terhadap kecukupan, aksesibitas, kualitas sarana dan prasarana."
]
</script>

<template>
  <table class="text-center">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Aspek yang Diukur</th>
        <th colspan="4">Tingkat Kepuasan Mahasiswa (%)</th>
        <th rowspan="2">Rencana Tindak Lanjut oleh UPPS/PS</th>
      </tr>

      <tr>
        <th v-for="(item, index) in row" :key="index">{{ item }}</th>
      </tr>

      <ColNum :n="7" />
    </thead>

    <tbody>
      <tr v-for="(item, index) in normalizedData" :key="index">
        <td class="text-center">{{ index + 1 }}</td>

        <td class="text-left">{{ aspekYangDiukur[index] }}</td>

        <td>{{ item.kepuasan.sangatBaik }}</td>
        <td>{{ item.kepuasan.baik }}</td>
        <td>{{ item.kepuasan.cukup }}</td>
        <td>{{ item.kepuasan.kurang }}</td>

        <td class="text-left">{{ item.rencanaTindakLanjut }}</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="2" class="text-center">Jumlah</td>

        <td>{{ sum("kepuasan.sangatBaik") }}</td>
        <td>{{ sum("kepuasan.baik") }}</td>
        <td>{{ sum("kepuasan.cukup") }}</td>
        <td>{{ sum("kepuasan.kurang") }}</td>

        <CellMute :n="1" />
      </tr>
    </tfoot>
  </table>
</template>
