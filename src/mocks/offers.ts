import { Offers } from '../types/offer';

export const OFFERS: Offers = [
  {
    id: '4154ec97-ab51-4926-8493-0763e06d6358',
    previewImageSource: 'img/apartment-01.jpg',
    isPremium: true,
    costPerNight: 120,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isFavorite: true,
    rating: 4.8,
    cityName: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    info: {
      imagesSources: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
      bedroomsCount: 3,
      maxAdultsCount: 4,
      insideItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      host: {
        id: 'd91626c2-7b19-4ecb-b652-5cdfd9ac3700',
        email: 'test2@test.com',
        name: 'Angelina',
        status: 'Pro',
        avatarSource: 'img/avatar-angelina.jpg'
      },
      offerText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
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
    rating: 4.4,
    cityName: 'Amsterdam',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198
    },
    info: {
      imagesSources: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
      bedroomsCount: 1,
      maxAdultsCount: 2,
      insideItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      host: {
        id: 'd91626c2-7b19-4ecb-b652-5cdfd9ac3700',
        email: 'test2@test.com',
        name: 'Angelina',
        status: 'Pro',
        avatarSource: 'img/avatar-angelina.jpg'
      },
      offerText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
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
    rating: 4.1,
    cityName: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    },
    info: {
      imagesSources: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
      bedroomsCount: 2,
      maxAdultsCount: 3,
      insideItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      host: {
        id: 'd91626c2-7b19-4ecb-b652-5cdfd9ac3700',
        email: 'test2@test.com',
        name: 'Angelina',
        status: 'Pro',
        avatarSource: 'img/avatar-angelina.jpg'
      },
      offerText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    }
  },
  {
    id: '66d2fa14-c498-4537-9b2b-8ecc65cef714',
    previewImageSource: 'img/apartment-03.jpg',
    isPremium: true,
    costPerNight: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isFavorite: false,
    rating: 5.0,
    cityName: 'Amsterdam',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
    },
    info: {
      imagesSources: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
      bedroomsCount: 6,
      maxAdultsCount: 12,
      insideItems: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      host: {
        id: 'd91626c2-7b19-4ecb-b652-5cdfd9ac3700',
        email: 'test2@test.com',
        name: 'Angelina',
        status: 'Pro',
        avatarSource: 'img/avatar-angelina.jpg'
      },
      offerText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    }
  }
];
