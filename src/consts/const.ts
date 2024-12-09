export const REVIEWS_PAGE_SIZE = 10;

export const TIMEOUT_SHOW_ERROR = 2000;

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  GetOffers = '/offers',
  Login = '/login',
  Logout = '/logout',
}
