const fs = require("fs");
const path = require("path");
const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}
const filePath = path.join(dataFolder, "example.txt");
//synchronous way of creating file
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "hello from node js");
  console.log("file create successfully!");
}
let readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log(readContentFromFile);
// fs.appendFileSync(filePath, "\nI'm Nithin");
readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log(readContentFromFile);

//asynchronous way of creating file
const asyncFolderPath = path.join(__dirname, "data-async");
if (!fs.existsSync(asyncFolderPath)) {
  fs.mkdirSync(asyncFolderPath);
}
const asyncFilePath=path.join(asyncFolderPath,'example.txt')
fs.writeFile(asyncFilePath,'hello ,Async node js',(error)=>{
    if(!error){
        console.log('async file created successfully!')
        fs.readFile(asyncFilePath,'utf-8',(err,data)=>{
            if(!err){
                console.log(data);
            }
        })
    }
})
