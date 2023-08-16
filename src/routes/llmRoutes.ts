import express from "express";
import llmController from "../controllers/llmController";

const router = express.Router();

router.get("/get_llm", llmController);

export default router;
