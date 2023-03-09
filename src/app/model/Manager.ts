import { IBranch } from "./Branch";
import { Gender } from "./enum/Gender";

export interface IManager{
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    uniqueMasterCitizenNumber:string;
    phoneNumber:string;
    address:string;
    gender: Gender;   
    bossId: number; 
    managesTheBranchId: number;
}