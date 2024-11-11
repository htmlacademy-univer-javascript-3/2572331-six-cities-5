import { Coordinates } from './coordinates';
import { OfferInfo } from './offerInfo';

export type Offer = {
  id: string;
  previewImageSource: string;
  isPremium: boolean;
  costPerNight: number;
  title: string;
  type: string;
  isFavorite: boolean;
  rating: number;
  cityName: string;
  location: Coordinates;
  info: OfferInfo;
};

export type Offers = Offer[];
