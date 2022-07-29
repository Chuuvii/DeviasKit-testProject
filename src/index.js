import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Aside from './Aside';
import Tabs from './Tabs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Aside />
    <Tabs />
  </React.StrictMode>
);

reportWebVitals();
