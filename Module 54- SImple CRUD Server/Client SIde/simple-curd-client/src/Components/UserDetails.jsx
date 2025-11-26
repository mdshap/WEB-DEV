import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            User Details
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Id: {user._id}</p>
        </div>
    );
};

export default UserDetails;