const express = require("express");
const routes = require("./routes/GetTest");
const app = express();
const PORT = 5000;

//Registering all Routes
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
