import { useState } from "react";
import "./Styles/Authentication.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getToken } from "../store/tokenSlice";

const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
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
        "http://localhost:5000/auth/loginUser",
        user
      );
      if (response.status === 201) {
        setloginResponse(response.data.message);

        //Dispatching the user token to store
        dispatch(getToken(response.data.token));
        console.log(response.data.token);

        // After dispatching the token, navigate
        navigate("/home");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setloginResponse(error.response.data.message);
      }

      setUser({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="body">
      <div className="form">
        <h1>Sign In</h1>
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
          <b>🔒 Login</b>
        </button>
        <div className="route">
          <span> New User ?</span>
          <Link to="/">
            <h3 className="route-btn">Sign Up</h3>
          </Link>
        </div>

        <h4>{loginResponse && <p>{loginResponse}</p>}</h4>
      </div>
      <div className="msg">
        <h1>Welcome back!</h1>
        <p>
          We're so glad to see you again. We know that you have something
          important to say, and we're here to help you share it with the world.
        </p>
        <h4>Happy blogging!!! 😊 </h4>
      </div>
    </div>
  );
};

export default Authentication;
