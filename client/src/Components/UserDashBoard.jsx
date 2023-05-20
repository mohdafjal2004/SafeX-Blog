import React from "react";
import { useSelector } from "react-redux";

const UserDashBoard = () => {
  const userData = useSelector((state) => state.users.user) || "No User Found";
  console.log(userData);
  return (
    <div>
      {!userData ? (
        "No Data Found"
      ) : (
        <div>
          <div> {userData.name && <h1> User-name : {userData.name}</h1>}</div>
          <div> {userData.email && <h1> Email : {userData.email}</h1>}</div>
        </div>
      )}
    </div>
  );
};

export default UserDashBoard;
