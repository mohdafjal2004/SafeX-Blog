const express = require("express");
const { addBlog, getAllBlogs } = require("../controllers/blogController");
const {  imageupload } = require("../middleware/multerMiddleware");
const Blogrouter = express.Router();

Blogrouter.post("/post", imageupload, addBlog);
Blogrouter.get("/getAll", imageupload, getAllBlogs);
module.exports = Blogrouter;
