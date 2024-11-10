import { Review } from '../../props/review';
import { CreateReview } from './review';

type ReviewsProps = {
  reviews: Review[];
}

export function CreateReviews({reviews} : ReviewsProps) {
  return(
    <ul className="reviews__list">
      {reviews.map((review) =>
        (
          <CreateReview review={review} key={review.id}/>
        )
      )}
    </ul>
  );
}
