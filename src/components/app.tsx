import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/mainPage';
import { NotFoundPage } from '../pages/notFoundPage';
import { LoginPage } from '../pages/loginPage';
import { FavoritesPage } from '../pages/favoritesPage';
import { OfferPage } from '../pages/offerPage';
import { PrivateRoute } from './privateRoute';

export function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/favorites' element={<PrivateRoute page={<FavoritesPage />} />} />
        <Route path='/offer/:id' element={<OfferPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
