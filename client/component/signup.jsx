import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handleA from '../handleActivity';
import deleteA from '../deleteActivity';
import { handleSubmit } from '../handleSubmit';

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
}) {
  const navigate = useNavigate();
  const availActivities = allActivities.filter(
    (a) => !selectedA.hasOwnProperty(a)
  );

  return (
    <form
      className='signupInfo'
      onSubmit={(e) =>
        handleSubmit(
          e,
          '/signup',
          email,
          password,
          null,
          null,
          firstName,
          confirmPw,
          {
            activity: selectedA,
          },
          city,
          zipCode,
          gender,
          phone
        )
      }
    >
      {/* top section  */}
      <label forhtml='username'>Email: </label>
      <input
        id='email'
        type='email'
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label forhtml='password'>Password: </label>
      <input
        id='password'
        type='password'
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label forhtml='conPassword'>Confirm Password: </label>
      <input
        id='conPassword'
        type='password'
        required
        onChange={(e) => {
          setConfirmPw(e.target.value);
        }}
      />
      <label forhtml='firstName'>First Name: </label>
      <input
        id='fisrtName'
        type='text'
        required
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
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
      <label forhtml='city'>City: </label>
      <input
        id='city'
        type='text'
        required
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />

      {/* get zipcode */}
      <label forhtml='zipcode'>Zip Code: </label>
      <input
        id='zipcode'
        type='text'
        required
        onChange={(e) => {
          setZipCode(e.target.value);
        }}
      />

      {/* get gender */}
      <label forhtml='gender'>Gender: </label>
      <select
        in='gender'
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
      <label forhtml='phone'>Phone Number: </label>
      <input
        id='phone'
        type='text'
        required
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br></br>

      {/* buttons */}
      <div id='bottom'>
        <Link id='login' to='/login'>
          Login
        </Link>
        <button>Signup</button>
      </div>
    </form>
  );
}
