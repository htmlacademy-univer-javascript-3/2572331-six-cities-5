import { Offers } from '../types/offer';
import { SortingAlgorithms } from '../types/sortingAlgorithm';

export const SORTING_ALGORITHMS: SortingAlgorithms = [
  {
    name: 'Popular',
    action: (offers: Offers): Offers => offers
  },
  {
    name: 'Price: low to high',
    action: (offers: Offers): Offers => offers.sort((offerA, offerB) => offerA.costPerNight - offerB.costPerNight)
  },
  {
    name: 'Price: high to low',
    action: (offers: Offers): Offers => offers.sort((offerA, offerB) => offerB.costPerNight - offerA.costPerNight)
  },
  {
    name: 'Top rated first',
    action: (offers: Offers): Offers => offers.sort((offerA, offerB) => offerB.rating - offerA.rating)
  }
];
