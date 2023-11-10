import express from "express";
import multer from "multer";
import { getVideoController, uploadController } from "../controllers/video.js";

const router = express.Router();


const storage = multer.memoryStorage(); // Simpan file di memori
const upload = multer({ storage: storage });




router.post('/:courseId', upload.single('file'),uploadController).get('/:courseId', getVideoController)

export {router as uploadRouter}