const express = require("express");
const Authroutes = require("./routes/authRoutes");
const Blogroutes = require("./routes/blogRoutes");
const connectDB = require("./Database/db");
const cors = require("cors");
const Filerouter = require("./routes/imageRoutes");

const app = express();
const PORT = 5000;
connectDB();

// For handling JSON data
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "0" }));

// for handling CORS 
app.use(cors());

app.use(function (err, req, res, next) {
  console.log("This is the invalid field ->", err.field);
  next(err);
});

//Registering all Routes
app.use("/auth", Authroutes);
app.use("/blog", Blogroutes);
app.use("/file", Filerouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
