import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../offer';
import { OFFERS } from '../../mocks/offers';
import { CITIES } from '../../mocks/cities';
import { changeCity, setOffers } from './action';
import { City } from '../city';
import { getCityByName } from '../../extensions/cityExtensions';

type ReducerState = {
  city: City;
  offers: Offers;
};

const initialState: ReducerState = {
  city: getCityByName(CITIES, 'Paris'),
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = OFFERS;
    });
});
