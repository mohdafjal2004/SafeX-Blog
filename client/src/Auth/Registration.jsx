import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "../store/tokenSlice";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginResponse, setloginResponse] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/addUser",
        user
      );
      console.log(response);
      if (response.status === 201) {
        setloginResponse(response.data.message);

        // After dispatching the token, navigate to login
        navigate("/auth");
      }
    } catch (error) {
      //   if (error.response.status === 400) {
      console.log(error.response.data.message);
      setloginResponse(error.response.data.message);
    }
  };

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <input
        type="text"
        className="input-form"
        value={user.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="email"
        className="input-form"
        value={user.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="passw"
        className="input-form"
        value={user.password}
        name="password"
        onChange={handleChange}
      />
      <button className="btn-form" onClick={handleSubmit}>
        <b>Login</b>
      </button>
      <h4>{loginResponse && <p>{loginResponse}</p>}</h4>
    </div>
  );
};

export default Registration;
