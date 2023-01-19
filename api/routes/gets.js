import express from "express";
import { users, categories } from "../controllers/get.js";

const router = express.Router();

router.get("/users", users);
router.get("/categories", categories);

export default router;