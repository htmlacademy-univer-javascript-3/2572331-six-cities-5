import { Navigate } from 'react-router-dom';
import { GetJwt } from './auth/jwtFunctions';

type PrivateRouteProps = {
  page: JSX.Element;
}

export function PrivateRoute({page} : PrivateRouteProps) : JSX.Element {
  return (
    GetJwt() === null
      ? page
      : <Navigate to='/login' />
  );
}
