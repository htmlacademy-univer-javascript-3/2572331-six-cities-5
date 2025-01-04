import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts/const';
import { getToken } from '../../services/auth-storage';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  return (
    getToken()
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
