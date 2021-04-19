import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../Utils/axios';


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

        axiosInstance
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
        <Fragment>
            <h1>Form</h1>
            <form className="row" onSubmit={sendData}>
                <div className="col-md-3">
                    <input type="text" placeholder="email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="password" className="form-control" onChange={handleInputChange} name="password"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="name" className="form-control" onChange={handleInputChange} name="first_name"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="lastName" className="form-control" onChange={handleInputChange} name="last_name"></input>
                </div>

                <div className="col-md-3">
                    <input type="text" placeholder="identification" className="form-control" onChange={handleInputChange} name="gov_id"></input>
                </div>

                <div className="col-md-3">
                    <input type="text" placeholder="company" className="form-control" onChange={handleInputChange} name="company"></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
         
        </Fragment>
    );
}

export default Form;