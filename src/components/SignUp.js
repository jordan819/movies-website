import React from 'react';
import { Link } from "react-router-dom";
import Heading from './Heading';

const SignUp = () => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className='d-flex align-items-center w-100 mt-4 mb-4'>
        <Heading/>
      </Link>
      <div style={{textAlign: 'center'}}>
        <h2> Rejestracja </h2>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="loginInput">Login</label>
        <input type="text" class="form-control" id="loginInput" placeholder="Login"/>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="usernameInput">Nazwa użytkownika</label>
        <input type="text" class="form-control" id="usernameInput" placeholder="Nazwa"/>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="emailInput">E-mail</label>
        <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"/>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="passwordInput">Hasło</label>
        <input type="password" class="form-control" id="passwordInput" placeholder="*****"/>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="passwordConfirmInput">Potwerdź hasło</label>
        <input type="password" class="form-control" id="passwordConfirmInput" placeholder="*****"/>
      </div>

      <button style={{backgroundColor: '#d30f0f', color: '#fff', marginTop: '20px'}} type="submit" class="btn">Zarejestruj mnie</button>

      <Link to="/">
        <button style={{marginTop: '20px', marginLeft: '20px'}} type="button" class="btn btn-secondary">Powrót</button>
      </Link>

    </div>
  );
}

export default SignUp;
