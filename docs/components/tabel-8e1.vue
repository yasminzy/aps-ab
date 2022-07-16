<script setup>
import { ref } from "vue"

const props = defineProps({
  data: Array
})

const data = ref(props.data)
</script>

<template>
  <table>
    <thead>
      <tr></tr>
    </thead>

    <tbody>
      <tr></tr>
    </tbody>
  </table>
</template>
