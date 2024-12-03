import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/mainPage';
import { NotFoundPage } from '../pages/notFoundPage';
import { LoginPage } from '../pages/loginPage';
import { FavoritesPage } from '../pages/favoritesPage';
import { OfferPage } from '../pages/offerPage';
import { PrivateRoute } from './privateRoute';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';
import { Cities } from '../types/city';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
  cities: Cities;
};

export function App({offers, reviews, cities} : AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage offers={offers} cities={cities} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/favorites' element={<PrivateRoute page={<FavoritesPage offers={offers} />} />} />
        <Route path='/offer/:id' element={<OfferPage offers={offers} cities={cities} reviews={reviews} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
