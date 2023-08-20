import express from "express";
import llmController from "../controllers/llmController";

const router = express.Router();

router.get("/get_description_keywords", llmController);

export default router;
