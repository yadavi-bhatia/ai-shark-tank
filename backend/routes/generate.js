import express from "express";
import { generateStartupIdea } from "../services/aiService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const idea = await generateStartupIdea();
    res.json(idea);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to generate startup idea"
    });
  }
});

export default router;