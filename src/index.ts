import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import router from "./routes/llmRoutes";

dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.use("/api", router);
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
