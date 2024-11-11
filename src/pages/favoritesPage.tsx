import { useState } from 'react';
import { CreateOffers } from '../components/main_page_components/offers';
import { Offer } from '../types/offer';
import { OfferCardType } from '../components/main_page_components/offerCardType';

type FavoritesPageProps = {
  offers: Offer[];
}

export function CreateFavoritesPage({offers} : FavoritesPageProps): JSX.Element {
  const [, setCurrentPointedOffer] = useState<Offer | undefined>(undefined);

  const handleListItemHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setCurrentPointedOffer(currentOffer);
  };

  const cities = [...new Set(offers.map(({ cityName: city }) => city))];

  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map(((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <CreateOffers offers={offers.filter((offer) => offer.cityName === city)} handleListItemHover={handleListItemHover} offerCardType={OfferCardType.FAVORITES_PAGE}/>
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
