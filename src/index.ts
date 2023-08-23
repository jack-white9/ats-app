import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import router from "./routes/llmRoutes";

dotenv.config();

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;

// Add headers before the routes are defined
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://main.d36y7gkwyg1mi5.amplifyapp.com/"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});
app.use("/api", router);
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`[server]: Server is running on ${port}`);
});
