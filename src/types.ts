import { SensorData } from "api/types"

export interface IAdaptItem extends SensorData {
    name: string
}

export interface ICountPercent {
    total: number,
    amount: number
}