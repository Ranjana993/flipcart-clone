import express from "express";
import { getAllProducts, getProductDetailByID } from "../Controllers/ProductController.js";
import { registerUser, userLogin } from "../Controllers/registerUser.js";

const router = express.Router();


router.post("/register", registerUser)
router.post("/login" , userLogin)

router.get('/products' , getAllProducts)
router.get('/product/:id', getProductDetailByID)


export default router