import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts/const';
import { OfferData } from '../../types/state';
import { Comments } from '../../types/comment';
import { OfferFullInfo } from '../../types/offer-full-info';

const initialState: OfferData = {
  currentOffer: null,
  comments: [],
  isOfferLoading: false,
  isCommentSending: false,
  didCommentSendSuccessfully: null
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setCurrentOffer: (state, action: PayloadAction<OfferFullInfo>) => {
      state.currentOffer = action.payload;
    },
    setComments: (state, action: PayloadAction<Comments>) => {
      state.comments = action.payload;
    },
    setOfferLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOfferLoading = action.payload;
    },
    setCommentSendingStatus: (state, action: PayloadAction<boolean>) => {
      state.isCommentSending = action.payload;
    },
    setCommentSendingSuccessStatus: (state, action: PayloadAction<boolean | null>) => {
      state.didCommentSendSuccessfully = action.payload;
    }
  }
});
