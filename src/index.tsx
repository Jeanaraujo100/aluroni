import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css'
import Products from './pages/Products';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);
