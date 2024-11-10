import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateMainPage } from '../pages/mainPage';
import { CreateNotFoundPage } from '../pages/notFoundPage';
import { CreateLoginPage } from '../pages/loginPage';
import { CreateFavoritesPage } from '../pages/favoritesPage';
import { CreateOfferPage } from '../pages/offerPage';
import { CreatePrivateRoute } from './privateRoute';
import { Offer } from '../props/offer';
import { Review } from '../props/review';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
};

export function CreateApp({offers, reviews} : AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateMainPage offers={offers} />} />
        <Route path='/login' element={<CreateLoginPage />} />
        <Route path='/favorites' element={<CreatePrivateRoute page={<CreateFavoritesPage offers={offers} />} />} />
        <Route path='/offer/:id' element={<CreateOfferPage reviews={reviews} />} />
        <Route path='*' element={<CreateNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
