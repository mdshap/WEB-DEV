
import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContexts";

const Register = () => {
  const [success, setSuccess] = useState(false);

  const { createUser } = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
    .then( result => {
      console.log(result.user)
      setSuccess(true)
   })
   .catch( error => {
    console.log(error.message)
   })

    

  };

  // const handleRegister = (e) =>
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   console.log(name)
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then( result => {
  //     console.log(result.user)
  //   })
  //   .catch( error =>{
  //     console.log(error.message)
  //   })
  //   setSuccess(true)
  // };

  return (
    <div>
      {success ? (
        <p>Please Verify Your Email</p>
      ) : (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center w-1/2 lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleRegister}>
                  <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="input"
                      placeholder="Your Name"
                    />

                    <label className="label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                    />

                    <label className="label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                    <div>
                      <p className="text-center">
                        Already Have an Account? Please{" "}
                        <Link className="text-blue-500" to="/login">
                          Login
                        </Link>
                      </p>
                    </div>
                    <button className="btn btn-neutral mt-4">Register</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
