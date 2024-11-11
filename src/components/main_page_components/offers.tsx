import { Offers } from '../../types/offer';
import { CreateOffer } from './offer';
import { OfferCardType } from './offerCardType';

type OffersProps = {
  offers: Offers;
  handleListItemHover: (itemId: string) => void;
  offerCardType: OfferCardType;
}

export function CreateOffers({offers, handleListItemHover, offerCardType} : OffersProps) : JSX.Element {
  const offersToRender = !offerCardType.favoritesOnly ? offers : offers.filter((offer) => offer.isFavorite);

  return(
    <div className={offerCardType.placeCardsClassName}>
      {offersToRender.map((offer) =>
        (
          <CreateOffer offer={offer} handleListItemHover={handleListItemHover} offerCardType={offerCardType} key={offer.id}/>
        )
      )}
    </div>
  );
}
