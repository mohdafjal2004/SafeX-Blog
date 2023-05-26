import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  //a state variable to store the response from API
  //so that it can be delayed when using in callback of
  //useEffect
  const [loading, setLoading] = useState(true);

  //useSelector for getting token from Store
  const token = useSelector((state) => state.token.token);
  console.log(token);
  //useDispatch for sending the user Data to store so that
  //every component can know about the user
  const dispatch = useDispatch();

  const details = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/getUser", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
     
      dispatch(getUser(response.data));
      setLoading(false);
    } catch (error) {
      console.log(error + " Catch Error");
    }
  };

  useEffect(() => {
    details();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>UserDetails</div>;
};

export default UserDetails;
