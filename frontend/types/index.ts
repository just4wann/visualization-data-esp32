export interface ItemNavbar {
  name: string;
  icon: string;
  count: number;
}

export interface ItemProfile {
  label: string;
  icon?: string;
  slot?: string;
  disabled?: boolean;
}

export interface Sensor {
  id: number;
  name: string;
  value: number;
  icon: string;
}

export interface DataSensor {
  temperature: number;
  humidity: number;
  efficiency: number;
  average: number;
}

export interface ItemTabs {
  label: string
  slot?: string
  disabled?: boolean
  content?: string
  [key: string]: any
}

export interface DataInformation {
  id?: number;
  value?: number;
  timestamp?: string;
}
