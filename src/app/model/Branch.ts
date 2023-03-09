import { IAgency } from "./Agency";

export interface IBranch{
    id: number;
    agency: IAgency;
    address: string;
}