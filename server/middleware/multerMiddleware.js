const multer = require("multer");
const storage = multer.memoryStorage();
const imagestorage = multer.memoryStorage();

const upload = multer({ storage: storage }).single("image");


const imageupload = multer({ storage: imagestorage }).fields([
  { name: "cover", maxCount: 1 },
  { name: "imageFile", maxCount: 1 },
]);

module.exports = { upload, imageupload };
