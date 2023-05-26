const multer = require("multer");
const storage = multer.memoryStorage();
const imagestorage = multer.memoryStorage();

const upload = multer({ storage: storage }).single("image");


const imageupload = multer({
  storage: imagestorage,
  limits: { fieldSize: 25 * 1024 * 1024 },
}).fields([
  { name: "cover", maxCount: 1 },
  { name: "imageFile", maxCount: 1 },
]);

module.exports = { upload, imageupload };
