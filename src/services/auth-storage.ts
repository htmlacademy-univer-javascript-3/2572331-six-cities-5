const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
const AUTH_USER_EMAIL = 'six-cities-user-email';

export type Token = string;
export type Email = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const getEmail = (): Email => {
  const email = localStorage.getItem(AUTH_USER_EMAIL);
  return email ?? '';
};

export const saveToken = (token: Token, email: Email): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  localStorage.setItem(AUTH_USER_EMAIL, email);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  localStorage.removeItem(AUTH_USER_EMAIL);
};
