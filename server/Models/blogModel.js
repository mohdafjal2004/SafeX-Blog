const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  cover: {
    data: Buffer,
    type: String,
  },
  imageFile: {
    data: Buffer,
    type: String,
  },

  BlogTitle: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  Notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
