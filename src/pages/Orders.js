import React, { useState } from 'react';
import axios from "../Utils/axios";


function Orders(props) {
  const [loading, setLoading] = useState(false);
  const subtotal = formUseInput('');
  const total = formUseInput('');


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
      alert("order registered succesfully")
      setLoading(false);
    } catch (e) {
      console.log(e)
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);

      else setError("Something went wrong. Please try again later.");
    }

  }

  return (
    <div>
    <div className="flex flex-row font-sans container mx-auto h-full  justify-center items-center mt-20">
     
   
      <div className="bg-blue-500 text-white shadow-md rounded px-20 pt-10 pb-12 mb-4">
        <div>
        <h1 className="mb-10 font-bold">Orders </h1>
        </div>
        <div>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='subtotal'>Total</label>
          <input className="form-control text-gray-900" type="text" name="total" {...total} />
        </div>
        <div style={{ marginTop: 10 }}>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='total'>Subtotal</label>
          <input  className="form-control text-gray-900"type="text"class name="subtotal" {...subtotal} />
        </div>
          <input className="bg-white text-blue-500 font-bold py-2 px-4 mt-10 rounded" type="button" value={loading ? 'Loading...' : 'Submit Order'} onClick={handleLogin} disabled={loading} /><br />
      </div>
    </div>
    </div>
  );
}

const formUseInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const inputHandleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: inputHandleChange
  }
}

export default Orders;