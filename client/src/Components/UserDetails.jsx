import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { getUser } from "../store/userSlice";

const UserDetails = () => {
  //useSelector for getting token from Store
  const token = useSelector((state) => state.token[0]);

  //useDispatch for sending the user Data to store so that
  //every component can know about the user
  const dispatch = useDispatch();

  const details = async () => {
    const response = await axios.get("http://localhost:5000/auth/getUser", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch(getUser(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    details();
  });
  return <div>UserDetails</div>;
};

export default UserDetails;
