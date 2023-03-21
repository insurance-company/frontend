import { IAddress } from "./Address";
import { Gender } from "./enum/Gender";

export interface IUser{
    id: number;
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    uniqueMasterCitizenNumber:string;
    phoneNumber:string;
    address:IAddress;
    gender: Gender;    
}
