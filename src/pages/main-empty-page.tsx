import Header from '../components/header/header';
import CitiesPanel from '../components/main-page-components/cities';
import { CITIES } from '../consts/cities';
import { useAppSelector } from '../hooks';
import { getToken } from '../services/auth-storage';
import { getCity } from '../store/main-data/selectors';
import { City } from '../types/city';

type MainEmptyPageProps = {
  handleCityChange: (newCity: City) => void;
}

export function MainEmptyPage({handleCityChange} : MainEmptyPageProps): JSX.Element {
  const city = useAppSelector(getCity);

  return(
    <div className="page page--gray page--main">
      <Header jwtToken={getToken()} />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesPanel cities={CITIES} handleCityChange={handleCityChange} />
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
