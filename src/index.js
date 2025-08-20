import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// NEW: theme boot (sets <html data-theme="..."> before app renders)
import './themeBoot';

// NEW: theme styles (CSS variables + base styles)
// keep this AFTER index.css so it can override any base styles
import './theme.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
