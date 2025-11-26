import React from "react";
import { useState } from "react";
import { use } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);
  const [invalidData, setInvalidData] = useState(false);

  console.log(users);

  const handleAddUSer = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };

    console.log(email, name);
    if (email && name) {
      setInvalidData(false);

      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          const newUsers = [...users, data];
          setUsers(newUsers);
          e.target.reset();
        });
    } else setInvalidData(true);
  };

  return (
    <div>
      <div>
        <h3>Add User</h3>
        <hr />
        <form onSubmit={handleAddUSer}>
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
        {users.map((user) => (
          <p key={user.id}>
            Name: {user.name} <br />
            Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
