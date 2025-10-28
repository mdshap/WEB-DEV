import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router";
import { auth } from "../firebase/firebase.cofig";
import { useState } from "react";
import Success from "./Success";
import Register from "./Register";
import { useRef } from "react";

const EmailLoginForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("Please Verify Your Email");
          return;
        }
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid Email or Password");
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
    .then(()=>{
        alert('password reset email sent')
    })
  };

  return (
    <>
      {success ? (
        <Success />
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Login</legend>

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              <div>
                <a onClick={handleForgetPassword} className="link link-hover">
                  Forgot password?
                </a>
              </div>

              <button className="btn btn-neutral mt-4">Login</button>
              {error && <p className="text-red-400"> {error} </p>}
              <p>
                Don't have an account?{" "}
                <NavLink to="/emailLogin">Create Account</NavLink>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      )}
    </>
  );
};

export default EmailLoginForm;
