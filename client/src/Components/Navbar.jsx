import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = useSelector((state) => state.users.user);
  console.log(userData);
  return (
    <div>
      <div className="wrapper">
        <div>Logo</div>
        <div>
          <Link to="/user"> User :{userData?.name}</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
