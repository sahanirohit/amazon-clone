import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault(); // this stops the refresh
    // do the login logic here...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault(); // this stops the refresh
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  // do the register logic here...
  return (
    <div className="login bg-white h-[100vh] flex flex-col items-center">
      <Link to={"/"}>
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
          className="w-[100px] object-contain my-[20px]"
        />
      </Link>
      <div className="login__container w-[350px] flex flex-col p-[20px] border border-gray-300">
        <h1 className="text-2xl font-semibold mb-[20px]">Sign In</h1>
        <form action="">
          <h5 className="mb-[5px]">E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-[30px] border border-gray-600 w-[98%] mb-[10px] px-2 focus:outline-none rounded-sm"
          />
          <h5 className="mb-[5px]">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="h-[30px] border border-gray-600 w-[98%] mb-[10px] px-2 focus:outline-none rounded-sm"
          />
          <button
            type="submit"
            onClick={login}
            className="bg-yellow-400 rounded-sm h-[30px] border mt-[10px] border-yellow-700 w-[98%]">
            Sign In
          </button>
        </form>
        <p className="text-[14px] mt-[10px]">
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button
          onClick={register}
          className="bg-gray-100 rounded-sm border mt-[10px] border-gray-600 w-[98%]">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
