import express, { Request, Response } from "express";
const createError = require("http-errors");
const path = require("path");
import logger from "./logger";
const dotenv = require("dotenv");

const indexRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use("/", indexRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  logger.error(err);
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(PORT, () => {
    logger.info(`Server running at PORT: ${PORT}`);
  })
  .on("error", (error) => {
    logger.error(error);
  });

module.exports = app;
