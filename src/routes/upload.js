import express from "express";
import multer from "multer";
import { uploadController } from "../controllers/upload.js";

const router = express.Router();


const storage = multer.memoryStorage(); // Simpan file di memori
const upload = multer({ storage: storage });




router.post('/', upload.single('file'),uploadController)

export {router as uploadRouter}