<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <h1 class="text-lg">{{ title }}</h1>
  <section class="flex flex-wrap gap-5 justify-center items-center">
    <slot></slot>
  </section>
</template>

<style scoped></style>
