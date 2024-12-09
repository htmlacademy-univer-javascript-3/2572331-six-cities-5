import { REVIEWS_PAGE_SIZE } from '../consts/const';
import { Comments } from '../types/comment';

export function getReviewsByOffer(reviews: Comments, offerId: string, page: number): Comments {
  return reviews.filter((reviewsElement) => reviewsElement.offerId === offerId).slice(REVIEWS_PAGE_SIZE * page, REVIEWS_PAGE_SIZE * page + 10);
}
