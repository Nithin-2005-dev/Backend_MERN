const express = require("express");
const server = express();

//root route
server.get("/", (req, res) => {
  res.send("welcome to our home page");
});
const products = [
  {
    id: 1,
    label: "product 1",
  },
  {
    id: 2,
    label: "product 2",
  },
  {
    id: 3,
    label: "product 3",
  },
];
//get all products
server.get("/products", (req, res) => {
  res.json(products);
});
//get a single product
server.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.filter((pro) => {
    return pro.id == id;
  });
  if (product.length != 0) {
    res.status(200).send(product);
  } else {
    res.status(404).send("product not found");
  }
});
server.listen(8080, () => {
  console.log("server is listening...");
});
