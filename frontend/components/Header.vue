<script setup lang="ts">
import type { ItemProfile } from '~/types';

const itemProfiles: ItemProfile[][] = [
  [
    {
      label: 'wan@gmail.com',
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-8-tooth',
    },
  ],
  [
    {
      label: 'Documentation',
      icon: 'i-heroicons-book-open',
    },
    {
      label: 'Changelog',
      icon: 'i-heroicons-megaphone',
    },
    {
      label: 'Status',
      icon: 'i-heroicons-signal',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
    },
  ],
];
</script>

<template>
  <section class="flex gap-5 justify-between w-full">
    <h1 class="text-2xl font-semibold">Dashboard Sensor Data</h1>
    <section class="flex gap-5 justify-between">
      <ListValue/>
      <UDropdown :items="itemProfiles" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
        <UTooltip text="Profile" :popper="{ placement: 'bottom' }">
          <UAvatar alt="Juan Fahrul" size="md" />
        </UTooltip>
        <template #account="{ item }">
          <div class="text-left">
            <p>Signed in as</p>
            <p class="truncate font-medium text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
          </div>
        </template>
        <template #item="{ item }">
          <span class="truncate text-sm">{{ item.label }}</span>
          <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
        </template>
      </UDropdown>
    </section>
  </section>
</template>

<style scoped></style>
