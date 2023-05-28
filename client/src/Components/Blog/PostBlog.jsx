import axios from "axios";
import React, { useState } from "react";
import "./PostBlog.css";
import TextareaAutosize from "react-textarea-autosize";
import { useNavigate } from "react-router-dom";

const PostBlog = () => {
  const navigate = useNavigate();

  //Handling the state of 𝗶𝗻𝗽𝘂𝘁 𝘁𝗲𝘅𝘁
  const [blogForm, setBlogForm] = useState({
    BlogTitle: "",
    Subject: "",
    Notes: "",
  });

  const handleChange = (e) => {
    setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
  };

  //Handling the state of 𝗶𝗻𝗽𝘂𝘁 𝗳𝗶𝗹𝗲
  const [file, setFile] = useState({ cover: "", imageFile: "" });

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  };

  const handleCreate = async () => {
    try {
      const formData = new FormData();
      formData.append("cover", file.cover);
      formData.append("imageFile", file.imageFile);
      formData.append("BlogTitle", blogForm.BlogTitle);
      formData.append("Subject", blogForm.Subject);
      formData.append("Notes", blogForm.Notes);
      const blog = await axios.post(
        "http://localhost:5000/blog/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate('/home')
      console.log(blog);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Write Your Blog Here </h1>
      <div className="postContainer">
        <div className="postWrapper">
          <input
            type="file"
            onChange={handleFileChange}
            name="cover"
            className="image"
          />

          <input
            type="file"
            onChange={handleFileChange}
            name="imageFile"
            className="image"
          />
          <input
            type="text"
            onChange={handleChange}
            value={blogForm.BlogTitle}
            name="BlogTitle"
            placeholder="Enter the title of your blog"
            className="inputBlog"
          />
          <input
            type="text"
            onChange={handleChange}
            value={blogForm.Subject}
            name="Subject"
            placeholder="Enter Subject of the blog"
            className="inputBlog"
            maxLength={100}
          />
          <textarea
            type="text"
            onChange={handleChange}
            value={blogForm.Notes}
            name="Notes"
            className="inputBlog"
            placeholder="Write you blog here . . ."
          />
        </div>
        <button onClick={handleCreate} className="postButton">
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default PostBlog;
