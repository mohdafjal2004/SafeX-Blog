import { useEffect, useState } from "react";
import "./Authentication.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    <div className="form">
      <h1>Sign In</h1>
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

export default Authentication;
