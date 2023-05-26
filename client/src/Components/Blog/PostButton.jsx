import React from "react";
import { useNavigate } from "react-router-dom";

const PostButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/post");
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          border: "2px solid red",
          position: "fixed",
          bottom: "50%",
          right: "12px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={handleClick}
        >
          Add ➕
        </button>
      </div>
    </div>
  );
};

export default PostButton;
