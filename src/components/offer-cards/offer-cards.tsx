import { Offer, Offers } from '../../types/offer';
import { OfferCard } from './offer-card';
import { OfferCardType } from './offer-card-type';

type OffersProps = {
  offers: Offers;
  handleListItemHover: (offer: Offer) => void;
  offerCardType: OfferCardType;
}

export function OfferCards({offers, handleListItemHover, offerCardType} : OffersProps) : JSX.Element {
  const offersToRender = !offerCardType.favoritesOnly ? offers : offers.filter((offer) => offer.isFavorite);

  return(
    <div className={offerCardType.placeCardsClassName}>
      {offersToRender.map((offer) =>
        (
          <OfferCard offer={offer} handleListItemHover={handleListItemHover} offerCardType={offerCardType} key={offer.id}/>
        )
      )}
    </div>
  );
}
