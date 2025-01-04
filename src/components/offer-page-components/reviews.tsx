import { memo } from 'react';
import { Comments } from '../../types/comment';
import { Review } from './review';

type ReviewsProps = {
  reviews: Comments;
}

function NotMemoizedReviews({reviews} : ReviewsProps) : JSX.Element {
  return(
    <ul className="reviews__list">
      {reviews.map((review) =>
        (
          <Review review={review} key={review.id}/>
        )
      )}
    </ul>
  );
}

const Reviews = memo(NotMemoizedReviews);
export default Reviews;
