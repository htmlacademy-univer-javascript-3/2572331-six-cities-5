import { Review } from '../../types/review';

type ReviewProps = {
  review: Review;
}

export function CreateReview({review} : ReviewProps) : JSX.Element {
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.author.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.author.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(review.starsRating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.textReview}
        </p>
        <time className="reviews__time" dateTime={`${review.date.getFullYear()}-${review.date.getMonth()}-${review.date.getDay()}`}>
          {`${review.date.toLocaleString('default', { month: 'long' })} ${review.date.getFullYear()}`}
        </time>
      </div>
    </li>
  );
}
