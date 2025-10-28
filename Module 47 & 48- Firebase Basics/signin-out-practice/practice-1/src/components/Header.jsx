import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='flex gap-5 justify-center bg-green-100 py-3'>
            <NavLink className=' px-4 py-1 rounded-md text-blue-50' to='/'>Home</NavLink>
            <NavLink className=' px-4 py-1 rounded-md text-blue-50' to='/login'>Login</NavLink>
            <NavLink className=' px-4 py-1 rounded-md text-blue-50' to='/emailLogin'>Register</NavLink>
        </div>
    );
};

export default Header;