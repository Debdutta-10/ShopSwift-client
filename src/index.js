import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/auth';
import 'antd/dist/reset.css';
import { CartProvider } from './context/cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <CartProvider>
        <App />
    </CartProvider>
  </AuthProvider>
);

reportWebVitals();
