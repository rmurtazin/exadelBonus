export interface ILogin {
  userLogin: string;
  userPassword: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  roles: string[];
  token: string;
}
export interface IUserInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  phoneNumber: string;
}
