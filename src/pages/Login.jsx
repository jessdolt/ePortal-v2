import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import logo from "../assets/eportal.png";
import { instance } from "../lib/axios";
import requests from "../Requests";
import { useDispatch } from "react-redux";
import { signInUser } from "../services/AuthServices";
const Login = () => {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEmpIdChange = (e) => {
    setEmpId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { empId, password };

    const loginUser = async () => {
      try {
        // const csrf = await instance.get(requests.requestCsrf);
        // const response = await instance.post(requests.requestLogin, data);
        // dispatch(userActions.initUser(response.data));
        // setStorageUser(JSON.stringify(response.data.user.EmpID));
        // setStorageToken(JSON.stringify(response.data.token));

        signInUser(data, dispatch, navigate);
      } catch (error) {
        console.error(error);
      }
    };
    loginUser();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="flex flex-col justify-center gap-5 w-full h-full max-w-[250px]"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center self-start ">
          <h1 className="text-2xl font-bold">Sign in to</h1>
          <img
            src={logo}
            alt="E-Portal Logo"
            className="object-scale-down h-10 -mt-1"
          />
        </div>

        <input
          type="text"
          value={empId}
          className=" p-3 border-gray-300 border-solid border rounded-md"
          placeholder="Employee Number"
          onChange={handleEmpIdChange}
        />
        <input
          type="password"
          value={password}
          className=" p-3 border-gray-300 border-solid border rounded-md"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <button className="p-2 btn-primary font-bold">Log In</button>
        <p className="text-gray-400 text-sm mt-8">
          Don't have an account?{" "}
          <Link to="/" className="text-green-600">
            Contact Us
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
