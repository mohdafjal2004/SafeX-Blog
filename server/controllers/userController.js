const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const secretKey = "AFJAL2000";

// * Adding User
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Creating an Instance object of User(mongoose model object)
    let newUser = await User.findOne({ email });

    if (newUser) {
      return res.status(400).json({ message: "User already in database" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Creating User object in MongoDB using create()
      newUser = User.create({
        name,
        email,
        password: hashedPassword,
      });
    }
    // After the successful registration, we use jwt.sign()
    // for creating the token which takes two arguments one is
    // payload(here email) data from user and second is secret Key

    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Server side error in adding user" });
  }
};

// * Login User
const loginUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);

    // Verifying email
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Wrong Email" });
    }

    // Verifying password
    let comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({ message: "Wrong Password" });
    }

    // After the successful authentication, we use jwt.sign()
    // for creating the token which takes two arguments one is
    // payload(email here) data from user and second is secret Key

    const token = jwt.sign({ email }, secretKey);

    return res.status(201).json({ token, message: "Login Successfull" });
  } catch (error) {
    res.status(500).json({ message: "Server Side error in login user" });
  }
};

// *Get User Details
const getUser = async (req, res) => {
  //req.user is the same object which was passed the decoded user
  //data from token in JWT Middleware
  try {
    const userEmail = req.user.email;
    //req.user 𝗰𝗼𝗻𝘁𝗮𝗶𝗻𝘀 𝘁𝗵𝗲 𝗱𝗲𝗰𝗼𝗱𝗲𝗱 𝗱𝗮𝘁𝗮 𝗳𝗿𝗼𝗺 𝗝𝗪𝗧
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(401).json({ message: "User data not available in DB" });
    }
    const { name, email } = user;
    return res.status(201).json({ name, email });
  } catch (error) {
    res.send("Server side error");
  }
};

module.exports = { addUser, loginUser, getUser };
