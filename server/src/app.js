require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const RobotRouter = require("./routers/robot-router");

const app = express();
const jsonParser = express.json();


app.use(
  morgan(NODE_ENV === "production" ? "tiny" : "common", {
    skip: () => NODE_ENV === "test",
  })
);
app.use(helmet());
app.use(cors());

app.use('/api/robots', RobotRouter)


app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
