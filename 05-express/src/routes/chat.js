import express from "express";
import { writeChat } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", writeChat);

export default router;
