import React from 'react';
import ReactDOM from 'react-dom/client';
import { CreateApp } from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CreateApp placeCardsCount={5}/>
  </React.StrictMode>
);
