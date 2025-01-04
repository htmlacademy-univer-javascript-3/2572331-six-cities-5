import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/main-data/selectors';
import { Cities, City } from '../../types/city';

type CitiesProps = {
  cities: Cities;
  handleCityChange: (newCity: City) => void;
}

export function NotMemoizedCitiesPanel({cities, handleCityChange} : CitiesProps) : JSX.Element {
  const currentCity = useAppSelector(getCity);

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) =>
            (
              <li className="locations__item" key={city.name} onClick={() => handleCityChange(city)}>
                <a className={`locations__item-link tabs__item${currentCity.name === city.name ? ' tabs__item--active' : ''}`} href="#">
                  <span>{city.name}</span>
                </a>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}

const CitiesPanel = memo(NotMemoizedCitiesPanel);
export default CitiesPanel;
