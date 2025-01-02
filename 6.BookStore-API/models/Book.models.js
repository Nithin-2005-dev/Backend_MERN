import { model, Schema } from "mongoose";
const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Book title cannot be more than 100 characters"],
  },
  author: {
    type: String,
    required: [true, "Author title is required"],
    trim: true,
  },
  year: {
    type: Number,
    requires: [true, "Publication year is required"],
    min: [1000, "Year must be atleast 1000"],
    max: [new Date().getFullYear(), "Year cannot be in the future"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
const Book = model("Book", bookSchema);
export default Book;
