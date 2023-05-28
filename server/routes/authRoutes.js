const express = require("express");
const router = express.Router();
const {
  addUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const authorizeUser = require("../middleware/jwtMiddleware");

router.post("/addUser", addUser);
router.post("/loginUser", loginUser);
router.get("/getUser", authorizeUser, getUser);

module.exports = router;
 