const express = require("express");
const {
  imageUpload,
  getImage,
  idImage,
} = require("../controllers/ImageController");
const Filerouter = express.Router();
const { upload } = require("../middleware/multerMiddleware");

Filerouter.post("/imageUpload", upload, imageUpload);
Filerouter.get("/getImage", getImage);
Filerouter.get("/getImage/:id", idImage);

module.exports = Filerouter;
