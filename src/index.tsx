import React from 'react';
import ReactDOM from 'react-dom/client';
import { CreateApp } from './components/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CreateApp offers={offers} reviews={reviews} />
  </React.StrictMode>
);
