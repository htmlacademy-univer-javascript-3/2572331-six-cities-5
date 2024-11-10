import { Dispatch, SetStateAction } from 'react';
import { Offer } from '../../props/offer';
import { Link } from 'react-router-dom';

type OfferProps = {
  offer: Offer;
  setCurrentPointedOffer: Dispatch<SetStateAction<string | null>>;
  favoritesOnly: boolean;
}

export function CreateOffer({offer, setCurrentPointedOffer, favoritesOnly} : OfferProps) {
  return(
    <article className={`${!favoritesOnly ? 'cities' : 'favorites'}__card place-card`} onMouseOver={() => setCurrentPointedOffer(offer.id)}>
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div className={`${!favoritesOnly ? 'cities' : 'favorites'}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImageSource} width={!favoritesOnly ? '260' : '150'} height={!favoritesOnly ? '200' : '110'} alt="Place image"/>
        </a>
      </div>
      <div className={`${!favoritesOnly ? '' : 'favorites__card-info '}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.costPerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {offer.isFavorite ?
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
            :
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
