import express from "express";
import { userInformation, categories, channels } from "../controllers/get.js";

const router = express.Router();

router.get("/userInformation", userInformation);
router.get("/categories", categories);
router.get("/channels", channels);

export default router;