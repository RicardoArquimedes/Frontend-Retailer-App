import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Form = () => {

    
    const history = useHistory();
    const [data, setData] = useState({
        total: '',
        subtotal: '',

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

        axios.post('http://localhost:8000/api/orders/', {
            total: formData.total,
            subtotal: formData.subtotal,
            
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
                    <input type="text" placeholder="total" className="form-control" onChange={handleInputChange} name="total"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="subtotal" className="form-control" onChange={handleInputChange} name="subtotal"></input>
                </div>
                    
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {/* <li>{data.name}</li>
                <li>{data.lastName}</li> */}
            </ul>
        </Fragment>
    );
}

export default Form;