import React from "react";
import { useSelector } from "react-redux";
import "./Styles/UserDashboard.css";
import dp from "./Styles/john.jpg";

const UserDashBoard = () => {
  const userData = useSelector((state) => state.users.user) || "No User Found";
  console.log(userData);
  return (
    <div className="dashWrapper">
      <div>
        {!userData ? (
          "No Data Found"
        ) : (
          <div className="dashContainer">
            <div className="left">
              <img src={dp} alt="dp" className="dp" />
            </div>
            <div className="right">
              <div>
                {userData.name && (
                  <h1 className="h1Name">
                    <span>Username :</span> {userData.name}
                  </h1>
                )}
                <div className="h1City">
                  {userData.email && (
                    <div className="h1Email">
                      <span>Email : </span>
                       {userData.email}
                    </div>
                  )}
                </div>
              </div>
              <div className="h1City">Address : Hilarious City</div>
            </div>
          </div>
        )}
        <p className="DPmsg">DP upload feature and many more features coming soon...</p>
      </div>
    </div>
  );
};

export default UserDashBoard;
