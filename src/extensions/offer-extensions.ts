import { Offer, Offers } from '../types/offer';

export function getOffersByCityName(offers: Offers, cityName: string): Offers {
  return offers.filter((offersElement) => offersElement.city.name === cityName);
}

export function getOfferById(offers: Offers, id: string): Offer {
  const offer = offers.find((offersElement) => offersElement.id === id);
  if (offer === undefined) {
    throw new TypeError('The value was promised to always be there!');
  }

  return offer;
}
