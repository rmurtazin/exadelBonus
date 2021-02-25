export interface IJwtDecoded {
    sub: string;
    exp: number;
    email: string;
    aud: string;
    iat: number;
    role: string[];
}
