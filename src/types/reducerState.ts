import { City } from './city';
import { Offers } from './offer';
import { Reviews } from './review';

export type ReducerState = {
  city: City;
  offers: Offers;
  reviews: Reviews;
};
