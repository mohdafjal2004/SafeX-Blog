const express = require("express");
const routes = require("./routes/authRoutes");
const connectDB = require("./Database/db");
const cors = require("cors")

const app = express();
const PORT = 5000;
connectDB();

// For handling JSON data
app.use(express.json());

// for handling CORS
app.use(cors());

//Registering all Routes
app.use("/auth", routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
