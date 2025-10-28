import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const UserDetails = () => {

    const params = useParams()
    console.log(params)
    
    const user = useLoaderData()
    return (  
        <div>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserDetails;