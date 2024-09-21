import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(email, setEmail, password, setPassword) {
  return (
    <form className='loginInfo'>
      <label forhtml='username'>Email: </label>
      <input id='email' type='email' />
      <label forhtml='password'>Password: </label>
      <input id='password' type='password' />
      <br></br>
      <div id='bottom'>
        <button>Login</button>
        <Link to='/signup'>Signup</Link>
      </div>
    </form>
  );
}
