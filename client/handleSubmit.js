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
  { activity },
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
    }

    //logic to auth the password
  } catch (error) {
    console.log('Error at handleSubmit', error);
    alert(error.message);
  }
};

export default handleSubmit;
