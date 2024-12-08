import { REVIEWS_PAGE_SIZE } from '../consts/const';
import { Reviews } from '../types/review';

export function getReviewsByOffer(reviews: Reviews, offerId: string, page: number): Reviews {
  return reviews.filter((reviewsElement) => reviewsElement.offerId === offerId).slice(REVIEWS_PAGE_SIZE * page, REVIEWS_PAGE_SIZE * page + 10);
}
