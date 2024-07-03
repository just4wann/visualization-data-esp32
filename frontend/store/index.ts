import type { DataInformation } from '~/types';

export const useStore = defineStore('temp', () => {
  const temperatures = ref<DataInformation[]>([
    {
      value: 0,
    },
  ]);
  const humidities = ref<DataInformation[]>([
    {
      value: 0,
    },
  ]);
  const efficiencies = ref<DataInformation[]>([
    {
      value: 0,
    },
  ]);
  const averages = ref<DataInformation[]>([
    {
      value: 0,
    },
  ]);
  return { temperatures, humidities, efficiencies, averages };
});
