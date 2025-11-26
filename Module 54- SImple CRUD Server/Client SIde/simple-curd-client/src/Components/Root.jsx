import React from 'react';
import Users from './Users';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Root = () => {


    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;