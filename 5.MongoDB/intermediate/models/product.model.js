import { model, Schema } from "mongoose";
const productSchema = new Schema(
  {
    name: String,
    category: String,
    price: Number,
    inStock: Boolean,
    tags: [String],
  },
  { timestamps: true }
);
export const Product = model("Product", productSchema);
