import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { City } from '../types/city';
import { AuthorizationStatus } from '../consts/const';
import { OfferFullInfo } from '../types/offerFullInfo';
import { Comments } from '../types/comment';

export const changeCity = createAction<City>('city/changeCity');
export const setOffers = createAction<Offers>('offers/setOffers');
export const setOffer = createAction<OfferFullInfo | null>('offer/setOffer');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setOfferLoadingStatus = createAction<boolean>('data/setOfferLoadingStatus');
export const setComments = createAction<Comments>('comments/setComments');
export const setCommentSendingStatus = createAction<boolean>('data/setCommentSendingStatus');
export const setCommentSentSuccessfully = createAction<boolean>('comment/setCommentSentSuccessfully');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('game/setError');
