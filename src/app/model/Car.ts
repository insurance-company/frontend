import { IUser } from "./User";

export interface ICar {
    id: number;
    registerNumber?: string;
    years?: number;
    model?: string;
    brand?: string;
    owner?: IUser;
}