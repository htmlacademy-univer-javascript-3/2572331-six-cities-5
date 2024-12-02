import { Offers } from '../types/offer';

export function getOffersByCityName(offers: Offers, cityName: string): Offers {
  return offers.filter((offersElement) => offersElement.cityName === cityName);
}
