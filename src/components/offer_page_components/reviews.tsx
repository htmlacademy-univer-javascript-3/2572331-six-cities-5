import { Comments } from '../../types/comment';
import { CreateReview } from './review';

type ReviewsProps = {
  reviews: Comments;
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
