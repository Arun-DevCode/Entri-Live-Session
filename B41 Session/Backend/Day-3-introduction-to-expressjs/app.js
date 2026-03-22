const express = require('express');

// Import Routers
const userRouter = require("./src/routers/user.route")
const productRouter = require("./src/routers/product.route")
const app = express();

// Use Routers
app.use(userRouter)
app.use(productRouter)

app.listen(3000,()=>{console.log('Server is running on port 3000')})

// http://localhost:3000/register