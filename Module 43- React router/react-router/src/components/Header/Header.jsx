import React from 'react';
import { NavLink } from 'react-router';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink className='ml-5' to="/mobiles" >Mobiles</NavLink>
                <NavLink to="/users" >Users</NavLink>
                <NavLink to='/users2'>Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;