import { Offers } from '../../types/offer';
import { CreateOffer } from './offer';

type OffersProps = {
  offers: Offers;
  handleListItemHover: (itemId: string) => void;
  favoritesOnly: boolean;
}

export function CreateOffers({offers, handleListItemHover, favoritesOnly} : OffersProps): JSX.Element {
  const offersToRender = !favoritesOnly ? offers : offers.filter((offer) => offer.isFavorite);

  return(
    <div className={!favoritesOnly ? 'cities__places-list places__list tabs__content' : 'favorites__places'}>
      {offersToRender.map((offer) =>
        (
          <CreateOffer offer={offer} handleListItemHover={handleListItemHover} favoritesOnly={favoritesOnly} key={offer.id}/>
        )
      )}
    </div>
  );
}
