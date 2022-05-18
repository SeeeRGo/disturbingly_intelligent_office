export enum StoredItems {
  Snacks,
  PaperTowels,
  Fruits,
  Cookies,
}

export interface SensorData {
  id: string;
  storageType: StoredItems;
  capacity: number; // in gramms
  weight: number;
}
