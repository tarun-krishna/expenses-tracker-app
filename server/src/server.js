const express = require("express");
require("dotenv").config();

const cors = require("cors");

//mongodb connection
const connectDB = require("./db/connectDB");
const app = express();
app.use(express.json());
//use middleware
app.use(cors());
app.use(express.json({ extended: false }));

//using routes
app.use(require("./routes/route"));

connectDB();

//PORT
const PORT = process.env.PORT || 8000;

//Listen to the server
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
