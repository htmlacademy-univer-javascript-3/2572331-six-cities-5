import { Comment } from '../../types/comment';

type ReviewProps = {
  review: Comment;
}

export function CreateReview({review} : ReviewProps) : JSX.Element {
  const reviewDate = new Date(review.date);

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(review.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={`${reviewDate.getFullYear()}-${reviewDate.getMonth()}-${reviewDate.getDay()}`}>
          {`${reviewDate.toLocaleString('default', { month: 'long' })} ${reviewDate.getFullYear()}`}
        </time>
      </div>
    </li>
  );
}
