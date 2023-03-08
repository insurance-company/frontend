import { ITowingService } from "./TowingService";

export interface ITowTruck{
    length: number;
    width: number;
    transportCapacity: number;
    towingService: ITowingService
}
