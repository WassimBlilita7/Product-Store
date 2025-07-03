import express from "express";
const router = express.Router();
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController.js";
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;