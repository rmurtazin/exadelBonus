export interface ILogin {
  userLogin: string;
  userPassword: string;
}

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  city: string;
  role: string;
  token: string;
}
