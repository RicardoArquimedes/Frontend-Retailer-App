import React, { useState } from 'react';
import axios from 'axios';
import { setUserlocal } from '../Utils/Common';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');

  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:8000/api/login', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserlocal(response.data.token, response.data.email);
      props.history.push('/orders');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);

      else setError("Something went wrong. Please try again later.");

    });
  }

  return (
    <div className="font-sans container mx-auto h-full flex flex-col justify-center items-center mt-20">
      <h1 className="mb-10 font-bold">Log in to your account </h1>
      <div className="bg-white shadow-md rounded px-20 pt-10 pb-12 mb-4">

        <div>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='email'>Email</label>
          <input type="text" {...email} autoComplete="new-password" />
        </div>
        <div style={{ marginTop: 10 }}>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='password'>Password</label>
          <input type="password" {...password} autoComplete="new-password" />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input className="bg-blue-500 text-white font-bold py-2 px-4 mt-10 rounded" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;