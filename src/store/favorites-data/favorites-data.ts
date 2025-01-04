import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts/const';
import { FavoritesData } from '../../types/state';
import { Offers } from '../../types/offer';

const initialState: FavoritesData = {
  favorites: [],
  areFavoritesLoading: false,
  didFavoritesSendSuccessfully: null
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<Offers>) => {
      state.favorites = action.payload;
    },
    setFavoritesLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.areFavoritesLoading = action.payload;
    },
    setFavoritesSendingSuccessStatus: (state, action: PayloadAction<boolean | null>) => {
      state.didFavoritesSendSuccessfully = action.payload;
    }
  }
});
