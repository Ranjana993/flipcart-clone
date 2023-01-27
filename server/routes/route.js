import express from "express";
import { getAllProducts } from "../Controllers/ProductController.js";
import { registerUser, userLogin } from "../Controllers/registerUser.js";

const router = express.Router();


router.post("/register", registerUser)
router.post("/login" , userLogin)

router.get('/products' , getAllProducts)
export default router