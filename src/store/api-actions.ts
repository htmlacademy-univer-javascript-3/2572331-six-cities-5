import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { Offer, Offers } from '../types/offer';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts/const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/auth-storage';
import { Comments } from '../types/comment';
import { CommentSendFormState } from '../types/comment-send-form-state';
import { setAuthorizationStatus } from './user-auth-data/actions';
import { AppDispatch, State } from '../types/state';
import { setComments, setCommentSendingStatus, setCommentSendingSuccessStatus, setCurrentOffer, setOfferLoadingStatus } from './offer-data/actions';
import { setError } from './main-data/actions';
import { store } from '.';
import { setOffers, setOffersLoadingStatus } from './offers-data/actions';
import { setFavorites, setFavoritesLoadingStatus, setFavoritesSendingSuccessStatus } from './favorites-data/actions';
import { FavoritesSendState } from '../types/favorites-send-state';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const getOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(setOffers(data));
  },
);

export const getOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferLoadingStatus(true));
    try {
      const { data: offer } = await api.get<Offer>(APIRoute.OffersPrefix + offerId);
      const { data: offersNearby } = await api.get<Offers>(APIRoute.OffersPrefix + offerId + APIRoute.GetOffersNearbySuffix);
      const { data: comments } = await api.get<Comments>(APIRoute.CommentsPrefix + offerId);

      dispatch(setCurrentOffer({offer, offersNearby, comments}));
      dispatch(setComments(comments));
    } finally {
      dispatch(setOfferLoadingStatus(false));
    }
  },
);

export const getFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setFavoritesLoadingStatus(true));
      const { data } = await api.get<Offers>(APIRoute.Favorite);
      dispatch(setFavorites(data));
    } finally {
      dispatch(setFavoritesLoadingStatus(false));
    }
  },
);

export const addFavoriteAction = createAsyncThunk<void, FavoritesSendState, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async ({offerId, status}, {dispatch, extra: api}) => {
    try {
      await api.post<Comment>(`${APIRoute.FavoritePrefix}${offerId}/${status}`);

      if (offerId) {
        dispatch(getFavoritesAction());
      }
      dispatch(setFavoritesSendingSuccessStatus(true));
    } catch (error) {
      dispatch(setFavoritesSendingSuccessStatus(false));
      dispatch(setError('Что-то пошло не так, попробуйте снова'));
    }
  },
);

export const getCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getComments',
  async (offerId, {dispatch, extra: api}) => {
    const { data } = await api.get<Comments>(APIRoute.CommentsPrefix + offerId);
    dispatch(setComments(data));
  },
);

export const addCommentAction = createAsyncThunk<void, CommentSendFormState, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setCommentSendingStatus(true));
    try {
      await api.post<Comment>(APIRoute.CommentsPrefix + offerId, {comment: comment, rating: +rating});

      if (offerId) {
        dispatch(getCommentsAction(offerId));
      }
      dispatch(setCommentSendingSuccessStatus(true));
    } catch (error) {
      dispatch(setCommentSendingSuccessStatus(false));
      dispatch(setError('Что-то пошло не так, попробуйте отправить комментарий снова'));
    } finally {
      dispatch(setCommentSendingStatus(false));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token, email);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    dropToken();
    await api.delete(APIRoute.Logout);
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);
