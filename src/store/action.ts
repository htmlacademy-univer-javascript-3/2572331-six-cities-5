import {createAction} from '@reduxjs/toolkit';
import { AppRoute } from '../consts/const';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
