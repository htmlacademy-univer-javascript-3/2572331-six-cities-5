import { useState } from 'react';
import { OfferCards } from '../components/offer-cards/offer-cards';
import { Offer } from '../types/offer';
import { OfferCardType } from '../components/offer-cards/offer-card-type';
import { useAppSelector } from '../hooks';
import Header from '../components/header/header';
import { getToken } from '../services/auth-storage';
import { AppRoute } from '../consts/const';
import { CITIES } from '../consts/cities';
import { getFavorites } from '../store/favorites-data/selectors';
import { FavoritesEmptyPage } from './favorites-empty-page';

export function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getFavorites);

  const [, setCurrentPointedOffer] = useState<Offer | undefined>(undefined);

  const handleListItemHover = (pointedOffer: Offer) => {
    setCurrentPointedOffer(pointedOffer);
  };

  if (offers.length === 0) {
    return(<FavoritesEmptyPage />);
  }

  const cityNames = [...new Set(offers.map(({ city: city }) => city.name))];
  const cities = CITIES.filter((cityToFilter) => cityNames.includes(cityToFilter.name));

  return(
    <div className="page">
      <Header jwtToken={getToken()} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map(((city) => (
                <li className="favorites__locations-items" key={city.name}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href={AppRoute.Root}>
                        <span>{city.name}</span>
                      </a>
                    </div>
                  </div>
                  <OfferCards offers={offers.filter((offer) => offer.city.name === city.name)} handleListItemHover={handleListItemHover} offerCardType={OfferCardType.FAVORITES_PAGE}/>
                </li>)))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
