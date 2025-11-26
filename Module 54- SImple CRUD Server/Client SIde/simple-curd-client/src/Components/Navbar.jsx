import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex gap-4'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/info'>Info</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </div>
    );
};

export default Navbar;