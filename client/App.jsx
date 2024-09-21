import React, { useState } from 'react';
import Login from './component/login.jsx';
import Signup from './component/signup.jsx';
import Main from './component/main.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './style.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [fristName, setFirstName] = useState('');
  const [activity, setActivity] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [allActivities] = useState(['Golf', 'Hiking', 'Camping', 'Biking']);
  const [selectedA, setSelectedA] = useState({});
  return (
    <>
      <Router>
        <Routes>
          {/* <nav></nav> */}
          <Route
            path='/login'
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassWord={setPassword}
              />
            }
          />
          <Route path='/' element={<Login />} />
          <Route
            path='/signup'
            element={
              <Signup
                email={email}
                setEmail={setEmail}
                password={password}
                setPassWord={setPassword}
                confirmPw={confirmPw}
                setConfirmPw={setConfirmPw}
                fristName={fristName}
                setFirstName={setFirstName}
                activity={activity}
                setActivity={setActivity}
                skillLevel={skillLevel}
                setSkillLevel={setSkillLevel}
                city={city}
                setCity={setCity}
                zipCode={zipCode}
                setZipCode={setZipCode}
                gender={gender}
                setGender={setGender}
                phone={phone}
                setPhone={setPhone}
                allActivities={allActivities}
                selectedA={selectedA}
                setSelectedA={setSelectedA}
              />
            }
          />
          {/* <Main /> */}
        </Routes>
      </Router>
    </>
  );
}
