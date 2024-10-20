import { Navigate } from 'react-router-dom';
import { GetJwt } from './auth/jwtFunctions';

type PrivateRouteProps = {
  page: JSX.Element;
}

export function CreatePrivateRoute({page} : PrivateRouteProps) : JSX.Element {
  return (
    GetJwt() !== null
      ? page
      : <Navigate to='/login' />
  );
}
