import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
       <Routes>
         <Route path="/registerpage" element={<RegisterPage />}></Route>
         <Route path="/" element={<LoginPage />}></Route>
       </Routes>
     </BrowserRouter> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);