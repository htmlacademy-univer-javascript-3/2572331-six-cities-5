import { Coordinates } from './coordinates';

export type Offer = {
  id: string;
  previewImageSource: string;
  isPremium: boolean;
  costPerNight: number;
  title: string;
  type: string;
  isFavorite: boolean;
  rating: number;
  city: string;
  location: Coordinates;
};

export type Offers = Offer[];
