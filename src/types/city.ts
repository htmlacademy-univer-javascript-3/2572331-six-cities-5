import { Coordinates } from './coordinates';

export type City = {
  title: string;
  coordinates: Coordinates;
  zoom: number;
};

export type Cities = City[];
