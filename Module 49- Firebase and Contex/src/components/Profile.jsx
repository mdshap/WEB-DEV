import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContexts";

const Profile = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className=" border-2 text-center">
      <h2>Name: {user.displayName}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
};

export default Profile;
