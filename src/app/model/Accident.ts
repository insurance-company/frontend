import { ICar } from "./Car";

export interface IAccident {
    description: string;
    date: Date;
    carId: number;
    towTruckId: number;
    status:number;
  }