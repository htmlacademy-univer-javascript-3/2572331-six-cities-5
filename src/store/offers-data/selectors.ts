import { NameSpace } from '../../consts/const';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].areOffersLoading;
