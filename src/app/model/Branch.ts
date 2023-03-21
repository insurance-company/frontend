import { IAddress } from "./Address";
import { IAgency } from "./Agency";

export interface IBranch{
    id: number;
    agencyId: number;
    address: IAddress;
}