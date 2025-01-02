import Book from "../models/Book.models.js";

//get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(302).json(books);
  } catch (err) {
    console.log("failed to get the books", err);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!! please try agein.",
    });
  }
};
//get single book
const getSingleBook = async (req, res) => {
  try {
    const book = await Book.find({ _id: req.params.id });
    if (book?.length != 0) {
      res.status(302).json(book);
    } else {
      res.status(404).json({
        sucess: false,
        message: "Book not found",
      });
    }
  } catch (err) {
    console.log(`failed to get the book with id ${req.params.id}`, err);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!! please try agein.",
    });
  }
};
//add new book
const addNewBook = async (req, res) => {
  try {
    const newBookData = req.body;
    const newlyCreatedBook = await Book.create(newBookData);
    if (newlyCreatedBook) {
      res.status(201).json({
        sucess: true,
        message: "Book added sucessfully!!!",
        data: newlyCreatedBook,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
//upadte book
const updateBook = async (req, res) => {
  try {
    const updatedBookData = req.body;
    const updatedBook=await Book.findByIdAndUpdate(req.params.id,updatedBookData,{new:true})
    if(updatedBook!=null){
        res.status(200).json({
            sucess: true,
            message: "Book updated sucessfully!",
            updatedBook,
          });
    }else{
        res.status(404).json({
            sucess: false,
            message: "Book not found",
          });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!! please try agein.",
    });
  }
};
//detete book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book != null) {
      res.status(200).json({
        sucess: true,
        message: "Book deleted sucessfully!",
        book,
      });
    } else {
      res.status(404).json({
        sucess: false,
        message: "Book not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!! please try agein.",
    });
  }
};
export { getAllBooks, getSingleBook, addNewBook, updateBook, deleteBook };
