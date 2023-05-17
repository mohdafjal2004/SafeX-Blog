const express = require("express");
const router = express.Router();
const { addUser, loginUser } = require("../controllers/userController");

router.post("/addUser", addUser);
router.post("/loginUser", loginUser);

module.exports = router;
