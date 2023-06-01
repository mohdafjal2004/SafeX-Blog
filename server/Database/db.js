const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://safe:safe@cluster0.jxipi69.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error);
  }   
}; 
module.exports = connect;
 