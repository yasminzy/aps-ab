<script setup>
const props = defineProps({
  caption: String
})
</script>

<template>
  <figure class="my-4">
    <ClientOnly>
      <slot />
    </ClientOnly>

    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>
