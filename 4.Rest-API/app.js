const express = require("express");
const app = express();
//middleware
app.use(express.json());
let books = [
  {
    id: "1",
    title: "book 1",
  },
  {
    id: "2",
    title: "book 2",
  },
  {
    id: "3",
    title: "book 3",
  },
  {
    id: "4",
    title: "book 4",
  },
];
//intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our book store api",
  });
});
//get all books
app.get("/books", (req, res) => {
  res.json(books);
});
//get a single book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const book = books.filter((book) => {
    return book.id === id;
  });
  if (book.length != 0) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});
//add a book
app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.json(books);
});
//update a book
app.put("/update/:id",(req,res)=>{
    const id = req.params.id;
    const book=books.find((book)=>{
        return book.id===id;
    })
    if(book){
        book.title=req.body.title || book.title
        res.status(200).json({
            message:`Book with ID ${id} updated sucessfully.`,
            data:book
        })
    }else{
        res.status(404).json({
            message:"Book not found"
        })
    }
})
//delete a book
app.delete("/delete/:id",(req,res)=>{
    books=books.filter((book)=>{
       return book.id!==req.params.id;
    })
    res.json({
        message:"Book deleted sucessfully"
    })
})
app.listen(8080, () => {
  console.log("server is listeing...");
});
