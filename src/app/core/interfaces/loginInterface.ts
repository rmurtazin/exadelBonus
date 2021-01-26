export interface ILogin {
    userLogin: string;
    userPassword: string;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    city: string;
    role: string;
    token: string;
}
