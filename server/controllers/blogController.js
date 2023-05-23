const Blog = require("../Models/blogModel");

const addBlog = async (req, res) => {
  try {
    const { BlogTitle, Subject, Notes } = req.body;

    const cover = req.files["cover"][0];
    const imageFile = req.files["imageFile"][0];

    const coverData = cover.buffer;
    const imageData = imageFile.buffer;

    const blog = new Blog({
      cover: coverData.toString("base64"),
      imageFile: imageData.toString("base64"),
      BlogTitle,
      Subject,
      Notes,
    });

    // console.log("Console  " + blog + "line 19");
    const blogData = await blog.save();
    res.status(201).json(blogData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  if (!blogs) {
    return res.status(404).json({ message: "No Blogs Found" });
  }

  return res.status(200).json({ blogs });
};
module.exports = { addBlog, getAllBlogs };
