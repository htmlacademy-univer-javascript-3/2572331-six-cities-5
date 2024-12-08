import { createReducer } from '@reduxjs/toolkit';
import { changeCity, requireAuthorization, setError, setOffers, setOffersDataLoadingStatus } from './action';
import { getCityByName } from '../extensions/cityExtensions';
import { CITIES } from '../consts/cities';
import { AuthorizationStatus } from '../consts/const';
import { City } from '../types/city';
import { Offers } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: getCityByName(CITIES, 'Paris'),
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
