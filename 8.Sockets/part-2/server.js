import e from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
const app = e();
const server = http.createServer(app);
app.use(e.static(path.resolve("./public")));
const io = new Server(server);
io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  socket.on("message", (message) => {
    io.emit("newMessage", message);
  });
});
app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});
server.listen(8080, () => {
  console.log("server is listening...");
});
