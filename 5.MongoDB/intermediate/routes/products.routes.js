import express from "express";
import {
  getProductAnalysis,
  getProductStats,
  insertSampleProducts,
} from "../controller/product.controller.js";
export const productRouter = express.Router();
productRouter.post("/insertSampleProducts", insertSampleProducts);
productRouter.get("/getProducts", getProductStats);
productRouter.get("/getAnalysis", getProductAnalysis);
