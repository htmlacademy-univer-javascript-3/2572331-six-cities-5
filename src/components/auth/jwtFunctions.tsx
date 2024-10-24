export type Token = string;

export function SaveJwt(jwt: Token) {
  localStorage.setItem('jwt', jwt);
}

export function GetJwt() {
  return localStorage.getItem('jwt');
}

export function DropJwt() {
  localStorage.removeItem('jwt');
}
