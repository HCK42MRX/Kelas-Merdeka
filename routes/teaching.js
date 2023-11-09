import { teachingController } from "../controllers/teaching.js"; 
import express from "express";

const router = express.Router();

router.patch("/", teachingController);

export { router as teachingRouter };
