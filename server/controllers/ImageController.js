const Image = require("../Models/imageModel");

//Using multer for handling image
const imageUpload = async (req, res) => {
  try {
    console.log(req.file);
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
    }

    const { buffer, mimetype } = req.file;
    const image = new Image({
      file: buffer.toString("base64"),
      fileType: mimetype,
    });

    const saveImage = await image.save();
    res.status(201).json({ saveImage });
  } catch (error) {
    console.log(error + "error of controller");
  }
};

//Getting all images
const getImage = async (req, res) => {
  try {
    const image = await Image.find({});
    if (!image) {
      return res.status(404).json({ message: "Image not Found" });
    }
    return res.status(200).json({ image });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//Getting image by id
const idImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: "Image Not found" });
    }

    res.json(image);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { imageUpload, getImage, idImage };
