import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

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
    tokenRefresh: `${apiUrl}/Account/tokenrefresh`,
  },
  vendor: `${apiUrl}/api/Vendor/`,
  history: `${apiUrl}/api/History`,
};

export const widthBreakpoints = {
  desktop: 960,
  tablet: 768,
  mobileLarge: 640,
  mobile: 480,
  mobileSmall: 320,
};
