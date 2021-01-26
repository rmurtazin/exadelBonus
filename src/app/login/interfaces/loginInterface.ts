export interface ILogin {
    userLogin: string;
    userPassword: string;
}

export interface IUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    city: string;
    isActive: boolean;
    role: string;
    token: string;
}
