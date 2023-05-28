import React, { useEffect, useState } from "react";
import "./Styles/Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./Styles/logo.png";

const Navbar = () => {
  const userData = useSelector((state) => state.users.user);
  console.log(userData);
  return (
    <div className="nav">
      <div className="wrapper">
        <Link to='/home'>
          <img src={logo} alt="" className="logo" />
        </Link>
        <div>
          <Link to="/user" className="user"> User : {userData?.name}</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
