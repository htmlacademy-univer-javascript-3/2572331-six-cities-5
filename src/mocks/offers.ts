import { Offer } from '../props/offer';

export const offers: Offer[] = [
  {
    id: '4154ec97-ab51-4926-8493-0763e06d6358',
    previewImageSource: 'img/apartment-01.jpg',
    isPremium: true,
    costPerNight: 120,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isFavorite: true,
    rating: 4.0,
    city: 'Amsterdam',
    location: {
      latitude: 0,
      longitude: 0
    }
  },
  {
    id: '9463d215-41bd-4bfb-83cc-46e9b9b317cb',
    previewImageSource: 'img/room.jpg',
    isPremium: false,
    costPerNight: 80,
    title: 'Wood and stone place',
    type: 'Room',
    isFavorite: true,
    rating: 4.0,
    city: 'Amsterdam',
    location: {
      latitude: 0,
      longitude: 0
    }
  },
  {
    id: '915d7c58-abe5-4181-8e4c-b33a3a009f31',
    previewImageSource: 'img/apartment-02.jpg',
    isPremium: false,
    costPerNight: 123,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    isFavorite: false,
    rating: 4.0,
    city: 'Amsterdam',
    location: {
      latitude: 0,
      longitude: 0
    }
  },
  {
    id: '915d7c58-abe5-4181-8e4c-b33a3a009f31',
    previewImageSource: 'img/apartment-03.jpg',
    isPremium: true,
    costPerNight: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isFavorite: false,
    rating: 5.0,
    city: 'Amsterdam',
    location: {
      latitude: 0,
      longitude: 0
    }
  }
];
