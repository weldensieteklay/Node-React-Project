import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './hooks/AuthContext'; 

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <AuthProvider> 
    <App />
  </AuthProvider>
);
