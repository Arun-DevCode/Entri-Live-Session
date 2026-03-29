const express = require("express");

const ProductRouter = express.Router();

// Route Paths

/*
  @Route - /product/create
  @Access - Public
  @Controller - createProduct
*/
ProductRouter.post("/create");

/*
  @Route - /product/get-all
  @Access - Public
  @Controller - getAllProducts
*/
ProductRouter.get("/get-all");

/*
  @Route - /product/get-by-id
  @Access - Public
  @Controller - getProductById
*/
ProductRouter.get("/get-by-id");

/*
  @Route - /product/update
  @Access - Private
  @Controller - updateProductById
*/
ProductRouter.put("/update");

/*
  @Route - /product/delete
  @Access - Private
  @Controller - deleteProductById
*/
ProductRouter.delete("/delete");

module.exports = ProductRouter;
