import express from "express";

// Router config
const ProductRouter = express.Router();

// Import controllers
import { getProduct } from "../controllers/product.controller.js";

// AuthRoutes
ProductRouter.get("/get-products", getProduct);

export default ProductRouter;
