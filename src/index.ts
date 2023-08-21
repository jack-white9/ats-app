import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import router from "./routes/llmRoutes";

dotenv.config();

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;

app.use("/api", router);
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`[server]: Server is running on ${port}`);
});
