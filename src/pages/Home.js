import React, { useState } from 'react';
import { setUserlocal } from '../Utils/Common';
import { Link } from 'react-router-dom';
import axios from "../Utils/axios";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');

  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('/api/login', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserlocal(response.data.token, response.data.email);
      props.history.push('/data');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);

      else setError("Something went wrong. Please try again later.");

    });
  }

  return (
    <div className="font-sans container mx-auto h-full flex flex-col justify-center items-center mt-20">
      <h1 className="mb-10 text-blue-500 font-bold">Log in to your account </h1>
      <div className="bg-blue-500 shadow-md rounded px-12 pt-10 pb-12 mb-4 text-white ">

        <div>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='email'>Email</label>
          <input type="text" className="bg-blue-100 shadow-md rounded text-gray-900" {...email} autoComplete="new-password" />
        </div>
        <div style={{ marginTop: 10 }}>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='password'>Password</label>
          <input type="password" className="bg-blue-100 shadow-md rounded text-gray-900" {...password} autoComplete="new-password" />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input className="bg-white text-blue-500 font-bold py-2 px-4 mt-4 rounded " type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        <div className="flex flex-row mt-4 text-center">
        <h4 className="text-sm mr-2">Not registered yet?</h4>
        <Link to="/signup">
        <h4 className="text-sm text-white">Create an account</h4>
        </Link>
        </div>
       
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