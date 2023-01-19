import express from "express";
import { users, categories, logs } from "../controllers/get.js";

const router = express.Router();

router.get("/users", users);
router.get("/categories", categories);
router.get("/logs", logs);

export default router;