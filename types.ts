
export enum SystemStatus {
  IDLE = 'IDLE',
  COOLING = 'COOLING',
  SAFETY = 'SAFETY'
}

export interface SensorData {
  temperature: number;
  humidity: number;
  coldPlateTemp: number;
  heatSinkTemp: number;
  timestamp: string;
}

export interface SystemMetrics {
  waterGenerated: number;
  powerUsage: number;
  efficiency: number;
  operatingMode: string;
  totalRuntime: string;
}
