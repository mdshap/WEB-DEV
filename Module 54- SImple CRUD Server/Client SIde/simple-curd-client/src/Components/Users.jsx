import React from "react";
import { use } from "react";
import { useState } from "react";
import { Link } from "react-router";

const userPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);
const Users = () => {
  const [invalidData, setInvalidData] = useState(false);
  const initialUsers = use(userPromise);

  const [users, setUsers] = useState(initialUsers);

  console.log(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);

    if (!email || !name) {
      setInvalidData(true);
      return;
    }

    //Set This USer Data to Database
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);
          console.log("Successfully Inserted");
          e.target.reset();
        }
      });

    setInvalidData(false);
  };

  const deleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/users/${id}`, {method: 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log("Deleted", data);
        if(data.deletedCount){
          const remainingUsers = users.filter( user => user._id !== id)
          setUsers(remainingUsers)
        }
      });
  };

  return (
    <div>
      <h3>Users: {users.length}</h3>
      <div>
        <h3>Add User</h3>
        <hr />
        <form onSubmit={handleAddUser}>
          <label htmlFor="name">Name: </label>
          <input placeholder="Name" type="text" name="name" />
          <br />
          <label htmlFor="email">Email: </label>
          <input placeholder="Email" type="email" name="email" id="" />
          <br />
          <button>Add USer</button>
        </form>
        {invalidData && <p>Invalid User Data</p>}
      </div>
      <div>
        {users.map((user) => {
          return (
            <p>
              {user.name}: {user.email}
              <button onClick={() => deleteUser(user._id)}>X</button>
              <br />
              <Link to={`/users/${user._id}`}> Details </Link>
              <Link to={`/update/${user._id}`}>Update</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
