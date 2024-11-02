import React from 'react';
import ReactDOM from 'react-dom/client'; // This is for React 18
import './index.css'; // Importing global styles
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // For measuring performance metrics

// Creating the root element where your React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measuring app performance (can be customized or removed)
reportWebVitals();
