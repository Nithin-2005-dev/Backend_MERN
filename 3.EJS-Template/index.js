const express = require("express");
const path = require("path");
const app = express();
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
//set the view engine as ejs
app.set("view engine", "ejs");
 
//set the directory for the views
app.set("views", path.join(__dirname, "views"));

app.get("/",(req,res)=>{
    res.render('home',{title:'Home',products:products})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About page'})
})
app.listen(8080, () => {
  console.log("server is listening...");
});
