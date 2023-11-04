import express from "express";
import { signUpController } from "../controllers/sign-up.js";

const router = express.Router();

router.post("/", signUpController);

export { router as signUpRouter };
