const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/conn");
const User = require("./models/userschema");
const PORT = process.env.PORT;
app.use(express.json());

//we link the router files
app.use(require("./routers/auth"));

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});
