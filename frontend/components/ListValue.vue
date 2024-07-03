<script setup lang="ts">
import { useStore } from '~/store';

const store = useStore();

const openModal = ref<boolean>(false);

const items = [
  {
    key: 'temperature',
    label: 'Temperature',
    description: 'list all of temperature value',
  },
  {
    key: 'humidity',
    label: 'Humidity',
    description: 'list all of humidity value',
  },
  {
    key: 'efficiency',
    label: 'Efficiency',
    description: 'list all of efficiency value',
  },
  {
    key: 'average',
    label: 'Average',
    description: 'list all of average value',
  },
];

const page = ref<number>(1);
const pageCount = ref<number>(5);
const rows = computed(() => {
  const temperature = store.temperatures.slice(1).slice((page.value - 1) * pageCount.value, page.value * pageCount.value);
  const humidity = store.humidities.slice(1).slice((page.value - 1) * pageCount.value, page.value * pageCount.value);
  const efficiency = store.efficiencies.slice(1).slice((page.value - 1) * pageCount.value, page.value * pageCount.value);
  const average = store.averages.slice(1).slice((page.value - 1) * pageCount.value, page.value * pageCount.value);
  return {
    temperature,
    humidity,
    efficiency,
    average,
  };
});
</script>

<template>
  <UTooltip text="List value" :popper="{ placement: 'bottom' }">
    <UButton icon="i-heroicons-list-bullet-20-solid" color="gray" size="lg" @click="openModal = true" :ui="{ rounded: 'rounded-full' }" />
  </UTooltip>
  <UModal v-model="openModal">
    <UCard>
      <h1 class="text-center mb-5">List all of value</h1>
      <UTabs :items="items" class="w-full">
        <template #item="{ item }">
          <UCard>
            <template #header>
              <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {{ item.description }}
              </p>
            </template>
            <section v-if="item.key === 'temperature'" class="space-y-3">
              <UTable :rows="rows.temperature" class="h-80" />
              <section class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="store.temperatures.length" />
              </section>
            </section>
            <section v-else-if="item.key === 'humidity'" class="space-y-3">
              <UTable :rows="rows.humidity" class="h-80" />
              <section class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="store.humidities.length" />
              </section>
            </section>
            <section v-else-if="item.key === 'efficiency'" class="space-y-3">
              <UTable :rows="rows.efficiency" class="h-80" />
              <section class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="store.efficiencies.length" />
              </section>
            </section>
            <section v-else-if="item.key === 'average'" class="space-y-3">
              <UTable :rows="rows.average" class="h-80" />
              <section class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="store.averages.length" />
              </section>
            </section>
          </UCard>
        </template>
      </UTabs>
    </UCard>
  </UModal>
</template>

<style scoped></style>
