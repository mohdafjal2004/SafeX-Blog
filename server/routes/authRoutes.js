const express = require("express");
const router = express.Router();
const {
  addUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const test = require("../controllers/testJWTcontroller");
const authorizeUser = require("../middleware/jwtMiddleware");

router.post("/addUser", addUser);
router.post("/loginUser", loginUser);
// router.get("/test", authorizeUser, test);
router.get("/getUser", authorizeUser, getUser);

module.exports = router;
