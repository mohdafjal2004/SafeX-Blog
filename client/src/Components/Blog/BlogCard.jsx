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
                <p>{item.BlogTitle}</p>
                <p>{item.Notes}</p>
                <p>{item.Subject}</p>
              </Link>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default BlogCard;
