const ProductRouter = require("express").Router();

//import controller
const getProducts = require("../controller/product.controller");

// Get Products
ProductRouter.get("/all", getProducts);

module.exports = ProductRouter;
