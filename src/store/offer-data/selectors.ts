import { NameSpace } from '../../consts/const';
import { Comments } from '../../types/comment';
import { OfferFullInfo } from '../../types/offer-full-info';
import { State } from '../../types/state';

export const getCurrentOffer = (state: State): OfferFullInfo | null => state[NameSpace.Offer].currentOffer;
export const getComments = (state: State): Comments => state[NameSpace.Offer].comments;
export const getOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isOfferLoading;
export const getCommentSendingStatus = (state: State): boolean => state[NameSpace.Offer].isCommentSending;
export const getCommentSendingSuccessStatus = (state: State): boolean | null => state[NameSpace.Offer].didCommentSendSuccessfully;
