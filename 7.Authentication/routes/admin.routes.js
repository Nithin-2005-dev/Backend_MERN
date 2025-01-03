import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { isAdminUser } from "../middlewares/admin.middleware.js";
export const adminRouter=express.Router();
adminRouter.get("/welcome",authMiddleware,isAdminUser, (req, res) => {
const user=(req.userInfo)
  res.json({
    message: `Welcome to admin page ${user.username}`,
  });
});
