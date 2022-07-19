<script setup>
const props = defineProps({
  n: Number
})
</script>

<template>
  <td
    v-for="(item, index) in n"
    :key="index"
    class="bg-mute dark:bg-dark-mute"
  ></td>
</template>
