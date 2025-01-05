// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { AuthProvider } from './hooks/AuthContext'; 

// const rootElement = document.getElementById('root');

// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <AuthProvider> 
//     <App />
//   </AuthProvider>
// );
// index.js or App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './hooks/AuthContext'; 
ReactDOM.render(

  <AuthProvider>
    
    <App />
  </AuthProvider>,

  document.getElementById('root')
);
