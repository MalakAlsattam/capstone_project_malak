import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App';
import LogInPage from "./routes/LogInPage";
import HomePage from "./routes/HomePage";
import Specialist from "./routes/Specialist"
import AllSpecialist from "./routes/AllSpecialist"
import PersonalExperience from "./routes/PersonalExperience"
import Post from "./routes/Post"
import AllPost from "./routes/AllPost"
import AllPersonalExperience from "./routes/AllPersonalExperience"
import AllComments from './routes/AllComments'
import Welcom from './routes/Welcom'
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Welcom />}/>
      <Route path="/" element={<App />}>
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="HomePage" element={<HomePage />}></Route>
        <Route path="Specialist" element={<Specialist />}></Route>
        <Route path="AllSpecialist" element={<AllSpecialist />}></Route>
        <Route path="Post" element={<Post />}></Route>
        <Route path="AllPost" element={<AllPost />}></Route>
        <Route path="PersonalExperience" element={<PersonalExperience />}></Route>
        <Route path="AllPersonalExperience" element={<AllPersonalExperience />} />
        <Route  element={<AllComments />}>
          <Route path=":personalExperienceId" element={<AllComments />} />

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));
