import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/Footer';

import Home from './components/Home';
import Details from './components/Details';
import AddFilm from './components/AddFilm';
import SignUp from './components/SignUp';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/add" element={<AddFilm/>} />
            <Route path="signup" element={<SignUp/>} />
          </Routes>
        </Router>
        <Footer/>
      </div>
  );

}

export default App;
