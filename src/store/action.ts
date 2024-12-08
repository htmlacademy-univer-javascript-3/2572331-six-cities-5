import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { City } from '../types/city';
import { Reviews } from '../types/review';
import { AuthorizationStatus } from '../consts/const';

export const changeCity = createAction<City>('city/changeCity');
export const setOffers = createAction<Offers>('offers/setOffers');
export const setReviews = createAction<Reviews>('reviews/setReviews');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('game/setError');
