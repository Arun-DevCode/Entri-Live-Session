const express = require("express")

const productRouter = express.Router();


// Api Endpoint
productRouter.get("/product",(request,response)=>{
    response.json({message: "Product fetched successfully"})
})

module.exports = productRouter;