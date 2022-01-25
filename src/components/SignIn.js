import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Heading from './Heading';
import { isExpired, decodeToken  } from "react-jwt";
const axios = require('axios');

const SignIn = () => {

  // localStorage.setItem('token', false);
  // console.log(localStorage.getItem('token'));

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const signInUser = () => {
    console.log('login: ' + login);
    console.log('pass: ' + pass);

    axios({
      method: 'post',
      url: 'https://pr-movies.herokuapp.com/api/user/auth',
      data: {
        login: login,
        password: pass
      }
    }).then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      //useNavigate("/");
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className='d-flex align-items-center w-100 mt-4 mb-4'>
        <Heading/>
      </Link>
      <div style={{textAlign: 'center'}}>
        <h2> Logowanie </h2>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="loginInput">Login</label>
        <input type="text" class="form-control" id="loginInput" placeholder="Login" onChange={(event) => setLogin(event.target.value)} value={login}/>
      </div>

      <div class="form-group w-50 mt-4 mb-4">
        <label for="passwordInput">Hasło</label>
        <input type="password" class="form-control" id="passwordInput" placeholder="*****" onChange={(event) => setPass(event.target.value)} value={pass}/>
      </div>

      <button onClick={signInUser} style={{backgroundColor: '#d30f0f', color: '#fff', marginTop: '20px'}} type="submit" class="btn">Zaloguj mnie</button>

      <Link to="/">
        <button style={{marginTop: '20px', marginLeft: '20px'}} type="button" class="btn btn-secondary">Powrót</button>
      </Link>

    </div>
  );
}

export default SignIn;
