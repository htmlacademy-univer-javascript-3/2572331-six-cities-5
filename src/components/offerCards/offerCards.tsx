import { Offers } from '../../types/offer';
import { OfferCard } from './offerCard';
import { OfferCardType } from './offerCardType';

type OffersProps = {
  offers: Offers;
  handleListItemHover: (itemId: string) => void;
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
