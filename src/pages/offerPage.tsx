import { useEffect, useState } from 'react';
import { CommentSendForm } from '../components/offer_page_components/comment-send-form';
import { CreateReviews } from '../components/offer_page_components/reviews';
import { CommentSendFormState } from '../types/comment-send-form-state';
import { Offer } from '../types/offer';
import { useParams } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Map from '../components/map/map';
import { OfferCards } from '../components/offerCards/offerCards';
import { OfferCardType } from '../components/offerCards/offerCardType';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Header } from '../components/header/header';
import { getCommentsAction, getOfferAction } from '../store/api-actions';
import { LoadingScreen } from './loading-screen';
import { NotFoundPage } from './notFoundPage';
import { getToken } from '../services/auth-storage';

export function OfferPage(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const offerFullInfo = useAppSelector((state) => state.currentOffer);
  const offer = offerFullInfo?.offer;
  const offersNearby = offerFullInfo?.offersNearby.slice(0, 3);
  const comments = offerFullInfo?.comments;
  const city = offer?.city;

  const [currentPointedOffer, setCurrentPointedOffer] = useState<Offer | undefined>(undefined);
  const [commentFormData, setCommentFormData] = useState<CommentSendFormState>({
    offerId: id,
    rating: 0,
    comment: ''
  });

  useEffect(() => {
    if (id) {
      dispatch(getOfferAction(id));
      dispatch(getCommentsAction(id));
    }
  }, [dispatch, id]);

  const isOfferLoading = useAppSelector((state) => state.isOfferLoading);

  if (isOfferLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (!offer || !offersNearby || !comments || !city) {
    return(
      <NotFoundPage />
    );
  }

  const handleListItemHover = (pointedOffer: Offer) => {
    setCurrentPointedOffer(pointedOffer);
  };

  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer?.images.map((image) =>
                (
                  <div className="offer__image-wrapper" key={image}>
                    <img className="offer__image" src={image} alt="Photo studio"/>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
                : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                {offer.isFavorite ?
                  <button className="offer__bookmark-button offer__bookmark-button--active button" type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                  :
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>}
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating.toFixed(1)}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((goodsItem) =>
                    (
                      <li className="offer__inside-item" key={goodsItem}>
                        {goodsItem}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro ?
                    <span className="offer__user-status">
                      {offer.host.isPro}
                    </span>
                    : null}
                </div>
                <div className="offer__description">
                  {offer.description.split(/\r?\n/).map((offerText) =>
                    (
                      <p className="offer__text" key={uuidv4()}>
                        {offerText}
                      </p>
                    )
                  )}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <CreateReviews reviews={comments} />
                {getToken()
                  ?
                  <CommentSendForm commentFormData={commentFormData} setCommentFormData={setCommentFormData} />
                  : null}
              </section>
            </div>
          </div>
          <Map className='offer__map map' city={city} offers={offersNearby.concat(offer)} selectedOffer={currentPointedOffer}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferCards offers={offersNearby} handleListItemHover={handleListItemHover} offerCardType={OfferCardType.OFFER_PAGE}/>
          </section>
        </div>
      </main>
    </div>
  );
}
