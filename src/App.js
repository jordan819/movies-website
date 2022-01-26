import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/Footer';

import Home from './components/Home';
import Details from './components/Details';
import AddFilm from './components/AddFilm';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { isExpired } from "react-jwt";

const App = () => {

  function RequireAuth({ children, redirectTo }) {
    let isLogged = !isExpired(localStorage.getItem('token'));;
    return isLogged ? children : <Navigate to={redirectTo} />;
  }

  function NotRequireAuth({ children, redirectTo }) {
    let expired = isExpired(localStorage.getItem('token'));;
    return expired ? children : <Navigate to={redirectTo} />;
  }

  return (
      <div>
        <Router>
          <Routes>
            <Route path='*' element={<NotFound/>} />
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>} />
            <Route
                path="/add"
                element={
                  <RequireAuth redirectTo="/signin">
                      <AddFilm/>
                  </RequireAuth>
                }/>

            <Route
                path="/signup"
                element={
                  <NotRequireAuth redirectTo="/">
                      <SignUp/>
                  </NotRequireAuth>
                }/>

            <Route
                path="/signin"
                element={
                  <NotRequireAuth redirectTo="/">
                      <SignIn/>
                  </NotRequireAuth>
                }/>

          </Routes>
        </Router>
        <Footer/>
      </div>
  );

}

export default App;
