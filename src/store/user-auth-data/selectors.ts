import { AuthorizationStatus, NameSpace } from '../../consts/const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.UserAuth].authorizationStatus;
