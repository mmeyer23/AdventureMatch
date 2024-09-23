import React from 'react';
import { Link } from 'react-router-dom';
import { handleSubmit } from '../handleSubmit';

export default function Login({ email, setEmail, password, setPassword }) {
  return (
    <>
      <header id='header'></header>
      <form
        className='loginInfo'
        onSubmit={(e) =>
          handleSubmit(e, '/login', email, password, navigate, isLoggedIn)
        }
      >
        <label htmlFor='email'>Email: </label>
        <input
          id='email'
          className='allInput'
          value={email}
          type='email'
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor='password'>Password: </label>
        <input
          id='password'
          className='allInput'
          value={password}
          type='password'
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
        <div id='bottom'>
          <button id='linkButton'>Login</button>
          <Link id='buttonButton' to='/signup'>
            Signup
          </Link>
        </div>
      </form>
      <footer id='footer'></footer>
    </>
  );
}
