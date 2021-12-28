import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import LogInPage from "./routes/LogInPage";
import HomePage from "./routes/HomePage";
import Chats from "./routes/Chats";
import Specialist from "./routes/Specialist"
import AllSpecialist from "./routes/AllSpecialist"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="HomePage" element={<HomePage />}></Route>
        <Route path="Chats" element={<Chats />}></Route>
        <Route path="Specialist" element={<Specialist />}></Route>
        <Route path="AllSpecialist" element={<AllSpecialist />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));
