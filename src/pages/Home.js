import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../Utils/axios';


const Login = () => {

    const history = useHistory();
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [dataForm, updatedataForm] = useState(setData);

    const handleChange = (e) => {
        updatedataForm({
            ...dataForm,
            [e.target.name]: e.target.value.trim(),
            
        });
    };

    const dataSend = (event) => {
        event.preventDefault()
        console.log('send data...' + data.email)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataForm);

        axios
            .post(`/api/login`, {
                email: dataForm.email,
                password: dataForm.password,
            
            })
            .then((res) => {
                history.push('/data');
                console.log(res);
                console.log(res.data);
            });
    };

  return (
    <div className="font-sans container mx-auto h-full flex flex-col justify-center items-center mt-20">
       <form className="row" onSubmit={dataSend}>
      
      <div className="bg-white shadow-md rounded px-20 pt-10 pb-12 mb-4">
      <h1 className="mb-10 font-bold">Log in to your account </h1>
        <div>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='email'>Email</label>
          <input type="text" placeholder="email" className="form-control" onChange={handleChange} name="email"></input>
        </div>
        <div style={{ marginTop: 10 }}>
          <label className="block text-grey-darker text-md font-bold mb-2" htmlFor='password'>Password</label>
          <input type="password" placeholder="password" className="form-control" onChange={handleChange} name="password"></input>
        </div>
        
       
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 mt-10 rounded"  onClick={handleSubmit}>Submit</button>
      </div>
      </form>
    </div>
  );
}



export default Login;