import { useState } from "react";
import "./Authentication.css";
import axios from "axios";

const Authentication = () => {
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
      console.log(response);
      if (response.status === 201) {
        // setloginResponse("Login Successful");
        setloginResponse(response.data.message);
        setUser({
          email: "",
          password: "",
        });
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
        type="text"
        className="input-form"
        value={user.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
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
