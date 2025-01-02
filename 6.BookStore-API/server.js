import express from "express";
import dotenv from "dotenv";
import connectToDB from "./database/mongo.database.js";
import router from "./routes/book.routes.js";
dotenv.config();
const app = express();
//connect to database
connectToDB();
//middleware
app.use(express.json());
//routes
app.use("/api/books", router);
app.listen(process.env.PORT || 3000, () => {
  console.log("server is listening...");
});
