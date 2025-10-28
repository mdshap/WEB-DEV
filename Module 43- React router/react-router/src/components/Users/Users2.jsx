import React from "react";
import { use } from "react";
import { Link, useNavigate } from "react-router";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);

  const userStyle = {
    border: "2px solid red",
    padding: "5px",
  };
  let navigate=useNavigate()

  return (
    <div>
      {users.map((user) => {
        return (
          <div style={userStyle}>
            <h2>{user.name}</h2>
            <Link to={`/users2/${user.id}`}>Show Details</Link>
            <br />
            <button onClick={()=>{
                
                navigate(`/users2/${user.id}`)
            }}>show Details2</button>
          </div>
        );
      })}
    </div>
  );
};

export default Users2;
