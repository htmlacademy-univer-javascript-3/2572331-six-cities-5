import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import { CITIES } from './mocks/cities';
import { Provider } from 'react-redux';
import { STORE } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <App offers={OFFERS} reviews={REVIEWS} cities={CITIES} />
    </Provider>
  </React.StrictMode>
);
