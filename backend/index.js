// backend/index.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// for when we eventually set up a database
/* const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/your_database_name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 */

// possible example call, may want to use axios
BASE_URL = "https://perenual.com/api/"