<script setup lang="ts">
import type { Socket } from 'socket.io-client';
import { useStore } from '~/store';

const props = defineProps<{
  socket: Socket;
}>();

useAverage(props.socket);

const store = useStore();
</script>
<template>
  <UCard class="w-72 flex flex-col" :ui="{}">
    <template #header>
      <UBadge color="gray" variant="outline" size="md">Average</UBadge>
    </template>
    <UProgress :value="store.averages[0].value" :max="100" indicator color="blue" class="-mt-2 mb-2" />
  </UCard>
</template>
<style scoped></style>
