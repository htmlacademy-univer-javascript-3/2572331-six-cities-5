import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/mainPage';
import { NotFoundPage } from '../../pages/notFoundPage';
import { LoginPage } from '../../pages/loginPage';
import { FavoritesPage } from '../../pages/favoritesPage';
import { OfferPage } from '../../pages/offerPage';
import { PrivateRoute } from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../pages/loading-screen';
import { AppRoute, AuthorizationStatus } from '../../consts/const';
import { HelmetProvider } from 'react-helmet-async';

export function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
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
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
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
