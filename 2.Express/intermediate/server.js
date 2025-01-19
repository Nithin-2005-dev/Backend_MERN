import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { addTimeStamp, requestLogger } from "./middleware/customMiddleware.js";
import { globalErrorhandler } from "./middleware/errorHandler.js";
import { urlVersioning } from "./middleware/apiVersioning.js";
import { createBasicRateLimiter } from "./middleware/rateLimiting.js";
import { configureCors } from "./config/cors.config.js";
import { router } from "./routes/item.routes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(configureCors());
app.use(requestLogger);
app.use(addTimeStamp);
app.use(globalErrorhandler)
app.use(urlVersioning("v1"));
app.use(createBasicRateLimiter(100,15*16*1000)); //100 request per 15 mins
app.use("/api/v1",router);
app.listen(process.env.PORT, () => {
  console.log("server is listening...");
});
