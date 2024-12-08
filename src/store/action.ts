import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { City } from '../types/city';
import { Reviews } from '../types/review';

export const changeCity = createAction<City>('city/changeCity');
export const setOffers = createAction<Offers>('offers/setOffers');
export const setReviews = createAction<Reviews>('reviews/setReviews');
