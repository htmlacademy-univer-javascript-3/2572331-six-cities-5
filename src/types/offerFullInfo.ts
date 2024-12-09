import { Offer, Offers } from './offer';
import { Comments } from './comment';

export type OfferFullInfo = {
  offer: Offer;
  offersNearby: Offers;
  comments: Comments;
}
