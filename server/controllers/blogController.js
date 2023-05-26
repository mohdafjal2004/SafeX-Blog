const Blog = require("../Models/blogModel");

const addBlog = async (req, res) => {
  try {
    const { BlogTitle, Subject, Notes } = req.body;

    const { cover, imageFile } = req.files;

    const blog = new Blog({
      cover: cover[0].buffer.toString("base64"),
      imageFile: imageFile[0].buffer.toString("base64"),
      BlogTitle,
      Subject,
      Notes,
    });

    const blogData = await blog.save();
    res.status(201).json(blogData);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get All Blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (!blogs) {
      return res.status(404).json({ message: "No Blogs Found" });
    }

    return res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: "Server Error while getting all blogs" });
  }
};

//Get Specific Blog using a id
const getBlog = async (req, res) => {
  try {
    console.log(req.params);
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog Not Found" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ Message: "Server Error while getting a blog" });
  }
};

//Deleting a blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (blog) {
      res.status(200).json({ message: "Blog deleted successfully" });
    }
    if (!blog) {
      res.status(404).json({ message: "No Blog Found for deleting" });
    }
  } catch (error) {
    res.status(503).json({ message: "Server error while deleting the Blog" });
  }
};

// Updating a Blog
const updateBlog = async (req, res) => {
  try {
    const DocumentId = req.params.id;
    const { BlogTitle, Subject, Notes } = req.body;
    const { cover, imageFile } = req.files;

    const updateDocument = {
      BlogTitle: BlogTitle,
      Subject: Subject,
      Notes: Notes,
    };

    if (cover && imageFile) {
      // Binary files are present, update the binary data
      updateDocument.cover = cover[0].buffer.toString("base64");
      updateDocument.imageFile = imageFile[0].buffer.toString("base64");
    }

    const result = await Blog.findByIdAndUpdate(DocumentId, updateDocument, {
      new: true,
    });

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addBlog, getAllBlogs, getBlog, deleteBlog, updateBlog };
