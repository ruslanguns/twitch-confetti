import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ConfettiApp from './ConfettiApp';
import './index.css';
import Neon from './Neon';
import StarsParadax from './StarsParadax';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/confetti' element={<ConfettiApp />} />
        <Route path='/stars-paradax' element={<StarsParadax />} />
        <Route path='/neon' element={<Neon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
