import { User } from './user';

export type OfferInfo = {
  imagesSources: string[];
  bedroomsCount: number;
  maxAdultsCount: number;
  insideItems: string[];
  host: User;
  offerText: string;
};
