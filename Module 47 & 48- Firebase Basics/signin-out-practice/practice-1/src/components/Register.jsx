import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase.cofig";
import { useState } from "react";
import Success from "./Success";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import EmailLoginForm from "./EmailLoginForm";

const EmailLogin = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = (e) =>{
    e.preventDefault();
    setShowPassword(!showPassword)
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log(email, password, terms);

    const PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;


    if (!PasswordPattern.test(password)) {
      setError(
        "Password must be 6 digit long, must have upper & lower case and special character"
      );
      return;
    }

    if(!terms){
        setError('Please agree with our terms to continue')
        return;
    }


    //Rest Status: SUccess or Error
    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);

        //Send VErification Email
        sendEmailVerification(result.user)
        .then(()=>{
          alert('Please Verify Your Email')
        })
        .catch()
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <>
      {success ? (
        <Success />
      ) : (
        <div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register Now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                      <label className="label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Email"
                      />
                      <label className="label">Password</label>
                      <div className="relative w-full">
                        
                        <input
                        type={showPassword ? 'text' : 'password'}
                        className="input"
                        placeholder="Password"
                        name="password"
                      />
                      <p onClick={handleShowPassword} className="btn btn-xs absolute right-3 top-1/2 -translate-y-1/2 text-sm p-0">{showPassword ? <FaEyeSlash/> : <FaEye/> }</p>
                      </div>
                      
                      <div className="flex text-left gap-3">
                        <input type="checkbox" name="terms" id="" />
                        <p>Accept our terms and conditions</p>
                      </div>
                      <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    {error && <p className="text-red-400">{error}</p>}
                  </form>
                </div>
                <p>Already have an account?  <Link to='/login'>Login</Link></p>
              </div>
              
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};
export default EmailLogin;
