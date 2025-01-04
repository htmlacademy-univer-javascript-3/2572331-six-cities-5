import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page';
import { NotFoundPage } from '../../pages/not-found-page';
import { LoginPage } from '../../pages/login-page';
import { FavoritesPage } from '../../pages/favorites-page';
import { OfferPage } from '../../pages/offer-page';
import { PrivateRoute } from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../pages/loading-screen';
import { AppRoute, AuthorizationStatus } from '../../consts/const';
import { HelmetProvider } from 'react-helmet-async';
import { getAuthorizationStatus } from '../../store/user-auth-data/selectors';
import { getOffersLoadingStatus } from '../../store/offers-data/selectors';

export function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const areOffersLoading = useAppSelector(getOffersLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || areOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
