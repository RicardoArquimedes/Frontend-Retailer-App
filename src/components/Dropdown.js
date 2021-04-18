import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
            className={
                isOpen
                    ? 'grid grid-rows-4 text-center items-center text-white bg-blue-500'
                    : 'hidden'
            }
            onClick={toggle}
        >
            <Link to='/' className='p-4'>
                Retailers App
      </Link>
            <Link to='/seccion-1' className='p-4'>
                Login
      </Link>
            <Link to='/seccion-2' className='p-4'>
                Search
      </Link>

        </div>
    );
};

export default Dropdown;