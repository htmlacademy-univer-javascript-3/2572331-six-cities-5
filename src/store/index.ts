import { configureStore } from '@reduxjs/toolkit';
import { REDUCER } from '../types/reducer/reducer';

export const STORE = configureStore({ REDUCER });
