<script setup>
const props = defineProps({
  data: Array
})
</script>

<template>
  <tr v-for="(item, index) in data" :key="index">
    <td class="text-center">{{ index + 1 }}</td>

    <td>{{ item.mitra }}</td>

    <td class="text-center">
      {{ item.tingkat === "internasional" ? "✅" : "" }}
    </td>
    <td class="text-center">{{ item.tingkat === "nasional" ? "✅" : "" }}</td>
    <td class="text-center">{{ item.tingkat === "wilayah" ? "✅" : "" }}</td>

    <td>{{ item.judul }}</td>
    <td>{{ item.manfaat }}</td>

    <td class="text-center">{{ item.tanggalAwal }}</td>
    <td class="text-center">{{ item.tanggalAkhir }}</td>

    <td>{{ item.bukti }}</td>
  </tr>
</template>
