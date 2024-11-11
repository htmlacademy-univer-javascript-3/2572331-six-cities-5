import { Reviews } from '../types/review';

export const REVIEWS: Reviews = [
  {
    id: '00e23b69-e0a3-4151-a1b0-bbf2f72785d5',
    author: {
      id: 'adfe717d-7d60-4e70-b609-e9ed0be5eaf3',
      email: 'test@test.com',
      name: 'Max',
      status: 'Pro',
      avatarSource: 'img/avatar-max.jpg'
    },
    starsRating: 4,
    textReview: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: new Date(2019, 3, 19)
  }
];
