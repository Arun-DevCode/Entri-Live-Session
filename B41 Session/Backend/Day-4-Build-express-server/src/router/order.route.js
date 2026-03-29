const express = require("express");

const OrderRouter = express.Router();

// Route Paths

/*
  @Route - /order/create
  @Access - Private
  @Controller - createOrder
*/
OrderRouter.post("/create");

/*
  @Route - /order/get-all
  @Access - Private
  @Controller - getAllOrders
*/
OrderRouter.get("/get-all");

/*
  @Route - /order/get-by-id
  @Access - Private
  @Controller - getOrderById
*/
OrderRouter.get("/get-by-id");

/*
  @Route - /order/update
  @Access - Private
  @Controller - updateOrderById
*/
OrderRouter.put("/update");

/*
  @Route - /order/delete
  @Access - Private
  @Controller - deleteOrderById
*/
OrderRouter.delete("/delete");

module.exports = OrderRouter;
