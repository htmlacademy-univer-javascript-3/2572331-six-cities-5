export class OfferCardType {
  static readonly MAIN_PAGE = new OfferCardType('cities', 'cities__places-list places__list tabs__content', 'place-card__info');
  static readonly FAVORITES_PAGE = new OfferCardType('favorites', 'favorites__places', 'favorites__card-info place-card__info');
  static readonly OFFER_PAGE = new OfferCardType('near-places', 'near-places__list places__list', 'place-card__info');

  favoritesOnly: boolean;
  imageSize: {
    width: number;
    height: number;
  };

  private constructor(public readonly className: string,
    public readonly placeCardsClassName: string,
    public readonly PlaceCardInfoClassName: string) {
    this.favoritesOnly = this.className === 'favorites';
    this.imageSize = !this.favoritesOnly ? { width: 260, height: 200 } : { width: 150, height: 110 };
  }
}
