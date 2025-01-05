import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./database/dbConfig.js";
import { productRouter } from "./routes/products.routes.js";
import { bookRouter } from "./routes/book.routes.js";
dotenv.config();
const app = express();
//database
await connectToDB();
//middlewares
app.use(express.json());
//routes
app.use("/api/product/", productRouter);
app.use("/api/", bookRouter);
app.listen(process.env.PORT, () => {
  console.log("server is listening...");
});
