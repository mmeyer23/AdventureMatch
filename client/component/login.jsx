import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handleSubmit from '../handleSubmit';

export default function Login({
  email,
  setEmail,
  password,
  setPassword,
  loginState,
  confirmPw,
  setConfirmPw,
  setFirstName,
  setActivity,
  setSkillLevel,
  city,
  setCity,
  zipCode,
  setZipCode,
  gender,
  setGender,
  phone,
  setPhone,
  selectedA,
  setSelectedA,
  setZipcodes,
}) {
  const navigate = useNavigate();
  return (
    <>
      <header id='header'></header>
      <form
        className='loginInfo'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(
            e,
            '/login',
            email,
            password,
            navigate,
            loginState,
            confirmPw,
            {
              activity: selectedA,
            },
            city,
            zipCode,
            gender,
            phone,
            setZipcodes,
            setEmail,
            setPassword,
            setConfirmPw,
            setFirstName,
            setActivity,
            setSkillLevel,
            setCity,
            setZipCode,
            setGender,
            setPhone,
            setSelectedA
          );
        }}
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
