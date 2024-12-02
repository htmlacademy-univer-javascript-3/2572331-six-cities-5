import { Cities, City } from '../types/city';

export function getCityByName(cities: Cities, cityName: string): City {
  const city = cities.find((citiesElement) => citiesElement.title === cityName);
  if (city === undefined) {
    throw new TypeError('The value was promised to always be there!');
  }

  return city;
}
