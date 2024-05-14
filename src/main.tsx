import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App';
import { CategoriesProvider } from './contexts/categories';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>
);
