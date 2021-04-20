import React from 'react';
import axios from "../Utils/axios";
import { Link } from "react-router-dom";



class PersonList extends React.Component {
  state = {
    profile: []

  }

  componentDidMount() {
    axios.get('/api/profile')
      .then(res => {
        const profile = res.data;
        this.setState({ profile });
        // this.props.history.push('/orders');
        console.log("El perfil", this.state.profile)
      })
  }

  render() {
    return (
      <div>
        <div className="flex  items-center mx-4 my-4 h-16 mt-10 bg-white text-gray-900 w-1/4
      relative shadow-xl font-mono">
          <p className="ml-8 mr-2">Welcome </p>
          <td className="mr-2">{this.state.profile.first_name}</td>
          <td>{this.state.profile.last_name}</td>
        </div>

        <div className="grid grid-cols-2 font-bold text-3xl uppercase justify-center" >
          <div className="flex justify-center  items-center h-32  text-center mx-4 my-4 mt-10 bg-blue-500 text-white 
      relative shadow-xl font-bold font-mono">
            <Link to="/orders" className="">
              <p className="text-center"> Orders </p>
</Link>
          </div>
          <div className="flex  justify-center items-center h-32  mx-4 my-4 mt-10 bg-blue-500 text-white
      relative shadow-xl font-mono">
            <Link to="/orders" >
              Adresss
</Link>
          </div>

          <div className="flex  justify-center items-center h-32  mx-4 my-4 mt-10 bg-blue-500 text-white 
      relative shadow-xl font-mono">
            <Link to="/orders" className="">
            
              Shippings
</Link>
          </div>

          <div className="flex  justify-center items-center h-32  mx-4 my-4 mt-10 bg-blue-500 text-white 
      relative shadow-xl font-mono">
            <Link to="/orders" className="">
           
              Payments
</Link>
          </div>
        </div>
      </div>


    )
  }
}

export default PersonList