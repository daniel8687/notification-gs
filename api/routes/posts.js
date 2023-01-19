import express from "express";
import { submission } from "../controllers/post.js";

const router = express.Router();

router.post("/submission", submission);

export default router;