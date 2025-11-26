import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContexts";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signInUser } = use(AuthContext);

  const location = useLocation ();
  const navigate = useNavigate();

  console.log(location)

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();
        navigate(location.state || '/')
      })
      .catch((error) => console.log(error.message));
  };

  const handleForgetPassword = () => {};

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {success ? (
        <div>Login Successful</div>
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
                <form onSubmit={handleEmailLogin}>
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                    />

                    <label className="label">Password</label>
                    <div className="relative w-full">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="input"
                        placeholder="Password"
                      />
                      <p
                        onClick={handleShowPassword}
                        className="btn btn-xs absolute right-7 top-1/2 -translate-y-1/2 text-sm p-0">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </p>
                    </div>

                    <div>
                      <a
                        onClick={handleForgetPassword}
                        className="link link-hover text-blue-400">
                        Forgot password?
                      </a>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                  </fieldset>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
