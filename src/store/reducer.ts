import { createReducer } from '@reduxjs/toolkit';
import { changeCity, requireAuthorization, setComments, setCommentSendingStatus, setCommentSentSuccessfully, setError, setOffer, setOfferLoadingStatus, setOffers, setOffersDataLoadingStatus } from './action';
import { getCityByName } from '../extensions/cityExtensions';
import { CITIES } from '../consts/cities';
import { AuthorizationStatus } from '../consts/const';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { OfferFullInfo } from '../types/offerFullInfo';
import { Comments } from '../types/comment';

type InitialState = {
  city: City;
  offers: Offers;
  comments: Comments;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isOfferLoading: boolean;
  isCommentSending: boolean;
  didCommentSendSuccessfully: boolean;
  currentOffer: OfferFullInfo | null;
  error: string | null;
};

const initialState: InitialState = {
  city: getCityByName(CITIES, 'Paris'),
  offers: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isOfferLoading: false,
  isCommentSending: false,
  didCommentSendSuccessfully: false,
  currentOffer: null,
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
    .addCase(setOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(setCommentSendingStatus, (state, action) => {
      state.isCommentSending = action.payload;
    })
    .addCase(setCommentSentSuccessfully, (state, action) => {
      state.didCommentSendSuccessfully = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
