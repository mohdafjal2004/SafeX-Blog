import React from "react";
import UserDetails from "./UserDetails";
import Navbar from "./Navbar";
import GetAllBlogs from "./Blog/GetAllBlogs";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <UserDetails/>
      <GetAllBlogs />
    </div>
  );
};

export default HomePage;
