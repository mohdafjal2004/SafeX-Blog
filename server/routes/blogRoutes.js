const express = require("express");
const {
  addBlog,
  getAllBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");
const { imageupload } = require("../middleware/multerMiddleware");
const Blogrouter = express.Router();

Blogrouter.post("/post", imageupload, addBlog);
Blogrouter.get("/getAll", getAllBlogs);
Blogrouter.get("/getById/:id", getBlog);
Blogrouter.delete("/deleteById/:id", deleteBlog);
Blogrouter.put("/UpdateById/:id",imageupload,  updateBlog);
module.exports = Blogrouter;
