<script setup>
const props = defineProps({
  data: Array
})
</script>

<template>
  <tr v-for="(item, index) in props.data" :key="index">
    <td>{{ index + 1 }}</td>
    <td>{{ item.mitra }}</td>
    <td>{{ item.tingkat === "internasional" ? "✅" : "" }}</td>
    <td>{{ item.tingkat === "nasional" ? "✅" : "" }}</td>
    <td>{{ item.tingkat === "wilayah" ? "✅" : "" }}</td>
    <td>{{ item.judul }}</td>
    <td>{{ item.manfaat }}</td>
    <td>{{ item.tanggalAwal }}</td>
    <td>{{ item.tanggalAkhir }}</td>
    <td>{{ item.bukti }}</td>
  </tr>
</template>
