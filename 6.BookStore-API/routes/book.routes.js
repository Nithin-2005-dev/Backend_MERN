import express from "express";
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  updateBook,
} from "../controllers/book.controller.js";
//create express router
const router = express.Router();
//allthe roytes that are related to books
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);
export default router;
