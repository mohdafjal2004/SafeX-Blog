import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PostButton from "./PostButton";
import "../Styles/GetAllBlogs.css";
import BaseAPI from "../../baseUrl";

const GetAllBlogs = () => {
  const [blog, setBlog] = useState([]);
  const fetchBlogs = async () => {
    const blogs = await axios.get(`${BaseAPI}/blog/getAll`);
    console.log(blogs.data.blogs);
    setBlog(blogs.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="blogsContainer">
      <div className="empty"></div>
      <PostButton />
      <h1>Recent Blogs </h1>

      <BlogCard blog={blog} />
    </div>
  );
};

export default GetAllBlogs;
