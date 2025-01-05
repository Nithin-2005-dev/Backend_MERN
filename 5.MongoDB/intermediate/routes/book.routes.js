import express from "express";
import { createAuthor, createBook, getBookWithAuthor } from "../controller/book.controller.js";
export const bookRouter = express.Router();
bookRouter.post("/author/add", createAuthor);
bookRouter.post("/book/add", createBook);
bookRouter.get("/book/get/:id", getBookWithAuthor);
