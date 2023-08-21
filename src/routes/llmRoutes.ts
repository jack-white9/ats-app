import express from "express";
import healthController from "../controllers/healthController";
import llmController from "../controllers/llmController";

const router = express.Router();

router.get("/", healthController);
router.get("/get_description_keywords", llmController);

export default router;
