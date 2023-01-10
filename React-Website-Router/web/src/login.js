import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="page">
      <div className="login">
        <h1>Login to Your Account:</h1> <p>Your IT Support</p>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button id="submit" onClick={handleClick}>
          Sign in
        </button>
      </div>
      <div className="sign-up">
        <h1>New Here?</h1>
        <p>Sign up and discover a great amount of new opportunities</p>
        <button id="sign-up" onClick={handleClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
