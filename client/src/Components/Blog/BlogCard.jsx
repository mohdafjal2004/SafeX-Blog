import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  console.log(blog);
  return (
    <div className="card">
      <div className="card-wrapper">
        {blog
          .map((item, index) => {
            return (
              <Link
                to={`/blog/${item._id}`}
                key={index}
                className="card-container"
              >
                <img
                  src={`data:image/jpeg;base64,${item.imageFile}`}
                  alt=""
                  className="card-imageFile"
                />
                <div className="blogText">
                  <p className="text-title">{item.BlogTitle}</p>
                </div>
              </Link>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default BlogCard;
