import { User } from './user';

export type Review = {
  id: string;
  offerId: string;
  author: User;
  starsRating: number;
  textReview: string;
  date: Date;
}

export type Reviews = Review[];
