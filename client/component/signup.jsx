import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link, useNavigate } from 'react-router-dom';
import handleA from '../handleActivity';
import deleteA from '../deleteActivity';
>>>>>>> dev

export default function Signup({
  email,
  setEmail,
  password,
  setPassword,
  confirmPw,
  setConfirmPw,
  fristName,
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
}) {
  const navigate = useNavigate();

  const availActivities = allActivities.filter(
    (a) => !selectedA.some((entry) => entry.startsWith(a))
  );

  return (
    <form className='signupInfo' onSubmit={(e) => handleSubmit()}>
      {/* top section  */}
      <label forhtml='username'>Email: </label>
      <input id='email' type='email' />
      <label forhtml='password'>Password: </label>
      <input id='password' type='password' />
      <label forhtml='conPassword'>Confirm Password: </label>
      <input id='conPassword' type='password' />
      <label forhtml='firstName'>First Name: </label>
      <input id='fisrtName' type='text' />
      <br></br>

      {/* activity selection */}
      <label forhtml='activity'>Choose an activity: </label>
      <select
        id='activity'
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

      {/* skill level selection */}
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
        Add
      </button>
      <br></br>

      {/* list field */}
      <div id='listField'>
        <ul>
          {selectedA.map((a, index) => (
            <li key={a}>
              {a}
              <button onClick={() => deleteA(index, setSelectedA)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <label forhtml='city'>City: </label>
      <input id='city' type='text' />
      <label forhtml='zipcode'>zip code: </label>
      <input id='zipcode' type='text' />
      <label forhtml='gender'>Gender: </label>
      <select in='gender'>
        <option></option>
        <option label='Prefer not to say'>Prefer not to say</option>
        <option label='Non-binary'>Non-binary</option>
        <option label='Male'>Male</option>
        <option label='Female'>Female</option>
      </select>
      <label forhtml='phone'>Phone Number: </label>
      <input id='phone' type='text' />
      <br></br>
      <div id='bottom'>
        <Link id='login' to='/login'>
          Login
        </Link>
        <button>Signup</button>
      </div>
    </form>
  );
}
