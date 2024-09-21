import { useNavigate } from 'react-router-dom';

export const handleSubmit = async (
  e,
  endpoint,
  email,
  password,
  confirmPw,
  firstName,
  { activity },
  city,
  zipCode,
  gender,
  phone,
  navigate,
  loginState
) => {
  e.preventDefault();
  console.log(activity);

  if (endpoint === '/signup' && password !== confirmPw) {
    alert('Password does not match!');
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-type': 'applicatioin/json',
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
      window.location.href = '/login';
    }

    //logic to auth the password
  } catch (error) {
    console.log('Error at handleSubmit', error);
    alert(error.message);
  }
};
