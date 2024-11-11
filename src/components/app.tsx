import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateMainPage } from '../pages/mainPage';
import { CreateNotFoundPage } from '../pages/notFoundPage';
import { CreateLoginPage } from '../pages/loginPage';
import { CreateFavoritesPage } from '../pages/favoritesPage';
import { CreateOfferPage } from '../pages/offerPage';
import { CreatePrivateRoute } from './privateRoute';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';
import { Cities } from '../types/city';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
  cities: Cities;
};

export function CreateApp({offers, reviews, cities} : AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateMainPage offers={offers} cities={cities} />} />
        <Route path='/login' element={<CreateLoginPage />} />
        <Route path='/favorites' element={<CreatePrivateRoute page={<CreateFavoritesPage offers={offers} />} />} />
        <Route path='/offer/:id' element={<CreateOfferPage offers={offers} cities={cities} reviews={reviews} />} />
        <Route path='*' element={<CreateNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
