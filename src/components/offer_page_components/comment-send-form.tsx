import { Dispatch, FormEvent, SetStateAction } from 'react';
import { CommentSendFormState } from '../../types/comment-send-form-state';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addCommentAction } from '../../store/api-actions';

type CommentSendFormProps = {
  commentFormData: CommentSendFormState;
  setCommentFormData: Dispatch<SetStateAction<CommentSendFormState>>;
}

export function CommentSendForm({commentFormData: commentFormData, setCommentFormData} : CommentSendFormProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const isCommentSending = useAppSelector((state) => state.isCommentSending);

  const handleFieldChange = (event: { target: { name: string; value: number | string } }) => {
    const {name, value} = event.target;
    setCommentFormData({...commentFormData, [name]: value});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(addCommentAction(commentFormData));
  };

  return(
    <form className="reviews__form form" action="" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" disabled={isCommentSending || commentFormData.comment.length < 50 || commentFormData.comment.length > 300 || commentFormData.rating === 0}>
          {isCommentSending ? 'Submitting' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
