import { Gender } from "./enum/Gender";

export interface IUser{
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    uniqueMasterCitizenNumber:string;
    phoneNumber:string;
    address:string;
    gender: Gender;    
}
