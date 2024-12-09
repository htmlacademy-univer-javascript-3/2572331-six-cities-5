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
import { Sorting } from '../components/main_page_components/sorting';
import { SORTING_ALGORITHMS } from '../consts/sortingAlgorithms';
import { Header } from '../components/header/header';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers);
  let city = useAppSelector((state) => state.city);

  let filteredOffers = getOffersByCityName(offers, city.name);

  const [currentPointedOffer, setCurrentPointedOffer] = useState<Offer | undefined>(undefined);
  const [sortingIndex, setSorting] = useState<number>(0);

  const handleCityChange = (newCity: City) => {
    setCurrentPointedOffer(undefined);
    dispatch(changeCity(newCity));
    city = newCity;
    filteredOffers = getOffersByCityName(offers, newCity.name);
  };

  const handleListItemHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setCurrentPointedOffer(currentOffer);
  };

  const sortedFilteredOffers = SORTING_ALGORITHMS[sortingIndex].action(filteredOffers);

  return(
    <div className="page page--gray page--main">
      <Header />

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
