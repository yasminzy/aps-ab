<script setup>
const props = defineProps({
  n: Number
})
</script>

<template>
  <tr>
    <th v-for="(item, index) in n" :key="index">{{ item }}</th>
  </tr>
</template>
