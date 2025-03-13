import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/Common.css';
import './styles/index.css';

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);