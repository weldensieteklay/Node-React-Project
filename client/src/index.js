import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './hooks/AuthContext';
import {Provider} from 'react-redux'
import Store from './components/store/Store' 

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={Store}>
  <AuthProvider> 
    <App />
  </AuthProvider>
  </Provider>
);
