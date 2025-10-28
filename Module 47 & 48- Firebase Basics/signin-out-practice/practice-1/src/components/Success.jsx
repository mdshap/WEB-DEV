import React from 'react';
import { NavLink } from 'react-router';

const Success = () => {
    return (
        <div>
            <p>Account Created Successfully</p>
            <NavLink className=' px-4 py-1 rounded-md text-blue-50' to='/'>Go Back</NavLink>
        </div>
    );
};

export default Success;