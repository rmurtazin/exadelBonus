import { IOffice } from "./office.interface";

export interface IRequestedUser{
    id: string;
    firstName: string;
    secondName: string;
    email: string;
    phone: string;
    office: IOffice;
    role: string;
    accessToken: string;
    isActive: boolean;
}
