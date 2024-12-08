import { Offers } from './offer';

export type SortingAlgorithm = {
  name: string;
  action: (offers: Offers) => Offers;
}

export type SortingAlgorithms = SortingAlgorithm[];
