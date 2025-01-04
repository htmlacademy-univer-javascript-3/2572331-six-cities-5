import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts/const';
import { OffersData } from '../../types/state';
import { Offers } from '../../types/offer';

const initialState: OffersData = {
  offers: [],
  areOffersLoading: false
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<Offers>) => {
      state.offers = action.payload;
    },
    setOffersLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.areOffersLoading = action.payload;
    }
  }
});
