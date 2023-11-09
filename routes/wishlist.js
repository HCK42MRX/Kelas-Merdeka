import express from "express";
import { wishlistCourseController } from "../controllers/wishlist.js";


const router = express.Router();


router.post('/:id', wishlistCourseController)


export {router as wishlistRouter}