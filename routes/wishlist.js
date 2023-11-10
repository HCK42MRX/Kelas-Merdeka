import express from "express";
import { getWishlistController, wishlistCourseController } from "../controllers/wishlist.js";


const router = express.Router();


router.post('/:id', wishlistCourseController).get('/', getWishlistController)


export {router as wishlistRouter}