import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './loginPage/LoginPage';
import RegisterPage from './registerPage/RegisterPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);