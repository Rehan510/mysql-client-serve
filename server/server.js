const express = require("express");
const app = express();
const mysql = require("mysql");
const userRoute = require("./src/route/route");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoute);
app.listen(process.env.PORT, () => {
  console.log(`server is runing ${process.env.PORT}`);
});
