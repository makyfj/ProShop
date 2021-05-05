import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

// middleware example
// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next();
// });

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

// Not found
app.use(notFound);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
