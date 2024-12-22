import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Sibishree from './Components/Sibishree.jsx';
import App from './App.jsx';
import Ajay from './Components/Ajay.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sibishree" element={<Sibishree />} />
        <Route path="/ajay" element={<Ajay />} />
        {/* Uncomment and update as needed */}
        {/* <Route path="/:id" element={<Single />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
