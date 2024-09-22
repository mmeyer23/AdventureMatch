import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handleA from '../handleActivity';
import deleteA from '../deleteActivity';

export default function Main({
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

  useEffect(() => {
    const initMap = () => {
      const zipcodes = ['90042', '90036', '90028', '91205'];
      const geocoder = new window.google.maps.Geocoder();
      const options = {
        zoom: 12,
        center: zipcodes[0],
      };
      //new map
      const map = new window.google.maps.Map(
        document.getElementById('map'),
        options
      );

      //adding marker
      const addMarker = (location) => {
        new window.google.maps.Marker({
          position: location,
          map: map,
        });
      };

      //geocode each zipcode and add marker
      const promises = zipcodes.map((zipcode) => {
        return new Promise((resolve, reject) => {
          geocoder.geocode({ 'address': zipcode }, (results, status) => {
            if (status === 'OK') {
              const location = results[0].geometry.location;
              addMarker(location);
              //resolve() is called when geocoding operation is completed. this indicates that the
              //promise is fullfilled and pass location to whichever is next
              resolve(location);
            } else {
              console.log(
                `Geocode was not successful for ${zipcode}: ${status}`
              );
              reject(status);
            }
          });
        });
      });

      //this is to set center to be first zipcode, after all geocoding is done
      Promise.all(promises)
        .then((locations) => {
          // Set the center to the first location
          if (locations.length > 0) {
            map.setCenter(locations[0]);
          }
        })
        .catch((error) => {
          console.error('Error geocoding: ', error);
        });
    };

    //loading Google API
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCPg7FdcYJsEj83PpiOaX6Kz385Wrz-KHw&callback=initMap`;

      script.async = true;
      //scirpt should be executed after the document has been completely parsed
      script.defer = true;
      //attaching initMap to global window object. so Google Map API can find and execute after it reloads
      window.initMap = initMap;
      document.body.appendChild(script);
    };

    loadMapScript();

    //clear maps when component unmount
    return () => {
      const script = document.querySelector(
        `script[src*="maps.googleapis.com"]`
      );
      if (script) {
        document.body.removeChild(script);
      }
      delete window.initMap;
    };
  }, []);

  return (
    <>
      <form className='searchMain'>
        <label forhtml='searchActivity'>Choose an activity: </label>
        <select
          id='searchActivity'
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

        <div className='skillLevelMain'>
          <p>Choose skill level: </p>
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
        <div id='listFieldMain'>
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
        <button>Search</button>
      </form>

      <div id='map'></div>
    </>
  );
}
