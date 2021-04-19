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
        <div className="flex  items-center h-16 mt-10 bg-white text-gray-900 w-1/4
      relative shadow-sm font-mono">
          <p className="ml-8 mr-2">Welcome </p>
          <td className="mr-2">{this.state.profile.first_name}</td>
          <td>{this.state.profile.last_name}</td>
        </div>

        <div className="flex flex-row" >
          <div className="flex flex justify-between items-center h-16  mx-4 my-4 mt-10 bg-blue-500 text-white w-1/4
      relative shadow-sm font-mono">
            <Link to="/orders" className="pl-8">
              Orders
</Link>
          </div>
          <div className="flex  justify-between items-center h-16  mx-4 my-4 mt-10 bg-blue-500 text-white w-1/4
      relative shadow-sm font-mono">
            <Link to="/orders" className="pl-8">
              Adresss
</Link>
          </div>

          <div className="flex  justify-between items-center h-16  mx-4 my-4 mt-10 bg-blue-500 text-white w-1/4
      relative shadow-sm font-mono">
            <Link to="/orders" className="pl-8">
              Shippings
</Link>
          </div>

          <div className="flex  justify-between items-center h-16  mx-4 my-4 mt-10 bg-blue-500 text-white w-1/4
      relative shadow-sm font-mono">
            <Link to="/orders" className="pl-8">
              Payments
</Link>
          </div>
        </div>
      </div>


    )
  }
}

export default PersonList