import { useState } from 'react';
import { OfferCards } from '../components/offerCards/offerCards';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import Map from '../components/map/map';
import { OfferCardType } from '../components/offerCards/offerCardType';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeCity } from '../store/action';
import { CitiesPanel } from '../components/main_page_components/cities';
import { CITIES } from '../consts/cities';
import { getOffersByCityName } from '../extensions/offerExtensions';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers);
  let city = useAppSelector((state) => state.city);

  let filteredOffers = getOffersByCityName(offers, city.title);

  const [currentPointedOffer, setCurrentPointedOffer] = useState<Offer | undefined>(undefined);

  const handleCityChange = (newCity: City) => {
    setCurrentPointedOffer(undefined);
    dispatch(changeCity(newCity));
    city = newCity;
    filteredOffers = getOffersByCityName(offers, newCity.title);
  };

  const handleListItemHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setCurrentPointedOffer(currentOffer);
  };

  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesPanel cities={CITIES} handleCityChange={handleCityChange} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {city.title}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OfferCards offers={filteredOffers} handleListItemHover={handleListItemHover} offerCardType={OfferCardType.MAIN_PAGE}/>
            </section>
            <div className="cities__right-section">
              <Map className='cities__map map' city={city} offers={filteredOffers} selectedOffer={currentPointedOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>);
}
