import { Author } from "../models/author.model.js";
import { Book } from "../models/book.model.js";

export const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json({
      succes: true,
      message: "author created",
      data: author,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong!",
    });
  }
};
export const createBook = async (req, res) => {
  try {
    const author = await Book.create(req.body);
    res.status(201).json({
      succes: true,
      message: "book created",
      data: author,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong!",
    });
  }
};
export const getBookWithAuthor = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    res.status(201).json({
        succes: true,
        data: book,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wrong!",
    });
  }
};
