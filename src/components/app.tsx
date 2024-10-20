import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateMainPage } from '../pages/mainPage';
import { CreateNotFoundPage } from '../pages/notFoundPage';
import { CreateLoginPage } from '../pages/loginPage';
import { CreateFavoritesPage } from '../pages/favoritesPage';
import { CreateOfferPage } from '../pages/offerPage';
import { CreatePrivateRoute } from './privateRoute';

type AppProps = {
  placeCardsCount: number;
};

export function CreateApp({placeCardsCount} : AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateMainPage placeCardsCount={placeCardsCount} />} />
        <Route path='/login' element={<CreateLoginPage />} />
        <Route path='/favorites' element={<CreatePrivateRoute page={<CreateFavoritesPage />} />} />
        <Route path='/offer/:id' element={<CreateOfferPage />} />
        <Route path='*' element={<CreateNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
