import { combineReducers } from '@reduxjs/toolkit';
import { userAuthData } from './user-auth-data/user-auth-data';
import { offersData } from './offers-data/offers-data';
import { offerData } from './offer-data/offer-data';
import { mainData } from './main-data/main-data';
import { NameSpace } from '../consts/const';

export const rootReducer = combineReducers({
  [NameSpace.UserAuth]: userAuthData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Main]: mainData.reducer
});
