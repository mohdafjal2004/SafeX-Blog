import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseAPI from "../baseUrl";

const Registration = () => {
  const navigate = useNavigate();
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
        `${BaseAPI}/auth/addUser`,
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
    <div className="body">
      <div className="form">
        <h1 className="h1">Sign Up</h1>
        <input
          type="text"
          className="input-form"
          value={user.name}
          name="name"
          onChange={handleChange}
          placeholder="👤 Username"
        />
        <input
          type="email"
          className="input-form"
          value={user.email}
          name="email"
          onChange={handleChange}
          placeholder="📧  Email ID"
        />
        <input
          type="password"
          className="input-form"
          value={user.password}
          name="password"
          onChange={handleChange}
          placeholder="🔑  Password"
        />
        <button className="btn-form" onClick={handleSubmit}>
          <b>Sign Up</b>
        </button>
        <div className="route">
          Already a User ?
          <Link to="/auth">
            <h3 className="route-btn">Sign In</h3>
          </Link>
        </div>
        <h4>{loginResponse && <p>{loginResponse}</p>}</h4>
      </div>
      <div className="msg">
        <h2>Welcome to the SafeXBlog! We're glad you're here.</h2>
        <p>
          We're excited to have you join our community of bloggers. We know that
          you have something important to say, and we're here to help you share
          it with the world.
        </p>
        <p>
          At SafeXBlog, we believe that everyone has a story to tell. We also
          believe that everyone deserves to be heard. That's why we've created a
          safe and secure platform for you to share your thoughts and ideas.
        </p>
      </div>
    </div>
  );
};

export default Registration;
