import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

import Home from './components/Home';
import Details from './components/Details';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {

  return (
      <div>

        <Router>
          <Routes>
            <Route path="/details/:id"
            element={<Details/>} />}
            />
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>

        <Footer/>
      </div>
  )

}

export default App;
