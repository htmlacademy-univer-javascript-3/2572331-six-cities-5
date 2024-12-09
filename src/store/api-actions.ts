import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State, store } from '.';
import { Offer, Offers } from '../types/offer';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts/const';
import { requireAuthorization, setComments, setCommentSendingStatus, setCommentSentSuccessfully, setError, setOffer, setOfferLoadingStatus, setOffers, setOffersDataLoadingStatus } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/auth-storage';
import { Comments } from '../types/comment';
import { CommentSendFormState } from '../types/comment-send-form-state';

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
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
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

      dispatch(setOffer({offer, offersNearby, comments}));
    } finally {
      dispatch(setOfferLoadingStatus(false));
    }
  },
);

export const getCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffers',
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
  'data/getOffer',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setCommentSendingStatus(true));
    try {
      await api.post<Comment>(APIRoute.CommentsPrefix + offerId, {comment: comment, rating: +rating});
      dispatch(setCommentSentSuccessfully(true));
    } catch (error) {
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
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
