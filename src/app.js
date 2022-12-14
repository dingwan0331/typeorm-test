const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const router = require("./routes");
const { errorLogger, errorResponder } = require("./middlewares/error");
const { sequelize } = require("./database/models");

const app = express();

sequelize
  .sync({ force: false, alter: true })
  .then(() => console.log("connected database"))
  .catch((err) => console.error("occurred error in database connecting", err));

app.use(cors());
app.use(logger("combined"));
app.use(express.json());
app.use(errorLogger);
app.use(errorResponder);
app.use(router);

module.exports = app;
