const express = require("express");
const server = express();
//define middleware function
const middleware = (req, res, next) => {
  console.log("the first middleware will be run on every request");
  next();
};
server.use(middleware);
server.get("/", (req, res) => {
  res.send("Home page");
});
server.get("/about", (req, res) => {
  res.send("About page");
});
server.listen(8080, () => {
  console.log("server is listening...");
});
