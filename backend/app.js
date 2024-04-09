const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const authRouter = require("./routes/authRoutes");
const paletteRouter = require("./routes/paletteRoutes");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many accounts created from this IP, please try again after a minute",
});

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
  })
);

app.use(limiter);

//Security
app.use(mongoSanitize());
app.use(xss());

//Serving static files
app.use(express.static(`${__dirname}/assets`));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello Stranger! How are you?",
  });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/palette", paletteRouter);

app.all("*", (req, res, next) => {
  next(new AppError("Can't find the page on server."));
});

app.use(globalErrorHandler);

module.exports = app;
