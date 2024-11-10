import { Dispatch, SetStateAction } from 'react';
import { Offer } from '../../props/offer';
import { CreateOffer } from './offer';

type OffersProps = {
  offers: Offer[];
  setCurrentPointedOffer: Dispatch<SetStateAction<string | null>>;
  favoritesOnly: boolean;
}

export function CreateOffers({offers, setCurrentPointedOffer, favoritesOnly} : OffersProps): JSX.Element {
  const offersToRender = !favoritesOnly ? offers : offers.filter((offer) => offer.isFavorite);

  return(
    <div className={!favoritesOnly ? 'cities__places-list places__list tabs__content' : 'favorites__places'}>
      {offersToRender.map((offer) =>
        (
          <CreateOffer offer={offer} setCurrentPointedOffer={setCurrentPointedOffer} favoritesOnly={favoritesOnly} key={offer.id}/>
        )
      )}
    </div>
  );
}
