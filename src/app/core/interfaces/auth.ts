export interface ILoginValues {
  userLogin: string;
  userPassword: string;
}

export interface IUserActive {
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
