import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
        console.log('signed out')
    })

    setUser(null)
  }

  return (
    <div>
      <h2>This is Login</h2>
      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <img src={user.photoURL} alt="" />
        </div>
      )}

      {user? <button onClick={handleSignOut} >Sign Out</button> : <button onClick={handleGoogleSignIn}>Sign In With Google</button>}
      
    </div>
  );
};

export default Login;
