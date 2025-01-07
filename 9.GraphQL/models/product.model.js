import { model, Schema } from "mongoose";
const productSchema = new Schema(
  {
    title: String,
    category: String,
    price: Number,
    inStock: Boolean,
  },
  { timestamps: true }
);
export const ProductGraphQL = model("ProductGrapgQL", productSchema);
