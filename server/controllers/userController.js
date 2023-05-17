const User = require("../Models/userModel");

const addUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Creating an Instance object of User(mongoose model object)
  let newUser = await User.findOne({ email });

  if (newUser) {
    res.status(400).json("User already in database");
  } else {
    // Creating User object in MongoDB using create()
    newUser = User.create({
      name,
      email,
      password,
    });
    res.status(201).json(newUser);
  }
};



module.exports = { addUser };
