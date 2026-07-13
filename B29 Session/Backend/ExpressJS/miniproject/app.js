import express from "express";

// Import Routes
// import AuthRouter from "./src/routes/auth.route.js";
// import UserRouter from "./src/routes/user.route.js";
// import BookingRouter from "./src/routes/booking.route.js";
import ProductRouter from "./src/routes/product.route.js";

// Import rate limiter
import { globalLimiter, strictLimiter } from "./src/utils/ratelimiter.utils.js";

// App Config
const app = express();

// App middleware
app.use(express.json());

// App Routes

// GET: Home Route
app.get("/", (req, res) => {
  res.json("Welcome to server");
});

// Auth Routes

// Global Rate limiter
app.use(globalLimiter);

// Private Routes
// app.use("/api/auth", strictLimiter, AuthRouter);
// app.use("/api/booking", strictLimiter, BookingRouter);

// Public Routes
// app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);

export default app;
