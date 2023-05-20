import React from "react";
import { useSelector } from "react-redux";

const DisplayUserTest = () => {
    const user = useSelector((state) => state.user)
    console.log(user)
  return (
    <div>
      <div></div>
    </div>
  );
};

export default DisplayUserTest;
