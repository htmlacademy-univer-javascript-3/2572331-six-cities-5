import { NameSpace } from '../../consts/const';
import { City } from '../../types/city';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.Main].city;
export const getError = (state: State): string | null => state[NameSpace.Main].error;
