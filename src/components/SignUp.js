import React, { useState, useMyHook, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Heading from './Heading';
const axios = require('axios');

const SignUp = () => {

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passRep, setPassRep] = useState('');

  const navigate = useNavigate();

  const signUpUser = () => {
    console.log('login: ' + login);
    console.log('email: ' + email);
    console.log('pass: ' + pass);
    console.log('passRep: ' + passRep);

    if(pass !== passRep) {
      console.log('Hasła są różne!');
      return;
    };

    axios({
      method: 'post',
      url: 'https://pr-movies.herokuapp.com/api/user/create',
      data: {
        name: login,
        email: email,
        password: pass
      }
    }).then((response) => {
      console.log(response);
      //useNavigate("/");
    }).catch((error) => {
      console.log('Mam Error: ' + error);
    })
  };

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
        <input type="text" class="form-control" id="loginInput" placeholder="Login" onChange={(event) => setLogin(event.target.value)} value={login}/>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="emailInput">E-mail</label>
        <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)} value={email}/>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="passwordInput">Hasło</label>
        <input type="password" class="form-control" id="passwordInput" placeholder="*****" onChange={(event) => setPass(event.target.value)} value={pass}/>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="passwordConfirmInput">Potwerdź hasło</label>
        <input type="password" class="form-control" id="passwordConfirmInput" placeholder="*****" onChange={(event) => setPassRep(event.target.value)} value={passRep}/>
      </div>

      <button style={{backgroundColor: '#d30f0f', color: '#fff', marginTop: '20px'}} type="submit" class="btn" onClick={signUpUser}>Zarejestruj mnie</button>

      <Link to="/">
        <button style={{marginTop: '20px', marginLeft: '20px'}} type="button" class="btn btn-secondary">Powrót</button>
      </Link>

    </div>
  );
}

export default SignUp;
