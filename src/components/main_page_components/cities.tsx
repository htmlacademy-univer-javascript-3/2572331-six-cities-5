import { useAppSelector } from '../../hooks';
import { Cities, City } from '../../types/city';

type CitiesProps = {
  cities: Cities;
  handleCityChange: (newCity: City) => void;
}

export function CitiesPanel({cities, handleCityChange} : CitiesProps) : JSX.Element {
  const currentCity = useAppSelector((state) => state.city);

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) =>
            (
              <li className="locations__item" key={city.title} onClick={() => handleCityChange(city)}>
                <a className={`locations__item-link tabs__item${currentCity.title === city.title ? ' tabs__item--active' : ''}`} href="#">
                  <span>{city.title}</span>
                </a>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
