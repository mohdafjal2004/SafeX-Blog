import React from "react";
import { useNavigate } from "react-router-dom";
import addIcon from "../Styles/add.gif";
import "../Styles/PostButton.css";

const PostButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/post");
  };

  return (
    <div className="btnDiv">
      <button onClick={handleClick}>
        <img src={addIcon} alt="addIcon" className="addIcon" />
      </button>
    </div>
  );
};

export default PostButton;
