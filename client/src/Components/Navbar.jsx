import React from "react";
import '../Styles/Navbar.css'
import { useSelector } from "react-redux";

const Navbar = () => {
const userData = useSelector(state => state.user)
console.log(userData)


  return (
    <div>
      <div className="wrapper">
        <div>Logo</div>
        <div>User</div>
      </div>
    </div>
  );
};

export default Navbar;
