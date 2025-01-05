import express from "express";
import {
  changePassword,
  loginUser,
  registerUser,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
export const authRouter = express.Router();
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/changePassword", authMiddleware, changePassword);
