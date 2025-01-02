const express = require("express");
const server = express();

//application level settings
server.set("view engine", "ejs");

//routing
server.get("/", (req, res) => {
  res.send("home page");
});
server.post("/api/data", (req, res) => {
  res.json({
    message: "Data recievied",
    data: req.body,
  });
});

//middleware
server.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("something went wrong");
});
