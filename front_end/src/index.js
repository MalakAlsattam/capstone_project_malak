import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import LogInPage from "./routes/LogInPage";
import HomePage from "./routes/HomePage";
import Chating from "./routes/Chating";
import Specialist from "./routes/Specialist"



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="HomePage" element={<HomePage />}></Route>
        <Route path="Chating" element={<Chating />}></Route>
        <Route path="Specialist" element={<Specialist />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));
