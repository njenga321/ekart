import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateProvider from './stateprovider/StateProvider'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider> 
    <App />
  </StateProvider>
);

// Performance measurement
reportWebVitals();
