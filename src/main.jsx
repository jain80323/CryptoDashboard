import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import CryptoContextProvider from './CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <BrowserRouter>
    <CryptoContextProvider>
      <App />
      </CryptoContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
