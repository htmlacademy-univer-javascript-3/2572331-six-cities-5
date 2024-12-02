import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../offer';
import { City } from '../city';

export const changeCity = createAction<City>('city/changeCity');
export const setOffers = createAction<Offers>('offers/setOffers');
