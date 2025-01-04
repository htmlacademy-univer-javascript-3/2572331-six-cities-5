import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts/const';
import { MainData } from '../../types/state';
import { City } from '../../types/city';
import { getCityByName } from '../../extensions/city-extensions';
import { CITIES } from '../../consts/cities';

const initialState: MainData = {
  city: getCityByName(CITIES, 'Paris'),
  error: null
};

export const mainData = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});
