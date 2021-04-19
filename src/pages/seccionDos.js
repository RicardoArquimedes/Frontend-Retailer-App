import React, { useState, useEffect } from 'react';

import axios from "../Utils/axios";


function Login(props) {
  const [loading, setLoading] = useState(false);
  const subtotal = useFormInput('');
  const total = useFormInput('');


  const [error, setError] = useState(null);



  // handle button click of login form
  const handleLogin = async () => {

    setError(null);
    setLoading(true);
    try {
      const resProfile = await axios.get('/api/profile');
      const order = { subtotal: subtotal.value, total: total.value, user_p: resProfile.data.gov_id }

      console.log("la orden", order.data)
      console.log("todo", resProfile)
      await axios.post('/api/orders/', order)
      // props.history.push('/');
      setLoading(false);
    } catch (e) {
      console.log(e)
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);

      else setError("Something went wrong. Please try again later.");
    }

  }

  return (
    
    <div className="font-sans container mx-auto h-full flex flex-col justify-center items-center mt-20">
      
      <h1 className="mb-10 font-bold">Orders </h1>
      <ul>

      </ul>
      <div className="bg-white shadow-md rounded px-20 pt-10 pb-12 mb-4">
        <div>

        </div>
        <div>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='subtotal'>Total</label>
          <input type="text" name="total" {...total} />
        </div>
        <div style={{ marginTop: 10 }}>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='total'>Subtotal</label>
          <input type="text" name="subtotal" {...subtotal} />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input className="bg-blue-500 text-white font-bold py-2 px-4 mt-10 rounded" type="button" value={loading ? 'Loading...' : 'Submit Order'} onClick={handleLogin} disabled={loading} /><br />
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