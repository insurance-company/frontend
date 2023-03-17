import { ICar } from "./Car";

export interface IAccident {
    id: number
    description: string;
    date: Date;
    carId: number;
    towTruckId: number;
    towingStartTime: Date;
    towingDuration: number;
    status:number;
  }