const express = require("express");
const routes = require("./routes/authRoutes");
const app = express();
const PORT = 5000;
const connectDB = require("./Database/db");
connectDB();


// For handling JSON data
app.use(express.json());

//Registering all Routes
app.use("/auth", routes);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
