import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

export enum RoleType {
  user = 'user',
  moderator = 'moderator',
  admin = 'admin',
}

export const apiLinks = {
  bonus: `${apiUrl}/api/Bonus`,
  cities: `${apiUrl}/api/Bonus/cities`,
  tags: `${apiUrl}/api/Bonus/tags`,
  admin: {
    user: `${apiUrl}/Admin/user`,
    role: `${apiUrl}/Admin/role`,
  },
  account: {
    login: `${apiUrl}/Account/login`,
    register: `${apiUrl}/Account/register`,
    logout: `${apiUrl}/Account/logout`,
    getInfo: `${apiUrl}/Account/getInfo`,
    refreshToken: `${apiUrl}/account/tokenrefresh`,
  },
  vendor: `${apiUrl}/api/Vendor`,
  history: `${apiUrl}/api/History`,
};

export const cityByLocationUrl = (lat: number, lng: number) =>
  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;

export const widthBreakpoints = {
  desktop: 960,
  tablet: 768,
  mobileLarge: 640,
  mobile: 480,
  mobileSmall: 320,
};
