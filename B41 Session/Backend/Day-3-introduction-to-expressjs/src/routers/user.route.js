const express = require("express")

const userRouter = express.Router();


// Api Endpoint
userRouter.get("/register",(request,response)=>{
    response.json({message: "User registered successfully"})
})

module.exports = userRouter;