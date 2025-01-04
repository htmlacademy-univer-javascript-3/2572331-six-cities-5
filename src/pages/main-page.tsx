import { useState } from 'react';
import { OfferCards } from '../components/offer-cards/offer-cards';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import Map from '../components/map/map';
import { OfferCardType } from '../components/offer-cards/offer-card-type';
import { useAppDispatch, useAppSelector } from '../hooks';
import CitiesPanel from '../components/main-page-components/cities';
import { CITIES } from '../consts/cities';
import { getOffersByCityName } from '../extensions/offer-extensions';
import { Sorting } from '../components/main-page-components/sorting';
import { SORTING_ALGORITHMS } from '../consts/sorting-algorithms';
import Header from '../components/header/header';
import { getOffers } from '../store/offers-data/selectors';
import { getCity } from '../store/main-data/selectors';
import { changeCity } from '../store/main-data/actions';
import { getToken } from '../services/auth-storage';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector(getOffers);
  let city = useAppSelector(getCity);

  let filteredOffers = getOffersByCityName(offers, city.name);

  const [currentPointedOffer, setCurrentPointedOffer] = useState<Offer | undefined>(undefined);
  const [sortingIndex, setSorting] = useState<number>(0);

  const handleCityChange = (newCity: City) => {
    setCurrentPointedOffer(undefined);
    dispatch(changeCity(newCity));
    city = newCity;
    filteredOffers = getOffersByCityName(offers, newCity.name);
  };

  const handleListItemHover = (pointedOffer: Offer) => {
    setCurrentPointedOffer(pointedOffer);
  };

  const sortedFilteredOffers = SORTING_ALGORITHMS[sortingIndex].action(filteredOffers);

  return(
    <div className="page page--gray page--main">
      <Header jwtToken={getToken()}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesPanel cities={CITIES} handleCityChange={handleCityChange} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedFilteredOffers.length} places to stay in {city.name}</b>
              <Sorting sortingIndex={sortingIndex} setSorting={setSorting} />
              <OfferCards offers={sortedFilteredOffers} handleListItemHover={handleListItemHover} offerCardType={OfferCardType.MAIN_PAGE}/>
            </section>
            <div className="cities__right-section">
              <Map className='cities__map map' city={city} offers={sortedFilteredOffers} selectedOffer={currentPointedOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>);
}
