import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../consts/const';
import { UserAuthData } from '../../types/state';

const initialState: UserAuthData = {
  authorizationStatus: AuthorizationStatus.NoAuth
};

export const userAuthData = createSlice({
  name: NameSpace.UserAuth,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    }
  }
});
