import { useNavigate } from 'react-router-dom';

const handleSubmit = async (
  e,
  endpoint,
  email,
  password,
  navigate,
  loginState,
  firstName,
  confirmPw,
  { activity = null } = {},
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
) => {
  e.preventDefault();
  if (endpoint === '/signup' && password !== confirmPw) {
    alert('Password does not match!');
    return;
  }
  if (endpoint !== '/main') {
    try {
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          activity,
          city,
          zipCode,
          gender,
          phone,
        }),
      });

      if (!response.ok) {
        throw new Error('connection to server failed');
      }

      const data = await response.json();

      if (endpoint === '/main') {
        console.log('HERE IS OUR DATA:' + data.rows);
        //const zipcodeArray = data.map((obj) => obj.zipcode);
        //console.log(zipcodeArray);
      }

      if (endpoint === '/signup') {
        setEmail('');
        setPassword('');
        setConfirmPw('');
        setFirstName('');
        setActivity('');
        setSkillLevel('');
        setCity('');
        setZipCode('');
        setGender('');
        setPhone('');
        setSelectedA({});

        navigate('/login');
      } else if (endpoint === '/login') {
        //logic to auth the password

        if (data.string === 'password matched for this user') {
          loginState();
          navigate('/main');

          setEmail('');
          setPassword('');
        } else {
          alert(
            'The password you entered does not match our record for this email address'
          );
        }
      }
    } catch (error) {
      console.log('Error at handleSubmit', error);
      alert(error.message);
    }
  } else {
    try {
      const [[activityName, skillLevel]] = Object.entries(activity);
      console.log('ACTIVITY:' + activity);
      const params = new URLSearchParams({
        activityName,
        skillLevel,
        gender,
      }).toString();

      const response = await fetch(`http://localhost:3000/main?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('connection to server failed');
      }

      const data = await response.json();
      // console.log(data);

      if (endpoint === '/main') {
        // console.log('HERE IS OUR DATA:' + data[0].zipcode);
        const zipcodeArray = data.map((obj) => obj.zipcode);
        console.log(zipcodeArray);
      }
    } catch (error) {
      console.log('Error at handleSubmit', error);
      alert(error.message);
    }
  }
};
export default handleSubmit;
