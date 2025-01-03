import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
export const homeRouter=express.Router();
homeRouter.get("/welcome",authMiddleware, (req, res) => {
const user=(req.userInfo)
  res.json({
    message: `Welcome to home page ${user.username}`,
  });
});
