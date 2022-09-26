import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";

import indexRoute from "./routes/index.routes.js";

const app = express();

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/sessions",
      mongoOptions: mongoConfig,
    }),
    cookie: {
      maxAge: 60000,
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIES_SECRET));
app.use(morgan("dev"));
app.use(indexRoute);

export default app;
