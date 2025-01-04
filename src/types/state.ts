import { AuthorizationStatus } from '../consts/const';
import { store } from '../store';
import { City } from './city';
import { Comments } from './comment';
import { Offers } from './offer';
import { OfferFullInfo } from './offer-full-info';

export type UserAuthData = {
  authorizationStatus: AuthorizationStatus;
};

export type OffersData = {
  offers: Offers;
  areOffersLoading: boolean;
};

export type OfferData = {
  currentOffer: OfferFullInfo | null;
  comments: Comments;
  isOfferLoading: boolean;
  isCommentSending: boolean;
  didCommentSendSuccessfully: boolean | null;
};

export type MainData = {
  city: City;
  error: string | null;
};

export type FavoritesData = {
  favorites: Offers;
  areFavoritesLoading: boolean;
  didFavoritesSendSuccessfully: boolean | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
