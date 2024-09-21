import React from 'react';
import Login from './component/login.jsx';
import Signup from './component/signup.jsx';
import Main from './component/main.jsx';
import { BrowseRouter, Route, Routes, Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <title>placeHolder</title>
      <nav>
        <div>placeHolder</div>
      </nav>
      <Login />
      <Signup />
      <Main />
    </>
  );
}
