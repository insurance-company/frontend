import { ICar } from "./Car";

export interface IAccident {
    id: number
    description: string;
    date: Date;
    policyId: number;
    towTruckId: number;
    towingStartTime: Date;
    towingDuration: number;
    status:number;
  }