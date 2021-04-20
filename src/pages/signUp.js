import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../Utils/axios';


const Form = () => {

    const history = useHistory();
    const [data, setData] = useState({
        email: '',
        password: '',
        "profile": {
            first_name: '',
            last_name: '',
            gov_id: '',
            company: '',
        }

    })

    const [formData, updateFormData] = useState(setData);

    const handleInputChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const sendData = (event) => {
        event.preventDefault()
        console.log('enviando data...' + data.first_name + ' ' + data.last_name)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axios
            .post(`http://localhost:8000/api/signup`, {
                email: formData.email,
                password: formData.password,
                "profile": {
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    gov_id: formData.gov_id,
                    company: formData.company
                }
            })
            .then((res) => {
                history.push('/orders');
                console.log(res);
                console.log(res.data);
            });
    };

    return (
        <Fragment >
           
            <div className="font-sans container mx-auto h-full flex flex-col justify-center items-center mt-20">
            <h1 className="font-bold mb-10 text-blue-500">Create your account </h1>
            <form className="bg-blue-500 text-white shadow-md rounded px-12 pt-10 pb-12 mb-4" onSubmit={sendData}>
                <div className="flex flex-row"> 
                <div className="">
                <label className="block text-grey-darker font-bold text-md items-center mr-2 " htmlFor='email'>Email</label>
                    <input type="text" placeholder="@" className="bg-blue-100 shadow-md rounded px-2 mb-2 text-gray-900 " onChange={handleInputChange} name="email"></input>
                </div>
                <div className="col-md-3">
                <label className="block text-grey-darker font-bold text-md items-center  mr-2 ml-8 " htmlFor='email'>Password</label>
                    <input type="password" placeholder="password" className="bg-blue-100 shadow-md rounded px-2 ml-8 mb-2 text-gray-900" onChange={handleInputChange} name="password"></input>
                </div>
                </div>
                <div className="flex flex-row"> 

                <div className="col-md-3">
                <label className="block text-grey-darker font-bold  text-md items-center mt-2 mr-2 mb-1" htmlFor='name'>Name </label>
                    <input type="text" placeholder="Name" className="bg-blue-100 shadow-md rounded px-2 mb-2 text-gray-900" onChange={handleInputChange} name="first_name"></input>
                </div>
                <div className="col-md-3">
                <label className="block text-grey-darker font-bold  text-md items-center mt-2 mr-2 ml-8 mb-1" htmlFor='name'>Last Name </label>   
                    <input type="text" placeholder="Last Name" className="bg-blue-100 shadow-md rounded px-2 ml-8 mb-2 text-gray-900" onChange={handleInputChange} name="last_name"></input>
                </div>
                </div>
                <div className="flex flex-row"> 

                <div className="col-md-3">
                <label className="block text-grey-darker font-bold text-md items-center mt-2 mr-2 mb-1" htmlFor='Id Number'>Id Number </label>
                    <input type="text" placeholder="Id" className="bg-blue-100 shadow-md rounded px-2 text-gray-900 " onChange={handleInputChange} name="gov_id"></input>
                </div>

                <div className="col-md-3">
                <label className="block text-grey-darker font-bold  text-md items-center mt-2 mr-2 mb-1 ml-8" htmlFor='name'>Company </label>
                    <input type="text" placeholder="Company" className="bg-blue-100 shadow-md rounded px-2 ml-8 text-gray-900" onChange={handleInputChange} name="company"></input>
                </div>
                </div>
                <button type="submit" className="bg-white text-blue-500 font-bold py-2 px-4 mt-10 rounded btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
         </div>
        </Fragment>
    );
}

export default Form;