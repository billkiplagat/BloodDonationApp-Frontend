import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);



