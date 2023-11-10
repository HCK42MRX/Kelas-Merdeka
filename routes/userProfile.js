import { getUserProfile } from "../controllers/userProfile.js";
import express from 'express';


const router = express.Router();


router.get('/',getUserProfile)


export {router as routerUserProfile}