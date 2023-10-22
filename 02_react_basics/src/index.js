import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Welcome from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <App />
      <Welcome/>
    </>
  </React.StrictMode>
);
