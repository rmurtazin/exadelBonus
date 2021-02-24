export interface IJwtPayload {
  exp: number;
  email: string;
  aud: string;
  iat: number;
  role: string[];
}
