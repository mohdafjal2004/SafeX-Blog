const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  fileType: {
    type: String,
  },
  file: {
    data: Buffer,
    type: String,
  },
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
