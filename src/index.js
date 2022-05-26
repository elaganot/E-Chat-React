import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


