import axios from "axios";
import React, { useState } from "react";
import "./PostBlog.css";

const PostBlog = () => {
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

      console.log(blog);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <input type="file" onChange={handleFileChange} name="cover" />
          <input type="file" onChange={handleFileChange} name="imageFile" />
          <input
            type="text"
            onChange={handleChange}
            value={blogForm.BlogTitle}
            name="BlogTitle"
          />
          <input
            type="text"
            onChange={handleChange}
            value={blogForm.Subject}
            name="Subject"
          />
          <input
            type="text"
            onChange={handleChange}
            value={blogForm.Notes}
            name="Notes"
          />
        </div>
      </div>

      <button onClick={handleCreate}>Create Blog</button>
    </div>
  );
};

export default PostBlog;
