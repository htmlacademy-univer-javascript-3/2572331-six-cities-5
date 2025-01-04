import { NameSpace } from '../../consts/const';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';

export const getFavorites = (state: State): Offers => state[NameSpace.Favorites].favorites;
export const getFavoritesLoadingStatus = (state: State): boolean => state[NameSpace.Favorites].areFavoritesLoading;
export const getFavoritesSendingSuccessStatus = (state: State): boolean | null => state[NameSpace.Favorites].didFavoritesSendSuccessfully;
