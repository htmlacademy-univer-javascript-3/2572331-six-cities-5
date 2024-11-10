import { User } from './user';

export type Review = {
  id: string;
  author: User;
  starsRating: number;
  textReview: string;
  date: Date;
}
