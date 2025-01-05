import { model, Schema } from "mongoose";
const authorSchema = new Schema(
  {
    name: String,
    bio: String,
  },
  { timestamps: true }
);
export const Author = model("Author", authorSchema);
