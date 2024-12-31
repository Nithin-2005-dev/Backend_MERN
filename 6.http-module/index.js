const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/nithin") {
    console.log("you are in nithin page...");
    res.writeHead(200, { "content-type": "html" });
    res.end("<h1>This is Nithin page</h1>");
  } else if (req.url === "/") {
    res.end("<h1>This is Home page</h1>");
  } else {
    res.end("<h1>Page not found</h1>");
  }
});
server.listen(8080, () => {
  console.log("server is listening...");
});
