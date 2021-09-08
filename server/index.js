const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("../routes");

const app = express()
  .use(cors())
  .use(morgan("combined"))
  .use(express.json())
  .use("/api", router);

module.exports = app;
