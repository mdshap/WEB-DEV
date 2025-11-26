import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user);



  return (
    <div>
      <form>
        <br />
        <label htmlFor="email">Enter E-mail: </label>
        <br />
        <input
          placeholder="Your E-mail"
          className="border-2 px-3 py-1"
          type="email"
          name="email"
          id=""
          defaultValue={user.email}
        />
        <br />
        <label htmlFor="name">Enter Name: </label>
        <br />
        <input
          placeholder="Your Name"
          className="border-2 px-3 py-1"
          type="text"
          name="name"
          id=""
          defaultValue={user.name}
        />
        <br />
        <input className="btn px-full " type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateUser;
