import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./database/db.js";
import { authRouter } from "./routes/auth.routes.js";
import { homeRouter } from "./routes/home.routes.js";
import { adminRouter } from "./routes/admin.routes.js";
dotenv.config();
//database
connectToDB();
const app = express();
//middleware
app.use(express.json());
//router
app.use("/api/auth", authRouter);
app.use("/api/home", homeRouter);
app.use("/api/admin", adminRouter);
app.listen(process.env.PORT, () => {
  console.log("server is listening...");
});
