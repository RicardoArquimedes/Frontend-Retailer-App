import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({toggle}) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-blue-500 text-white
    relative shadow-sm font-mono" role="navigation">
      <Link to="/" className="pl-8">
        Retailers App
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to='/signup'>
          Sign Up
        </Link>
        <Link className="p-4" to='/orders'>
          Search
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
