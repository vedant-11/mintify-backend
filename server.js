const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const walletRouter = require("./router/walletRouter");
app.use(cors());
app.use(bodyParser.json());
app.use("/wallet", walletRouter);

mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server started", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error(error);
  });
