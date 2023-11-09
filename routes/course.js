import express from "express";
import { getCourseController,createCourseController } from "../controllers/course.js";


const router = express.Router();

router.post("/", createCourseController).get('/', getCourseController)

export {router as courseRouter}