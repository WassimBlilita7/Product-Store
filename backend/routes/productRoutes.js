import express from "express";
const router = express.Router();
import { getAllProducts, createProduct } from "../controllers/productController.js";
router.get("/", getAllProducts);
router.post("/", createProduct);

export default router;