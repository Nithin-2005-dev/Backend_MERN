import { model, Schema } from "mongoose";
const bookSchema = new Schema(
  {
    title: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  { timestamps: true }
);
export const Book = model("Book", bookSchema);
