<script setup lang="ts">
import type { Socket } from 'socket.io-client';
import { useStore } from '~/store';

const props = defineProps<{
  socket: Socket;
}>();

useEfficiency(props.socket);

const store = useStore();
</script>
<template>
  <UCard class="w-72 flex flex-col">
    <template #header>
      <UBadge color="gray" variant="outline" size="lg">Efficiency</UBadge>
    </template>
    <UProgress :value="store.efficiencies[0].value" :max="100" indicator color="blue" class="-mt-2 mb-2" />
  </UCard>
</template>
<style scoped></style>
