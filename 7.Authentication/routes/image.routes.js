import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { isAdminUser } from "../middlewares/admin.middleware.js";
import multerMiddleware from "../middlewares/upload.middleware.js";
import {
  deleteImage,
  fetchImages,
  uploadImage,
} from "../controllers/image.controller.js";
export const imageRouter = express.Router();
imageRouter.post(
  "/upload",
  authMiddleware,
  isAdminUser,
  multerMiddleware.single("image"),
  uploadImage
);
imageRouter.get("/get", authMiddleware, fetchImages);
imageRouter.delete("/delete/:id", authMiddleware, isAdminUser, deleteImage);
