import { ProductGraphQL } from "../../models/product.model.js";
import { products } from "../database/products.js";

export const resolvers = {
  Query: {
    allProducts: async () => await ProductGraphQL.find(),
    procuctById: async (__, { id }) => await ProductGraphQL.findById(id),
  },
  Mutation: {
    createProduct: async (__, { title, category, price, inStock }) => {
      const newProduct = await ProductGraphQL.create({
        title,
        category,
        price,
        inStock,
      });
      return newProduct;
    },
    deleteProduct: async (__, { id }) => {
      const deleted = await ProductGraphQL.findByIdAndDelete(id);
      if (deleted) {
        return true;
      }
      return false;
    },
    updateProduct: async (__, { id, ...updates }) => {
      const updatedProduct = await ProductGraphQL.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );
      return updatedProduct;
    },
  },
};
