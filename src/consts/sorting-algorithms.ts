import { Offers } from '../types/offer';
import { SortingAlgorithms } from '../types/sorting-algorithm';

export const SORTING_ALGORITHMS: SortingAlgorithms = [
  {
    name: 'Popular',
    action: (offers: Offers): Offers => offers
  },
  {
    name: 'Price: low to high',
    action: (offers: Offers): Offers => offers.sort((offerA, offerB) => offerA.price - offerB.price)
  },
  {
    name: 'Price: high to low',
    action: (offers: Offers): Offers => offers.sort((offerA, offerB) => offerB.price - offerA.price)
  },
  {
    name: 'Top rated first',
    action: (offers: Offers): Offers => offers.sort((offerA, offerB) => offerB.rating - offerA.rating)
  }
];
