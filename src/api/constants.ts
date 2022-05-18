import { SensorData, StoredItems } from "./types";

export const GET_DATA = 'GET_DATA';

export const apiResponse: SensorData[] = [
  {
    id: '1',
    storageType: StoredItems.Snacks,
    capacity: 3000,
    weight: 1000,
  },
  {
    id: '2',
    storageType: StoredItems.PaperTowels,
    capacity: 15000,
    weight: 3000,
  },
  {
    id: '3',
    storageType: StoredItems.Cookies,
    capacity: 2000,
    weight: 2000,
  },
  {
    id: '4',
    storageType: StoredItems.Cookies,
    capacity: 4000,
    weight: 100,
  },
  {
    id: '5',
    storageType: StoredItems.Fruits,
    capacity: 7000,
    weight: 2500,
  },
  {
    id: '6',
    storageType: StoredItems.Snacks,
    capacity: 1500,
    weight: 1200,
  },
  {
    id: '7',
    storageType: StoredItems.Fruits,
    capacity: 1000,
    weight: 300,
  },
  {
    id: '8',
    storageType: StoredItems.PaperTowels,
    capacity: 4000,
    weight: 1500,
  },
  {
    id: '9',
    storageType: StoredItems.Cookies,
    capacity: 5000,
    weight: 4000,
  },
  {
    id: '10',
    storageType: StoredItems.Snacks,
    capacity: 1500,
    weight: 600,
  },
];
