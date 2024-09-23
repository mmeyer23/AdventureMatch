import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handleA from '../handleActivity';
import deleteA from '../deleteActivity';
import handleSubmit from '../handleSubmit';
console.log(handleSubmit);
export default function Signup({
  email,
  setEmail,
  password,
  setPassword,
  confirmPw,
  setConfirmPw,
  firstName,
  setFirstName,
  activity,
  setActivity,
  skillLevel,
  setSkillLevel,
  city,
  setCity,
  zipCode,
  setZipCode,
  gender,
  setGender,
  phone,
  setPhone,
  allActivities,
  selectedA,
  setSelectedA,
  setZipcodes,
}) {
  const navigate = useNavigate();
  const availActivities = allActivities.filter(
    (a) => !selectedA.hasOwnProperty(a)
  );

  return (
    <>
      <header id='header'></header>
      <form
        className='signupInfo'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(
            e,
            '/signup',
            email,
            password,
            navigate,
            null,
            firstName,
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
        {/* top section  */}
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
        <label htmlFor='conPassword'>Confirm Password: </label>
        <input
          id='conPassword'
          className='allInput'
          value={confirmPw}
          type='password'
          required
          onChange={(e) => {
            setConfirmPw(e.target.value);
          }}
        />
        <label htmlFor='firstName'>First Name: </label>
        <input
          id='firstName'
          className='allInput'
          value={firstName}
          type='text'
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        {/* activity selection */}
        <label htmlFor='activity'>Choose an activity: </label>
        <select
          id='activity'
          className='allInput'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value=''></option>
          {availActivities.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        skill level selection
        <p>Choose skill level: </p>
        <div>
          <label>
            <input
              type='radio'
              name='skillLevel'
              checked={skillLevel === 'Beginner'}
              value='Beginner'
              onChange={(e) => setSkillLevel(e.target.value)}
            ></input>
            <span></span> Beginner
          </label>
          <label>
            <input
              type='radio'
              name='skillLevel'
              checked={skillLevel === 'Intermediate'}
              value='Intermediate'
              onChange={(e) => setSkillLevel(e.target.value)}
            ></input>
            <span></span> Intermediate
          </label>
          <label>
            <input
              type='radio'
              name='skillLevel'
              checked={skillLevel === 'Advanced'}
              value='Advanced'
              onChange={(e) => setSkillLevel(e.target.value)}
            ></input>
            <span></span> Advanced
          </label>
        </div>
        <br></br>
        {/* add button */}
        <button
          type='button'
          onClick={() =>
            handleA(
              activity,
              setActivity,
              selectedA,
              setSelectedA,
              skillLevel,
              setSkillLevel
            )
          }
        >
          ADD
        </button>
        {/* list field */}
        <div id='listField'>
          <ul id='list'>
            {Object.entries(selectedA).map(([activity, skillLevel]) => (
              <li key={activity}>
                {activity} - {skillLevel}
                <button
                  type='button'
                  onClick={() => deleteA(activity, setSelectedA)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <br></br>
        {/* get city */}
        <label htmlFor='city'>City: </label>
        <input
          id='city'
          className='allInput'
          value={city}
          type='text'
          required
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        {/* get zipcode */}
        <label htmlFor='zipcode'>Zip Code: </label>
        <input
          id='zipcode'
          className='allInput'
          value={zipCode}
          type='text'
          required
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
        />
        {/* get gender */}
        <label htmlFor='gender'>Gender: </label>
        <select
          id='gender'
          className='allInput'
          value={gender}
          required
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option></option>
          <option label='Prefer not to say'>Prefer not to say</option>
          <option label='Non-binary'>Non-binary</option>
          <option label='Male'>Male</option>
          <option label='Female'>Female</option>
        </select>
        {/* get cell# */}
        <label htmlFor='phone'>Phone Number: </label>
        <input
          id='phone'
          className='allInput'
          value={phone}
          type='text'
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <br></br>
        {/* buttons */}
        <div id='bottom'>
          <Link id='buttonButton' to='/login'>
            Login
          </Link>
          <button id='linkButton' type='submit'>
            Signup
          </button>
        </div>
      </form>
      <footer id='footer'></footer>
    </>
  );
}
