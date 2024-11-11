import { Reviews } from '../../types/review';
import { CreateReview } from './review';

type ReviewsProps = {
  reviews: Reviews;
}

export function CreateReviews({reviews} : ReviewsProps) : JSX.Element {
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
