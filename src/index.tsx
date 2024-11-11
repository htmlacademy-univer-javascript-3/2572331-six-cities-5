import React from 'react';
import ReactDOM from 'react-dom/client';
import { CreateApp } from './components/app';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import { CITIES } from './mocks/cities';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CreateApp offers={OFFERS} reviews={REVIEWS} cities={CITIES} />
  </React.StrictMode>
);
