import { animate, style, transition, trigger } from '@angular/animations';
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

export const EnterExitRight = [
  trigger('enterExitRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(200px)' }),
      animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(200px)' })),
    ]),
  ]),
];
