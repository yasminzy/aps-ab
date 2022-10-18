<script setup>
const props = defineProps({
  data: Array,
  name: String
})
</script>

<template>
  <tr v-for="(item, index) in data" :key="index">
    <td></td>

    <td>{{ index + 1 }}. {{ item.judul }}</td>

    <td class="text-center">{{ item.tanggal }}</td>

    <td>{{ item.noPaten }}</td>
    <td>{{ item.noSertifikat }}</td>
    <td>{{ item.tkt }}</td>
    <td>{{ item.noSertifikatTkt }}</td>
    <td>{{ item.noIsbn }}</td>
  </tr>

  <tr class="text-center">
    <td colspan="2">Jumlah</td>

    <td>
      N<sub>{{ props.name }}</sub>=
    </td>

    <td v-for="(item, index) in 5" :key="index"></td>
  </tr>
</template>
