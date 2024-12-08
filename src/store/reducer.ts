import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../mocks/offers';
import { CITIES } from '../mocks/cities';
import { changeCity, setOffers, setReviews } from './action';
import { getCityByName } from '../extensions/cityExtensions';
import { ReducerState } from '../types/reducerState';
import { REVIEWS } from '../mocks/reviews';

const initialState: ReducerState = {
  city: getCityByName(CITIES, 'Paris'),
  offers: OFFERS,
  reviews: REVIEWS
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = OFFERS;
    })
    .addCase(setReviews, (state) => {
      state.reviews = REVIEWS;
    });
});
